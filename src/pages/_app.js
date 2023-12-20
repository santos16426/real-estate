import "@/app/styles/globals.scss";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
