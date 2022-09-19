import { Box, Image } from "@chakra-ui/react"

import logo_img from "../assets/Logo.svg"

export default function Logo(props) {
    return (
        <Box {...props}>
            <Image src={logo_img} />
        </Box>
    )
}
