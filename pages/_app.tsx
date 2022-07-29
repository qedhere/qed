import "../styles/globals.css";
import "inter-ui/inter.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="theme"
      enableSystem={true}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
