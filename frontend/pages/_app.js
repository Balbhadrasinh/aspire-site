import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/src/utils/Commons";
import NavBar from "@/src/components/Navbar/NavBar.jsx";
import Footer from "@/src/components/Footer/Footer";

function Aspire({ Component, pageProps }) {
  return (
    <>
      <div>
        <ApolloProvider client={client}>
          <NavBar />
          <Component {...pageProps} />
          <Footer />
        </ApolloProvider>
      </div>
    </>
  );
}

export default Aspire;
