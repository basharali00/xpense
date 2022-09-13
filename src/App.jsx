import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <ChakraProvider >
      <Layout Header={<Header />}>

        <h1>section1</h1>
        <h1>section2</h1>
        <h1>section3</h1>
        <h1>section4</h1>
        <h1>section5</h1>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
