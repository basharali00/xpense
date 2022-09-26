import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Image,
  Fade,
  Text,
} from "@chakra-ui/react";
import VisibilitySensor from "react-visibility-sensor";
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
export default function Home() {
  return (
    <GridItem colSpan={6} mt="10" justifyContent={"center"} pt="20">
      <VisibilitySensor
        offset={{ bottom: 100 }}
        partialVisibility={true}
        w={{ lg: "40%", md: "80%" }}
        px="2"
      >
        {({ isVisible }: HomeProps) => (
          <Fade in={isVisible}>
            {/* #1 Section */}
            <Flex
              alignItems="center"
              height="60vh"
              justifyContent="center"
              direction={{ lg: "row", base: "column" }}
            >
              <Box
                w={{ lg: "40%", md: "80%" }}
                px="2"
                transition={"ease"}
                transitionDuration={"2"}
              >
                <Flex direction={"column"} my="2">
                  <Text
                    fontSize={{ base: "3xl", lg: "6xl" }}
                    color="brand.dark"
                    my="3"
                    textTransform="uppercase"
                  >
                    Track your Expenses to Save Money
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
              <Box>
                <Image src={img_homepage_1} py="5"/>
              </Box>
            </Flex>
          </Fade>
        )}
      </VisibilitySensor>

      {/* Insights Section */}
      <Center backgroundColor="brand.primary" py="10" mt="20">
        <Image src={img_homepage_insight} />
      </Center>

      <Center py="20">
        <Image src={brands} />
      </Center>

      {/* #2 Section */}
      <VisibilitySensor
        offset={{ bottom: 100 }}
        partialVisibility={true}
        w={{ lg: "40%", md: "80%" }}
        px="2"
      >
        {({ isVisible }: HomeProps) => (
          <Fade in={isVisible}>
            <Flex
              alignItems="center"
              justifyContent="center"
              direction={{ lg: "row", base: "column" }}
              pb="3"
            >
              <Box w={{ lg: "40%", md: "80%" }} px="2">
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
                  accumsan nisi, tincidunt vel. Enim ipsum, amet quis
                  ullamcorper eget ut.
                </Text>

                <Flex alignItems="center">
                  <Button size="md" width="200px" variant="light">
                    Learn More icon
                  </Button>
                </Flex>
              </Box>

              <Box>
                <Image src={img_homepage_2} py="5"/>
              </Box>
            </Flex>
          </Fade>
        )}
      </VisibilitySensor>

      {/* #3 Section */}
      <VisibilitySensor
        offset={{ bottom: 100 }}
        partialVisibility={true}
        w={{ lg: "40%", md: "80%" }}
        px="2"
      >
        {({ isVisible }: HomeProps) => (
          <Fade in={isVisible}>
            <Flex
              alignItems="center"
              justifyContent="center"
              direction={{ lg: "row", base: "column-reverse" }}
              py="10"
            >
              <Box px="2">
                <Image src={img_homepage_3} py="5"/>
              </Box>
              <Box px="2" w={{ lg: "40%", md: "80%" }}>
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
                  accumsan nisi, tincidunt vel. Enim ipsum, amet quis
                  ullamcorper eget ut.
                </Text>

                <Flex alignItems="center">
                  <Button size="md" width="200px" variant="light">
                    Learn More icon
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Fade>
        )}
      </VisibilitySensor>

      {/* #4 Section */}
      <VisibilitySensor
        offset={{ bottom: 200 }}
        partialVisibility={true}
        w={{ lg: "40%", md: "80%" }}
        px="2"
      >
        {({ isVisible }: HomeProps) => (
          <Fade in={isVisible}>
            <Flex
              alignItems="center"
              justifyContent="center"
              height="90vh"
              direction={{ lg: "row", base: "column" }}
            >
              <Box w={{ lg: "40%", md: "80%" }} px="2">
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
                  accumsan nisi, tincidunt vel. Enim ipsum, amet quis
                  ullamcorper eget ut.
                </Text>

                <Flex alignItems="center">
                  <Button size="md" width="200px" variant="light">
                    Learn More icon
                  </Button>
                </Flex>
              </Box>

              <Box>
                <Image src={img_homepage_4} py="5"/>
              </Box>
            </Flex>
          </Fade>
        )}
      </VisibilitySensor>
    </GridItem>
  );
}
