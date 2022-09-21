import {Grid, GridItem} from "@chakra-ui/react"

import Header from "../components/Header"
import Footer from "../components/Footer"

function Layout({children}) {
    return (
        <Grid
            color='blackAlpha.700'
            fontWeight='bold'
            templateColumns='repeat(6, 1fr)'
            h={"100vh"} 
        >
            <GridItem zIndex={1} height={"30vh"}  colSpan={{base: 6, xl: 4}} colStart={{base: 1, xl: 2}} >
                <Header />
            </GridItem>

            {children}

            <GridItem colSpan={{base: 6, xl: 4}} colStart={{base: 1, xl: 2}}  alignSelf={"end"}> 
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default Layout