import { useRef } from "react";
import {
  Box,
  Button,
  chakra,
  Center,
  Flex,
  GridItem,
  Image,
  Text,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion, isValidMotionProp, useInView } from "framer-motion";
import {
  brands,
  img_homepage_1,
  img_homepage_2,
  img_homepage_3,
  img_homepage_4,
  img_homepage_insight,
} from "../utils/Constants";

type HomeProps = {
  isVisible: boolean;
};

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function Home() {
  const insightRef = useRef(null);
  const insightRefIsInView = useInView(insightRef, { once: true });

  const brandsRef = useRef(null);
  const brandsRefIsInView = useInView(brandsRef, { once: true });

  const supportRef = useRef(null);
  const supportRefIsInView = useInView(supportRef, { once: true });

  const saveCostRef = useRef(null);
  const saveCostRefIsInView = useInView(saveCostRef, { once: true });

  const usageRef = useRef(null);
  const usageRefIsInView = useInView(usageRef, { once: true });
  return (
    <GridItem colSpan={6} mt="10" justifyContent={"center"} pt="20">
      {/* #1 Section */}
      <Flex
        alignItems="center"
        height="60vh"
        justifyContent="center"
        direction={{ lg: "row", base: "column" }}
      >
        <ChakraBox
          animate={{
            opacity: [0, 1],
            x: [30, 60],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          w={{ lg: "40%", md: "80%" }}
        >
          <Box px="2">
            <Flex direction={"column"} my="2">
              <Text
                fontSize={{ base: "3xl", lg: "6xl" }}
                color="brand.dark"
                my="3"
                textTransform="uppercase"
              >
                Track your Expenses to Save More Money
              </Text>

              <Text fontSize="small" color="brand.light" my="5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, quidem.
              </Text>
            </Flex>
            <Flex alignItems="center" my="2">
              <Button size="md" width="200px" variant="light">
                Try free demo
              </Button>

              <Text fontSize="sm" m="2" color="brand.light">
                Lorem ipsum dolor sit amet.
              </Text>
            </Flex>
          </Box>
        </ChakraBox>
        <ChakraBox
          animate={{
            opacity: [0, 1],
            x: [95, 50],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.8,

            ease: "easeOut",
          }}
          w={{ lg: "40%", md: "80%" }}
        >
          <Box>
            <Image src={img_homepage_1} py="5" />
          </Box>
        </ChakraBox>
      </Flex>

      {/* Insights Section */}
      <Center backgroundColor="brand.primary" pt="10" mt="20" ref={insightRef}>
        <ChakraBox
          animate={{
            opacity: insightRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Image src={img_homepage_insight} />
        </ChakraBox>
      </Center>

      <Center py="20" ref={brandsRef}>
        <ChakraBox
          animate={{
            opacity: brandsRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Image src={brands} loading="lazy" />
        </ChakraBox>
      </Center>

      {/* #2 Section */}
      <Flex
        alignItems="center"
        justifyContent="center"
        direction={{ lg: "row", base: "column" }}
        py="10"
        ref={supportRef}
      >
        <ChakraBox
          w={{ lg: "40%", md: "80%" }}
          animate={{
            opacity: supportRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Box px="2">
            <Text color="brand.light" textTransform="uppercase" mb="-5">
              Alwalys online
            </Text>
            <Text
              fontSize={{ base: "3xl", lg: "6xl" }}
              color="brand.dark"
              my="3"
            >
              Real-time support with cloud
            </Text>

            <Text fontSize="small" color="brand.light" my="5">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </Text>

            <Flex alignItems="center">
              <Button size="md" width="200px" variant="light">
                Learn More icon
              </Button>
            </Flex>
          </Box>
        </ChakraBox>

        <ChakraBox
          animate={{
            opacity: supportRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Box>
            <Image src={img_homepage_2} py="5" loading="lazy" />
          </Box>
        </ChakraBox>
      </Flex>

      {/* #3 Section */}

      <Flex
        alignItems="center"
        justifyContent="center"
        direction={{ lg: "row", base: "column-reverse" }}
        py="10"
        ref={saveCostRef}
      >
        <ChakraBox
          animate={{
            opacity: saveCostRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <Box px="2">
            <Image src={img_homepage_3} py="5" loading="lazy" />
          </Box>
        </ChakraBox>

        <ChakraBox
          w={{ lg: "40%", md: "80%" }}
          animate={{
            opacity: saveCostRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <Box px="2">
            <Text color="brand.light" textTransform="uppercase" mb="-5">
              free some cost
            </Text>
            <Text
              fontSize={{ base: "3xl", lg: "6xl" }}
              color="brand.dark"
              pb="3"
              my="3"
            >
              Save cost for you and family
            </Text>

            <Text fontSize="small" color="brand.light" my="5">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </Text>

            <Flex alignItems="center">
              <Button size="md" width="200px" variant="light">
                Learn More icon
              </Button>
            </Flex>
          </Box>
        </ChakraBox>
      </Flex>

      {/* #4 Section */}
      <Flex
        alignItems="center"
        justifyContent="center"
        height="90vh"
        direction={{ lg: "row", base: "column" }}
        ref={usageRef}
      >
        <ChakraBox
          w={{ lg: "40%", md: "80%" }}
          animate={{
            opacity: usageRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Box px="2">
            <Text color="brand.light" textTransform="uppercase" mb="-5">
              Use anytime
            </Text>
            <Text
              fontSize={{ base: "3xl", lg: "6xl" }}
              color="brand.dark"
              pb="3"
              my="3"
            >
              Use anytime when you need
            </Text>

            <Text fontSize="small" color="brand.light" my="5">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper
              eget ut.
            </Text>

            <Flex alignItems="center">
              <Button size="md" width="200px" variant="light">
                Learn More icon
              </Button>
            </Flex>
          </Box>
        </ChakraBox>

        <ChakraBox
          animate={{
            opacity: usageRefIsInView ? 1 : 0,
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Box>
            <Image src={img_homepage_4} py="5" loading="lazy" />
          </Box>
        </ChakraBox>
      </Flex>
    </GridItem>
  );
}
