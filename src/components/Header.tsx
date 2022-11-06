import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Collapse,
  chakra,
  Stack,
  shouldForwardProp,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from "framer-motion";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const NAV_ITEMS = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "About us",
    href: "/about",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Feedback",
    href: "/feedback",
  },
];

type MobileNavProps = {
  label: string;
  href: string;
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link to={navItem.href}>
            <Button
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              backgroundColor="transparent"
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Button>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, href }: MobileNavProps) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
          color: linkHoverColor,
        }}
      >
        <Text fontWeight={600} color={linkColor}>
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <ChakraBox>
      <Box>
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justifyContent={"space-between"}
          paddingY={10}
        >
          <Flex
            flex={{ sm: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            justify={{ base: "center", md: "start" }}
            justifySelf={"center"}
          >
            <Logo />
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            mr={10}
            alignItems={"center"}
            justifySelf={"center"}
          >
            <DesktopNav />
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            display={{ base: "none", md: "block" }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <Button
              alignSelf={"center"}
              fontSize={"sm"}
              fontWeight={400}
              variant="primary"
            >
              Request a demo
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </ChakraBox>
  );
}
