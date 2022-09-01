import "inter-ui/inter.css";
import "katex/dist/katex.min.css";
import "@docs/prism/themes/default.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      storageKey="theme"
      enableSystem={true}
    >
      <NextNProgress
        color="#0070F3"
        startPosition={0.3}
        stopDelayMs={0}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
