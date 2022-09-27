import * as React from "react";

import "inter-ui/inter.css";
import "katex/dist/katex.min.css";
import "@docs/prism/themes/default.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import { GeistProvider } from "@geist-ui/core";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = React.useState<string>("");

  React.useEffect(() => {
    // @ts-ignore
    setTheme(localStorage.getItem("theme"));
  }, []);

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
      <GeistProvider themeType={theme}>
        <Component {...pageProps} />
      </GeistProvider>
    </ThemeProvider>
  );
}

export default MyApp;
