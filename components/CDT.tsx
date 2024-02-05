import { Box, Flex, VStack, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CDT: React.FC = () => {
  return (
    <div>
      {/* <div className="overlap-8">
        <div className="ellipse-8">
          <div className="ellipse-9" />
          <div className="ellipse-10" />
        </div>
      </div> */}
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <div className="heading-overline-2">
          <img
            className="CDT-icon"
            alt="Cdt icon"
            src="/images/cdt-icon-1.svg"
          />
          <p className="overline-2">
            <span className="text-wrapper-4">DEFI RESERVE</span>
          </p>
          <Heading
            className="mbrn-gradient"
            fontSize="4xl"
            mb={4}
            maxW={{ base: "320px", md: "full" }}
            textAlign="center"
          >
            CDT: Collateralized Debt Token.
          </Heading>
          <Text
            className="sub-text"
            textAlign="center"
            maxW={{ base: "320px", md: "full" }}
            alignSelf="center"
          >
            Optimized for DeFi and DEX users within the Interchain.
          </Text>
        </div>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          gap={8}
          alignItems={{ base: "center", md: "flex-start" }}
          mt={10}
        >
          <Box
            className="styled-box"
            maxW={{ base: "300", md: "384" }}
            p={{ base: "2", md: "4" }}
            borderRadius="24px"
            h={{ base: "270", md: "427px" }}
          >
            <VStack gap={6} px={4} py={2}>
              <div className="supporting-text-3">ONE</div>
              <Text
                fontSize={{ base: "42px", md: "52px" }}
                fontWeight="bold"
                color="white"
                letterSpacing="-0.96px"
                lineHeight="normal"
              >
                Asset-backed stablecoin.
              </Text>
            </VStack>
          </Box>
          <VStack gap="10px" px={0}>
            <Box
              className="styled-box"
              maxW={{ base: "300", md: "400" }}
              p={{ base: "2", md: "4" }}
              borderRadius="24px"
              h="198px"
            >
              <VStack gap="10px" px={4} py={2}>
                <div className="supporting-text-3">TWO</div>
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="bold"
                  color="white"
                >
                  Flexible minting framework that uses ‘bundles' of collateral
                  assets.
                </Text>
              </VStack>
            </Box>
            <Box
              className="styled-box"
              borderRadius="24px"
              maxW={{ base: "300", md: "400" }}
              p={{ base: "2", md: "4" }}
              h="198px"
            >
              <VStack gap="10px" px={4} py={2}>
                <div className="supporting-text-3">FOUR</div>
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="bold"
                  color="white"
                >
                  The protocol's liquidation engine ensures stability &amp;
                  collateral preservation.
                </Text>
              </VStack>
            </Box>
          </VStack>
          <VStack gap={6}>
            <Box
              className="styled-box"
              maxW={{ base: "300", md: "400" }}
              p={{ base: "2", md: "4" }}
              borderRadius="24px"
              h="198px"
            >
              <VStack gap="10px" px={4} py={2}>
                <div className="supporting-text-3">THREE </div>
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="bold"
                  color="white"
                >
                  Antifragile, self-healing, and decentralized design.
                </Text>
              </VStack>
            </Box>
            <Box
              className="styled-box"
              maxW={{ base: "300", md: "400" }}
              p={{ base: "2", md: "4" }}
              borderRadius="24px"
              h="198px"
            >
              <VStack gap="10px" px={4} py={2}>
                <div className="supporting-text-3">FIVE</div>
                <Text
                  fontSize={{ base: "18px", md: "24px" }}
                  fontWeight="bold"
                  color="white"
                >
                  $MBRN for voting within the decentralized community.
                </Text>
              </VStack>
            </Box>
          </VStack>
        </Flex>
        <VStack justifyContent="center" alignItems="center" mt={10} gap={2}>
          <Flex gap={{base:"0", md:"2"}}  flexDir={{base:"column", md:"row"}} alignItems="center">
            <Text>DEX's where you can Trade $MBRN and $CDT:</Text>
            <a href="https://app/osmosis.zone">
              <Text color="#01c1f6">Osmosis</Text>
            </a>
          </Flex>
          <Flex gap={{base:"0", md:"2"}} flexDir={{base:"column", md:"row"}} alignItems="center">
            <Text>Open Source Github:</Text>
            <a
              href="https://github.com/MembraneFinance"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Text color="#01c1f6">https://github.com/MembraneFinance</Text>
            </a>{" "}
          </Flex>
          <Flex gap={{base:"0", md:"2"}}  flexDir={{base:"column", md:"row"}} alignItems="center">
            <Text>Community X Account</Text>
            <a
              href="https://twitter.com/insaneinthembrn"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Text color="#01c1f6">https://twitter.com/insaneinthembrn</Text>
            </a>{" "}
          </Flex>
        </VStack>
      </Flex>
    </div>
  );
};

export default CDT;
