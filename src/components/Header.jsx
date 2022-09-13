import {Grid, GridItem} from "@chakra-ui/react"

function Header() {
    return (
        <Grid
            h='100%'
            templateColumns='repeat(5, 1fr)'
            gap={20}
            >
            <GridItem colSpan={1} bg='tomato'>
                Logo
            </GridItem>
            <GridItem colSpan={3} bg='tomato'>
                Links
            </GridItem>
            <GridItem colSpan={1} bg='tomato'>
                Button
            </GridItem>
        </Grid>        
    )
}

export default Header