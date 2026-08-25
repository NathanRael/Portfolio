"use client";

import { useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type Language = "en" | "fr";

export default function GoogleTranslate() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const langParam = searchParams.get("lang");
  const language: Language = langParam === "fr" ? "fr" : "en";

  const buildLangURL = useCallback((lang: Language) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    return `?${params.toString()}`;
  }, [searchParams]);

  useEffect(() => {
    document.documentElement.dataset.googleLanguage = language;
    document.documentElement.lang = language;
  }, [language]);

  const handleLanguageChange = (nextLanguage: Language) => {
    document.documentElement.dataset.googleLanguage = nextLanguage;
    document.documentElement.lang = nextLanguage;
    router.replace(buildLangURL(nextLanguage), { scroll: false });
  };

  const oppositeLanguage: Language = language === "en" ? "fr" : "en";
  const oppositeLabel = oppositeLanguage.toUpperCase();

  return (
    <div className="notranslate flex items-center gap-1" translate="no">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => handleLanguageChange(oppositeLanguage)}
        className="h-10 min-w-10 px-2 text-small-2 font-semibold max-sm:h-7 max-sm:min-w-8 max-sm:px-1.5 max-sm:text-[11px]"
      >
        {oppositeLabel}
      </Button>
    </div>
  );
}
