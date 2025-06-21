import { Smartphone } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ToggleThemeButton } from "./toggleThemeButton";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4">
        <div className="flex h-14 max-w-screen-2xl mx-auto items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Smartphone className="h-6 w-6" />

            <span className="font-bold text-lg">
              Flutter Guide
            </span>
          </Link>

          <nav className="flex items-center space-x-4">
            <Button asChild variant="outline" className="whitespace-nowrap px-4 py-2">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </Button>

            <ToggleThemeButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
