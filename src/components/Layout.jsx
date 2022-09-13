import {Grid, GridItem} from "@chakra-ui/react"

function Layout ({Header, Main, Footer, children}) {
    return (
        <Grid
            templateAreas={`"header"
                            "main"
                            "footer"`}
            gridTemplateRows={'100px 1fr 100px'}
            gridTemplateColumns={'1fr'}
            h='100vh'
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl bg='orange.300' area={'header'}>
                {Header}
            </GridItem>
            <GridItem pl='2' bg='green.300' area={'main'}>
                {children}
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    )
}

export default Layout