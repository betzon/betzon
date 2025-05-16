// src/app/RootLayout.js
import Head from "next/head";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";
import { Inter } from 'next/font/google'
import Script from "next/script";

const inter = Inter({
  weight: "900",
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <meta charSet="utf-8" />
        <title>BetzOn</title>
        <meta name="description" content="Sports Betting Meets Social Media." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JQKLKB7QW1');
          `}
        </Script>
      </Head>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
