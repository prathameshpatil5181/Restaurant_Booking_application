import "@/styles/globals.css";
import Layout from "../components/layout/Layout";
import store from "../Store/Store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
