import {Grid, GridItem} from "@chakra-ui/react"

import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({children}) {
    return (
        <Grid
            templateAreas={`"header"
                            "main"
                            "footer"`}
            color='blackAlpha.700'
            fontWeight='bold'
            >

            <GridItem pl area={'header'}>
                <Header />
            </GridItem>

            <GridItem pl='2'  area={'main'}>
                {children}
            </GridItem>


            <GridItem pl='2' bg='blue.300' area={'footer'}>
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default Layout