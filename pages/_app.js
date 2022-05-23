import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import { AmazonProvider } from "../context/AmazonContext";

//
//
function MyApp({ Component, pageProps }) {
  return (
    <AmazonProvider>
      {/*  */}
      <MoralisProvider
        serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
        appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
      >
        <Component {...pageProps} />
      </MoralisProvider>
      {/*  */}
    </AmazonProvider>
  );
}

export default MyApp;
