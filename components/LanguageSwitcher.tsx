"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale("en")}
        className={cn(
          "text-sm font-medium transition-colors  hover:bg-transparent ",
          locale === "en" ? "text-primary font-bold" : "text-muted-foreground"
        )}
      >
        EN
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => switchLocale("fr")}
        className={cn(
          "text-sm font-medium transition-colors  hover:bg-transparent",
          locale === "fr" ? "text-primary font-bold" : "text-muted-foreground"
        )}
      >
        FR
      </Button>
    </div>
  );
}
