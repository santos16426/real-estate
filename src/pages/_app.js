import "@/app/styles/globals.scss";
import Head from "next/head";
import { AppProvider } from "@/app/context/AppContext";
const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default App;
