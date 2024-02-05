"use client"; // This is a client component

import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

const ProtocolOverview = () => {
  return (
    <Box>
      {/* <Box display={{ base: "none", md: "inherit" }}>
        <div className="features">
          <div className="ellipse-4" />
          <div className="ellipse-5" />
          <div className="ellipse-6" />
          <div className="ellipse-7" />
        </div>
      </Box> */}
      <Flex flexDir="column" alignItems="Center">
        <div className="heading-overline-2">
          <p className="overline-2">
            <span className="text-wrapper-4">Protocol Overview</span>
          </p>
          <div className="section-heading">Navigate the Future.</div>
          <p className="supporting-text">A Guide to Membrane's Core Features</p>
        </div>
      </Flex>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={8}
        alignItems={{ base: "center", md: "flex-start" }}
        mt={10}
      >
        <VStack gap={6} px={4} py={2}>
          <Box
            className="styled-box"
            maxW={{ base: "300", md: "400" }}
            p={{ base: "2", md: "4" }}
          >
            <VStack gap={6} px={4} py={2}>
              <div className="supporting-text-3">Asset Bundles</div>
              <Image
                src="/images/AssetBundle.svg"
                w={24}
                py={{ base: "0px", md: "10px" }}
              />
              <Text
                fontSize={{ base: "inherit", md: "xl" }}
                fontWeight={{ base: "inherit", md: "bold" }}
              >
                Combine many assets into a single position, using them as
                collateral to reduce risk, hedge against volatility, or increase
                leverage.
              </Text>
            </VStack>
          </Box>
          <Box
            className="styled-box"
            maxW={{ base: "300", md: "400" }}
            p={{ base: "2", md: "4" }}
          >
            <VStack gap={6} px={4} py={2}>
              <div className="supporting-text-3">Advanced Liquidations</div>
              <Image
                src="/images/Waterfall.svg"
                w={24}
                py={{ base: "0px", md: "10px" }}
              />
              <Text
                fontSize={{ base: "inherit", md: "xl" }}
                fontWeight={{ base: "inherit", md: "bold" }}
              >
                Three layers of liquidation exist, from single asset auctions,
                to omniasset pools, to an automated protocol swap on Osmosis.
              </Text>
            </VStack>
          </Box>
        </VStack>
        <VStack gap={6} px={4} py={2} mt={{ base: "0", md: "6rem" }}>
          <Box
            className="styled-box"
            maxW={{ base: "300", md: "400" }}
            p={{ base: "2", md: "4" }}
          >
            <VStack gap={6} px={4} py={2}>
              <div className="supporting-text-3">Composable Design</div>
              <Image
                src="/images/Composable.svg"
                w={24}
                py={{ base: "0px", md: "10px" }}
              />
              <Text
                fontSize={{ base: "inherit", md: "xl" }}
                fontWeight={{ base: "inherit", md: "bold" }}
              >
                Membrane Asset Bundles are designed to be used as a core
                building block for other DeFi vaults, such as Leveraged Yield
                Farming or Delta Neutral Strategies.
              </Text>
            </VStack>
          </Box>
          <Box
            className="styled-box"
            maxW={{ base: "300", md: "400" }}
            p={{ base: "2", md: "4" }}
          >
            <VStack gap={6} px={4} py={2}>
              <div className="supporting-text-3">Decentralized Community</div>
              <Image
                src="/images/Governance.svg"
                w={24}
                py={{ base: "0px", md: "10px" }}
              />
              <Text
                fontSize={{ base: "inherit", md: "xl" }}
                fontWeight={{ base: "inherit", md: "bold" }}
              >
                All community members can shape the Membrane Protocol by
                creating proposals, voting on new actions, or creating other
                contributions to the wider community.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProtocolOverview;
