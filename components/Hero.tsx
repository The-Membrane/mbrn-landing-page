"use client"; // This is a client component

import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex w="full" justifyContent="center">
      <Box ml={{ base: "1rem", md: "-40rem" }} zIndex="2">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "5xl" }}
          className="mbrn-gradient"
        >
          Decentralized Stability
          <br></br>
          for Interchain Finance.
        </Heading>
        <HStack mt={4} gap={2} align="start">
          <div className="ellipse-wrapper" style={{ marginTop: "8px" }}>
            <div className="ellipse-11" />
          </div>
          <Text
            mt={4}
            fontSize={{ base: "md", md: "2xl" }}
            ml={8}
            fontWeight="medium"
            w={{ base: "18rem", md: "34rem" }}
          >
            Membrane Protocol enables the creation of $CDT, a floating-peg
            stablecoin formed by asset bundles.
          </Text>
        </HStack>
        <HStack mt={4} gap={2}>
          <div className="ellipse-wrapper">
            <div className="ellipse-11" />
          </div>
          <Text fontSize={{ base: "md", md: "2xl" }} fontWeight="medium">
            Dynamically homeostatic. Resilient. Decentralized.
          </Text>
        </HStack>
        <HStack mt={4} gap={2}>
          <div className="ellipse-wrapper">
            <div className="ellipse-11" />
          </div>
          <Text fontSize={{ base: "md", md: "2xl" }} fontWeight="medium">
            Symbiotic with connected digital economies.
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Hero;
