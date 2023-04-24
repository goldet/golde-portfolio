import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://unpkg.com/nes.css@latest/css/nes.min.css"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src="https://unpkg.com/aos@next/dist/aos.js"></script>
      </body>
    </Html>
  );
}
