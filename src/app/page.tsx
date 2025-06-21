"use client";

import { Code, Smartphone, Sparkles, Star } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/Footer";
import { ToggleThemeButton } from "@/components/toggleThemeButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.dariomatias.flutter_guide";

  return (
    <div className="bg-background flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full px-4">
          <div className="flex h-14 max-w-screen-2xl mx-auto items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Smartphone className="h-6 w-6" />
              <span className="font-bold text-lg">Flutter Guide</span>
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

      <main className="flex-1">
        <section className="flex items-center justify-center px-4 pt-6 pb-8 md:py-24">
          <div className="flex max-w-screen-md flex-col items-center space-y-6 text-center">
            <h1 className="text-3xl leading-tight font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Your Guide to Mastering Flutter
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl">
              Learn, practice, and build amazing apps with the best Flutter
              content, right in your pocket.
            </p>

            <p className="text-md text-muted-foreground max-w-prose sm:text-lg">
              An app developed to showcase the potential and versatility of
              Flutter. Highlights include responsive interfaces, smooth
              animations, optimized performance, and seamless API integration.
              Built to demonstrate how Flutter enables efficient and visually
              appealing apps for both Android and iOS using a single codebase.
            </p>

            <Button size="lg" asChild>
              <Link
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </Link>
            </Button>
          </div>
        </section>

        <section
          id="features"
          className="flex items-center justify-center bg-slate-50/50 px-4 py-8 md:py-12 lg:py-24 dark:bg-transparent"
        >
          <div className="flex w-full max-w-screen-lg flex-col items-center space-y-10 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl leading-[1.1] font-bold sm:text-3xl md:text-5xl">
                Key Features
              </h2>

              <p className="text-muted-foreground mx-auto max-w-2xl leading-normal sm:text-lg sm:leading-7">
                Everything you need to become a skilled Flutter developer.
              </p>
            </div>

            <div className="grid w-full justify-center gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">
                    Widget of the Day
                  </CardTitle>

                  <Sparkles className="text-muted-foreground h-5 w-5" />
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Explore a new Flutter widget daily, complete with a
                    practical example.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">
                    Tips & Examples
                  </CardTitle>

                  <Code className="text-muted-foreground h-5 w-5" />
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Get concise coding tips and practical snippets to enhance
                    your Flutter projects.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">
                    Practical Guidance
                  </CardTitle>

                  <Star className="text-muted-foreground h-5 w-5" />
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Benefit from straightforward guides designed to improve your
                    Flutter development workflow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
