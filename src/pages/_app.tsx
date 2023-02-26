import { GlobalStyles } from "@/styles/globals";
import type { AppProps } from "next/app";
import { League_Spartan } from "@next/font/google";

const leagueSpartan = League_Spartan({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${leagueSpartan.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}
