import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Exo&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-[#0D0B0C]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
