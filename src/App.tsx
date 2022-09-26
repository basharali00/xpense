import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import Pricing from "./pages/Pricing";
import Feedback from "./pages/Feedback";

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FF7235",
      dark: "#292830",
      light: "#BDBDBD",
    },
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
            color: "#FF7235",
          },
        },
        light: {
          bg: "transparent",
          fontSize: "md",
          color: "#FF7235",
          border: "1px solid #FF7235",
          fontWeight: 400,
          _hover: {
            bg: "#FF7235",
            color: "white",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
