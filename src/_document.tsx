import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ margin: "0px" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
