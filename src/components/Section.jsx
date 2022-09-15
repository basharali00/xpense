import {Grid, GridItem} from "@chakra-ui/react"

function Section({textSection, imageSection}) {
    return (
        <Grid 
            templateColumns='repeat(6, 1fr)'
            gap={6} 
            alignItems="center" 
            height="85vh"
        >
            <GridItem 
                colStart={2}
                colSpan={2}
            >
                {textSection}
            </GridItem>

            <GridItem 
                colSpan={2}    
                colStart={4}
            >
                {imageSection}
            </GridItem>
        </Grid>
    )
}

export default Section