"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: boolean;
          },
          elementId: string,
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
    __googleTranslateInitialized?: boolean;
  }
}

const GOOGLE_TRANSLATE_ELEMENT_ID = "google_translate_element";
const GOOGLE_TRANSLATE_COOKIE = "googtrans";

type Language = "en" | "fr";

function getTranslatedLanguage(): Language {
  if (typeof document === "undefined") {
    return "en";
  }

  return document.cookie.includes(`${GOOGLE_TRANSLATE_COOKIE}=/en/fr`)
    ? "fr"
    : "en";
}

function clearGoogleTranslateCookie() {
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const cookieOptions = `path=/; ${expires}; SameSite=Lax`;

  document.cookie = `${GOOGLE_TRANSLATE_COOKIE}=; ${cookieOptions}`;
  document.cookie = `${GOOGLE_TRANSLATE_COOKIE}=; domain=.${window.location.hostname}; path=/; ${expires}; SameSite=Lax`;
  document.cookie = `${GOOGLE_TRANSLATE_COOKIE}=; domain=${window.location.hostname}; path=/; ${expires}; SameSite=Lax`;
}

function initializeGoogleTranslate() {
  if (window.__googleTranslateInitialized || !window.google?.translate) {
    return;
  }

  window.__googleTranslateInitialized = true;

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "en,fr",
      autoDisplay: false,
    },
    GOOGLE_TRANSLATE_ELEMENT_ID,
  );
}

function selectGoogleTranslateLanguage(language: Language, attempt = 0) {
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");

  if (!select) {
    if (attempt < 20) {
      window.setTimeout(
        () => selectGoogleTranslateLanguage(language, attempt + 1),
        150,
      );
    }

    return;
  }

  select.value = language;
  select.dispatchEvent(new Event("change", { bubbles: true }));
}

export default function GoogleTranslate() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const initialLanguage = getTranslatedLanguage();

    setLanguage(initialLanguage);
    document.documentElement.dataset.googleLanguage = initialLanguage;

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (window.google?.translate) {
      initializeGoogleTranslate();
    }
  }, []);

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    document.documentElement.dataset.googleLanguage = nextLanguage;

    if (nextLanguage === "en") {
      clearGoogleTranslateCookie();
      window.location.reload();
      return;
    }

    selectGoogleTranslateLanguage("fr");
  };

  const oppositeLanguage: Language = language === "en" ? "fr" : "en";
  const oppositeLabel = oppositeLanguage.toUpperCase();

  return (
    <div className="notranslate flex items-center gap-1" translate="no">
      <div id={GOOGLE_TRANSLATE_ELEMENT_ID} aria-hidden="true" />
      <Button
        type="button"
        variant="tertiary"
        size="sm"
        onClick={() => handleLanguageChange(oppositeLanguage)}
        className="h-8 min-w-10 rounded-md px-2 text-small-2 font-semibold max-sm:h-7 max-sm:min-w-8 max-sm:px-1.5 max-sm:text-[11px]"
      >
        {oppositeLabel}
      </Button>
      <Script
        id="google-translate-script"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <style jsx global>{`
        #${GOOGLE_TRANSLATE_ELEMENT_ID},
        .goog-te-banner-frame,
        .goog-te-balloon-frame,
        .goog-te-gadget,
        .goog-te-menu-frame,
        .goog-te-spinner-pos,
        .skiptranslate {
          display: none !important;
          height: 0 !important;
          min-height: 0 !important;
          visibility: hidden !important;
        }

        body {
          top: 0 !important;
        }

        body > .skiptranslate,
        iframe.goog-te-banner-frame,
        iframe.VIpgJd-ZVi9od-ORHb-OEVmcd {
          display: none !important;
        }

        font {
          font: inherit !important;
        }
      `}</style>
    </div>
  );
}
