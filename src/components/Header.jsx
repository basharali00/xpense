import {Grid, GridItem, Flex, Image, Center, Button} from "@chakra-ui/react"
import Logo from "../assets/Logo.svg"
function Header() {
    return (
        <Grid
            h='100%'
            templateColumns='repeat(6, 1fr)' 
            gap={6} 
            >
            
            {/* Logo */}
            <GridItem                 
                colStart={2}
                colSpan={1}
            >
                <Flex h={100} alignItems="center">
                    <Image src={Logo}>

                    </Image>
                </Flex>
            </GridItem>

            {/* Link Wrapper */}
            <GridItem 
                colStart={3} 
                colSpan={2}
                
            >
                <Flex 
                    justifyContent="space-around" 
                    alignItems="center" 
                    height="100%"
                >
                    <div>Features</div>
                    <div>About us</div>
                    <h3>Pricing</h3>
                    <h3>Feedback</h3>
                </Flex>
            </GridItem>

            {/* Try Button */}
            <GridItem 
                colSpan={1} 
                colStart={5}
            >
                <Center h={100}>
                    <Button
                        size="md"
                        width='200px'
                        variant='primary'
                    >
                        Request a demo
                    </Button>
                </Center>
            </GridItem>
        </Grid>        
    )
}

export default Header