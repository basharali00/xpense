import {Grid, GridItem} from "@chakra-ui/react"

import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({children}) {
    return (
        <Grid
            color='blackAlpha.700'
            fontWeight='bold'
            templateColumns='repeat(6, 1fr)' 
        >

            <GridItem height={300} colSpan={6} colStart={2} >
                <Header />
            </GridItem>

            {children}

            <GridItem pl='2' colSpan={4} colStart={2}> 
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default Layout