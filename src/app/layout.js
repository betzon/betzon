import ThemeRegistry from "./ThemeRegistry";
import './globals.css';
import ReduxProvider from "./redux/ReduxProvider";
import Script from 'next/script'; // Import the Script component from next/script

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>BetzOn</title>
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <meta name="description" content="Sports Betting Meets Social Media." />

        {/* Google Analytics: gtag.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JQKLKB7QW1"
          strategy="afterInteractive" // This ensures the script is loaded after the page becomes interactive
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-JQKLKB7QW1');
  `}
        </Script>

      </head>
      <body>

        <ReduxProvider>
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
        </ReduxProvider>

      </body>
    </html>
  );
}
