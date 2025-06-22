import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-background w-full border-t px-4 md:px-16">
      <div className="text-muted-foreground mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 py-6 text-center text-sm md:flex-row md:text-left">
        <div className="flex flex-col items-center gap-2 md:flex-row">
          <span>© 2025 Flutter Guide</span>

          <span className="hidden md:inline">|</span>

          <span>All rights reserved</span>
        </div>

        <div>
          Developed by{" "}
          <Link
            href="https://github.com/dariomatias-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary underline"
          >
            Dário Matias
          </Link>
        </div>
      </div>
    </footer>
  );
};
