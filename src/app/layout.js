// src/app/RootLayout.js
import Head from "next/head";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";
import ReduxProvider from "./redux/ReduxProvider";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <meta charSet="utf-8" />
        <title>BetzOn</title>
        <meta name="description" content="Sports Betting Meets Social Media." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
