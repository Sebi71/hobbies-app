import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { HobbieProvider } from "@/context/hobbiesContext";
import SmoothScrolling from "@/components/SmoothScrolling";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "L'atelier passion de Sébastien",
  description:
    "Découvrez mes réalisations uniques : rénovation de meubles, bricolage créatif, travaux manuels et créations en origami. Inspirez-vous de mes passions et trouvez des idées pour vos propres projets, authentiques et pleins de créativité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="google-site-verification"
          content="bCdmQsP_KkiWfYglx_1EH2iDHTcx_cqHknqr5iFr9ek"
        />
        <Script
          id="gtag-script"
          src="https://www.googletagmanager.com/gtag/js?id=G-36R7KBSXXL"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-36R7KBSXXL', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScrolling>
          <HobbieProvider>{children}</HobbieProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
