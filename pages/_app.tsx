import "../styles/globals.scss";

function App({ Component, pageProps }: IMyApp) {
  return <Component {...pageProps} />;
}

interface IMyApp {
  Component: any;
  pageProps: any;
}

export default App;
