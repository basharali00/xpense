import { Button, GridItem, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function About() {
  return (
    <GridItem colSpan={6} mt="10" justifyContent={"center"}>
      <Flex
        alignItems="center"
        justifyContent="center"
        direction={{ lg: "row", sm: "column" }}
      >
        <Link to="/">
          <Button
            alignSelf={"center"}
            fontSize={"sm"}
            fontWeight={400}
            variant="primary"
            size={"lg"}
          >
            Coming soon
          </Button>
        </Link>
      </Flex>
    </GridItem>
  );
}

export default About;
