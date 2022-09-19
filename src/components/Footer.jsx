import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box bg="white">
      <Flex p={10} justifyContent={"space-around"} flexWrap={"wrap"} justifyItems={"flex-start"} >
            <Stack w={{base: "100%", lg: "25%"}} py={5} >  
                <Logo />
            </Stack>
            <Flex flexDirection={"column"}  w={{base: "50%", lg: "25%"}}>
              <ListHeader>Links</ListHeader>
              <Link href={'#'}>Home</Link>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Features</Link>
              <Link href={'#'}>Blog</Link>
            </Flex>

            <Flex flexDirection={"column"} w={{base: "50%", lg: "25%"}}>
              <ListHeader>Legal</ListHeader>
              <Link href={'#'}>Terms of use</Link>
              <Link href={'#'}>Terms of conditions</Link>
              <Link href={'#'}>Privacy policy</Link>
              <Link href={'#'}>Cookie policy</Link>
            </Flex>

          <Flex flexDirection={"column"} w={{base: "100%", lg: "25%"}} py={5}>
            <ListHeader>Newsletter</ListHeader>
            <Link href={'#'}>Terms of use</Link>
          </Flex>
      </Flex>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Text>Privacy {} Terms</Text>
            <Text>Contact Us</Text>
          </Stack>
          <Text>Copyright © 2022 xpence</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>

    </Box>
  );
}