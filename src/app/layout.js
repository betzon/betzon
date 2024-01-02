import ThemeRegistry from "./ThemeRegistry";
import './globals.css'
import ReduxProvider from "./redux/ReduxProvider";

//import store from './redux/store'
export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Motobookie</title>
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' rel='stylesheet' />
        <meta name="description" content="Sports Betting Meets Social Media." />
      </head>
      <body>

        <ReduxProvider>
          <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
        </ReduxProvider>

      </body>
    </html>
  );
}

