import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background px-4 md:px-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-center md:text-left text-muted-foreground text-sm">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span>© 2025 Flutter Guide</span>

          <span className="hidden md:inline">|</span>

          <span>All rights reserved</span>
        </div>

        <div>
          Developed by

          {" "}

          <Link
            href="https://github.com/dariomatias-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Dário Matias
          </Link>
        </div>
      </div>
    </footer>
  );
}
