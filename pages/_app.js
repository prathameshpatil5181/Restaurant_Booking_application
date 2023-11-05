import "@/styles/globals.css";
import Layout from "../components/layout/Layout";
export default function App({ Component, pageProps }) {
  //hii everone 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
