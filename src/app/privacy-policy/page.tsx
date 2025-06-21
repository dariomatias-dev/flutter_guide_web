import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow max-w-3xl mx-auto px-6 py-10 md:px-12 md:py-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Privacy Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl md:text-4xl font-bold text-center my-8">Privacy Policy</h1>

        <section className="space-y-5 leading-relaxed text-foreground">
          <p>
            This Privacy Policy governs how the Flutter Guide app (referred to as the "Application"), developed by Dário Matias ("Service Provider"), collects, uses, and protects your information. This service is offered as-is and free of charge.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Information Collection and Use</h2>
          <p>The Application may collect the following information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Your device's IP address</li>
            <li>Pages you visit within the Application, along with timestamps and duration</li>
            <li>Overall time spent on the Application</li>
            <li>Your mobile device's operating system</li>
          </ul>
          <p>The Application does not collect precise geolocation data.</p>
          <p>
            Occasionally, the Service Provider may contact you with important notices or promotional materials using the information you provide.
          </p>
          <p>
            For enhanced functionality, the Application may request certain personally identifiable information, which will be handled according to this policy.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Third Party Access</h2>
          <p>
            Aggregated, anonymized data may be shared with trusted third-party services to improve the Application and related services.
          </p>
          <p>The Application also uses third-party services, each with their own privacy policies:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Google Play Services
              </Link>
            </li>

            <li>
              <Link
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                AdMob
              </Link>
            </li>
          </ul>
          <p>Disclosure of your information may occur in the following cases:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>As required by law or legal processes</li>
            <li>To protect rights, safety, or investigate fraud</li>
            <li>With trusted service providers who comply with this privacy policy</li>
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Opt-Out Rights</h2>
          <p>You can stop information collection by uninstalling the Application using standard device procedures.</p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Data Retention Policy</h2>
          <p>
            Your data is retained only as long as necessary. To request deletion of your data, please contact:{" "}
            <a href="mailto:matiasdario75@gmail.com" className="underline hover:text-primary">
              matiasdario75@gmail.com
            </a>.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Children</h2>
          <p>
            The Application is not intended for children under 13 and does not knowingly collect their data. If such data is discovered, it will be promptly deleted.
          </p>
          <p>
            Parents or guardians who suspect their child has provided personal data can contact the Service Provider at{" "}
            <a href="mailto:matiasdario75@gmail.com" className="underline hover:text-primary">
              matiasdario75@gmail.com
            </a>.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Security</h2>
          <p>Reasonable physical, electronic, and procedural safeguards are in place to protect your information.</p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated occasionally. Continued use of the Application constitutes acceptance of changes. Please review regularly.
          </p>
          <p className="italic mt-2">Effective date: January 6, 2025</p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Your Consent</h2>
          <p>By using the Application, you consent to the terms outlined in this Privacy Policy.</p>

          <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>
            For privacy-related inquiries, contact the Service Provider at{" "}
            <a href="mailto:matiasdario75@gmail.com" className="underline hover:text-primary">
              matiasdario75@gmail.com
            </a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
