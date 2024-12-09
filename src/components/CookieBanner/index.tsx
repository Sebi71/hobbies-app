"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { setCookie, getCookie } from "@/lib/cookies";

import "./style.scss";

const COOKIES_CONSENT_KEY = "cookiesConsent";
const COOKIE_EXPIRATION_DAYS = 31;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const CookieBanner: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = getCookie(COOKIES_CONSENT_KEY);
    if (consent === "accepted") setIsAccepted(true);
    else if (consent === "rejected") setIsAccepted(false);
    else setIsAccepted(null);
  }, []);

  const initializeAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "gtm.js", timestamp: new Date() });
    const gtag = (...args: any[]) => window.dataLayer.push(args);
    gtag("js", new Date());
    gtag("config", "G-36R7KBSXXL");
  };

  const handleAccept = () => {
    setIsAccepted(true);
    setCookie(COOKIES_CONSENT_KEY, "accepted", COOKIE_EXPIRATION_DAYS);
    initializeAnalytics();
  };

  const handleReject = () => {
    setIsAccepted(false);
    setCookie(COOKIES_CONSENT_KEY, "rejected", COOKIE_EXPIRATION_DAYS);
  };

  if (isAccepted === null) {
    return (
      <div className="cookie-banner" aria-live="assertive">
        <p>
          Nous utilisons des cookies pour améliorer votre expérience. En
          poursuivant votre navigation, vous acceptez notre utilisation des
          cookies.
        </p>
        <div className="buttons">
          <button className="reject" onClick={handleReject}>
            Rejeter
          </button>
          <button className="accept" onClick={handleAccept}>
            Accepter
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {isAccepted && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-36R7KBSXXL"
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-36R7KBSXXL');
              `,
            }}
          />
        </>
      )}
    </>
  );
};

export default CookieBanner;
