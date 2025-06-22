import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ToggleThemeButton } from "./toggleThemeButton";

export const Header = () => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="w-full px-4">
        <div className="mx-auto flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Flutter Guide</span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="px-4 py-2 whitespace-nowrap"
            >
              <Link href="/privacy-policy">Privacy Policy</Link>
            </Button>

            <ToggleThemeButton />
          </nav>
        </div>
      </div>
    </header>
  );
};
