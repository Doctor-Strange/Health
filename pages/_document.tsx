import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='shortcut icon' href='/fav.png' />
          <meta name='theme-color' content='#000000' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href={`https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap`}
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
