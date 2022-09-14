import { Box, Button,  Flex,  Grid, GridItem, Image, Text} from "@chakra-ui/react"
import img from "../assets/img_1.svg"

function Main () {
    return (
        <Grid 
            templateColumns='repeat(6, 1fr)' 
            gap={6} 
            alignItems="center" 
            height="100%"
        >
            <GridItem 
                colStart={2}
                colSpan={2}
            >
            
                <Text
                    fontSize="6xl"
                    color="brand.dark"
                    my="3"
                >
                    Track your Expenses to Save Money
                </Text>

                <Text
                    fontSize="small"
                    color="brand.light"
                    my="5"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quidem.
                </Text>

                <Flex
                    alignItems="center"
                >
                    <Button
                        size="md"
                        width='200px'
                        variant="light"
                        >
                        Try free demo
                    </Button>

                    <Text 
                        fontSize="sm"
                        m="2"
                        color="brand.light"
                    >
                        Lorem ipsum dolor sit amet.
                    </Text>
                </Flex>
            </GridItem>

            <GridItem 
                colSpan={2} 
                colStart={4}
            >
                <Box boxSize='md'>
                    <Image src={img} alt='Dan Abramov' />
                </Box>
            </GridItem>
        </Grid>
    )
}

export default Main