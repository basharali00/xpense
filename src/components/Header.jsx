import {Flex, Center, Button} from "@chakra-ui/react"
import Logo from "./Logo"

function Header() {
    return (
        <Flex h='100%' w="100%" alignItems="center">

            {/* Logo */}
            <Flex h={100} alignItems="center" flex={1}>
                <Logo />
            </Flex>

            {/* Link Wrapper */}
            <Flex 
                justifyContent="space-around" 
                alignItems="center" 
                height="100%"
                flex={1}
            >
                <div>Features</div>
                <div>About us</div>
                <h3>Pricing</h3>
                <h3>Feedback</h3>
            </Flex>

            {/* Try Button */}
            <Center h={100} flex={2}>
                <Button
                    size="md"
                    width='200px'
                    variant='primary'
                >
                    Request a demo
                </Button>
            </Center>

        </Flex>        
    )
}

export default Header