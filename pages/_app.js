import "@/styles/globals.css";
import Layout from "../components/layout/Layout";
import store from "../Store/Store";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
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
