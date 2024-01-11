import "@/app/styles/globals.scss";
import Head from "next/head";
import { AppProvider } from "@/app/context/AppContext";
import Header from "@/app/components/Header";
const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Head>
        <title>Real Estate</title>
      </Head>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </AppProvider>
  );
};

export default App;
