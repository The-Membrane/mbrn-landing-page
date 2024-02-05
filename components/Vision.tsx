"use client"; // This is a client component

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Vision: React.FC = () => {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={16}>
      <Box display={{ base: "block", md: "flex" }}>
        <Image
          display={{ base: "none", md: "block" }}
          position={{ base: "absolute", md: "relative" }}
          alt="Montytree"
          src="/images/enhanced-monty-tree.jpg"
          mr={{ md: 8 }}
          mb={{ base: 4, md: 0 }}
          w={{ base: "95%", md: "50%" }}
        />

        <Box
          w={{ base: "full", md: "50%" }}
          pt={{ base: 8, md: 0 }}
          px={{ base: 4, md: 0 }} 
          zIndex={1}
          position="relative"  
          borderRadius={"2xl"} 
        >
          <div className="overline-25">THE VISION</div>
          <Heading
            className="mbrn-gradient"
            fontSize={{ base: "3xl", md: "5xl" }}
            mb={4}
          >
            Decentralized Stability for Interchain Finance.
          </Heading>
          <Text mb={4} lineHeight="tall" fontSize={{ base: "md", md: "xl" }}>
            The problem with flat money is its extreme centralization, which
            creates a grotesque power imbalance in society. A decentralized
            economy needs decentralized money.
          </Text>
          <Text mb={4} lineHeight="tall" fontSize={{ base: "md", md: "xl" }}>
            With blockchains, smart contracts, and protocols, we can pick up the
            lost thread of decentralized collateral-backed money that
            nation-states strayed away from due to redeemability & scale
            frictions.
          </Text>
          <Text mb={4} lineHeight="tall" fontSize={{ base: "md", md: "xl" }}>
            Membrane was forged in the depths of the Cosmos ecosystem, the first
            decentralized stablecoin crafted specifically to serve the emergent
            nature of DeFi in the wider Interchain community.
          </Text>
          <Text mb={4} lineHeight="tall" fontSize={{ base: "md", md: "xl" }}>
            The protocol is an umbrella for a community of contributors, DeFi
            users, and digital asset owners who share the goal of achieving
            decentralized money that scales without losing its decentralization
            or stability.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Vision;
