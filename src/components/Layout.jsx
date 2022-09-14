import {Grid, GridItem} from "@chakra-ui/react"

function Layout ({Header, Main, Footer}) {
    return (
        <Grid
            templateAreas={`"header"
                            "main"
                            "footer"`}
            gridTemplateRows={'100px 1fr 100px'}
            gridTemplateColumns={'1fr'}
            gap='1'
            color='blackAlpha.700'
            fontWeight='bold'
            >
            <GridItem pl area={'header'}>
                {Header}
            </GridItem>
            <GridItem pl='2'  area={'main'} h='100vh'>
                {Main}
            </GridItem>
            <GridItem pl='2' bg='blue.300' area={'footer'}>
                {Footer}
            </GridItem>
        </Grid>
    )
}

export default Layout