import {ChakraProvider, color, extendTheme} from "@chakra-ui/react"
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Footer from "./components/Footer";

const colors = {
  brand: {

  }
}

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FF7235",
      dark: "#292830",
      light: "#BDBDBD",
    }
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: "#FF7235",
          fontSize: "md",
          color: "white",
          fontWeight: 400,
          border: "1px solid #FF7235",
          _hover: {
            bg: "white",
            color: "#FF7235"
          }
        },
        light: {
          bg: "transparent",
          fontSize: "md",
          color: "#FF7235",
          border: "1px solid #FF7235",
          fontWeight: 400,
          _hover: {
            bg: "#FF7235",
            color: "white"
          }
        }
      },
    }
    },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout 
        Header={<Header />}
        Main={<Main />}
        Footer={<Footer />}
      />
    </ChakraProvider>
  );
}

export default App;
