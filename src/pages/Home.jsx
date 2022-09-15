import { Box, Button,  Flex,  Grid, GridItem, Image, Text} from "@chakra-ui/react"

import Section from "../components/Section" 
import img from "../assets/img_1.svg"

function Home () {
    return (
    <Box>
        {/* #1 Section */}
        <Section
            textSection= 
            {
                    <Box>
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
                    </Box>
                }
                imageSection={
                    <Box boxSize='md'>
                        <Image src={img} alt='Dan Abramov' />
                    </Box>
                }
            >
        </Section>

        {/* #2 Section */}
        <Section
            textSection= {
                    <Box>
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
                    </Box>
                }
                imageSection={
                    <Box boxSize='md'>
                        <Image src={img} alt='Dan Abramov' />
                    </Box>
                }
            >
        </Section>

        {/* #3 Section */}
        <Section
            textSection= {
                    <Box>
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
                    </Box>
                }
                imageSection={
                    <Box boxSize='md'>
                        <Image src={img} alt='Dan Abramov' />
                    </Box>
                }
            >
        </Section>

    </ Box>
    )
}

export default Home