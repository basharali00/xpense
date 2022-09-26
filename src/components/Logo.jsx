import { Box, Image } from "@chakra-ui/react"
import { logo_img } from "../utils/Constants"
export default function Logo() {
    return (
        <Box>
            <Image src={logo_img} />
        </Box>
    )
}
