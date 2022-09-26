import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Image,
  Fade,
  Slide,
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
    <GridItem colSpan={6} mt="10" justifyContent={"center"}>
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
              direction={{ lg: "row", sm: "column" }}
            >
              <Box
                w={{ lg: "40%", md: "80%" }}
                px="2"
                transition={"ease"}
                transitionDuration={"2"}
              >
                <Flex direction={"column"}>
                  <Text
                    fontSize="6xl"
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
                <Flex alignItems="center">
                  <Button size="md" width="200px" variant="light">
                    Try free demo
                  </Button>

                  <Text fontSize="sm" m="2" color="brand.light">
                    Lorem ipsum dolor sit amet.
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Image src={img_homepage_1} alt="Dan Abramov" />
              </Box>
            </Flex>
          </Fade>
        )}
      </VisibilitySensor>

      {/* Insights Section */}
      <Center backgroundColor="brand.primary" pt="20">
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
              direction={{ lg: "row", sm: "column" }}
              height="90vh"
              pb="3"
            >
              <Box w={{ lg: "40%", md: "80%" }} px="2">
                <Text color="brand.light" textTransform="uppercase" mb="-5">
                  Alwalys online
                </Text>
                <Text fontSize="6xl" color="brand.dark" my="3">
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
                <Image src={img_homepage_2} alt="Dan Abramov" />
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
              height="90vh"
              direction={{ lg: "row", sm: "column-reverse" }}
              py="10"
            >
              <Box px="2">
                <Image src={img_homepage_3} />
              </Box>
              <Box px="2" w={{ lg: "40%", md: "80%" }}>
                <Text color="brand.light" textTransform="uppercase" mb="-5">
                  free some cost
                </Text>
                <Text fontSize="6xl" color="brand.dark" pb="3">
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
              direction={{ lg: "row", sm: "column" }}
            >
              <Box w={{ lg: "40%", md: "80%" }} px="2">
                <Text color="brand.light" textTransform="uppercase" mb="-5">
                  Use anytime
                </Text>
                <Text fontSize="6xl" color="brand.dark" pb="3">
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
                <Image src={img_homepage_4} alt="Dan Abramov" />
              </Box>
            </Flex>
          </Fade>
        )}
      </VisibilitySensor>
    </GridItem>
  );
}
