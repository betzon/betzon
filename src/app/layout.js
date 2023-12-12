import ThemeRegistry from "./ThemeRegistry";
import './globals.css'
import ReduxProvider from "./redux/ReduxProvider";

export const metadata = {
  name: 'Betzon',
  short_name: 'Betzon',
  description: 'Sports Betting Meets Social Media',
  start_url: '/',
  display: 'standalone',
  background_color: '#000',
  theme_color: '#000',
  icons: [
    {
      src: '/favicon.ico',
      sizes: 'any',
      type: 'image/x-icon',
    },
  ],
}
//import store from './redux/store'
export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Betzon</title>
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
      </head>
      <body>

        <ReduxProvider>
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
        </ReduxProvider>

      </body>
    </html>
  );
}

