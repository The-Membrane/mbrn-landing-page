import {
    Box,
    Link,
    Flex,
    VStack,
    Image,
    Text,
    Heading,
    Button,
    Divider,
    HStack,
  } from "@chakra-ui/react";
  import React from "react";
  
  const Footer: React.FC = () => {
    return (
      <div>
        <Box
          className="styled-box"
          maxW="100vw"
          minW="90vw"
          p={{ base: "4", md: "8" }}
          borderRadius="24px"
          mx={4}
        >
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            gap={{ base: "8", md: "20" }}
            justifyContent="space-between"
          >
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              gap={{ base: "4", md: "12" }}
            >
              <Link fontWeight="medium" href="#home">
                Home
              </Link>
              <Link fontWeight="medium" href="#protocol">
                Protocol Overview
              </Link>
              <Link fontWeight="medium" href="#governance">
                Governance
              </Link>
              <Link fontWeight="medium" href="#vision">
                The Vision
              </Link>
              <Link fontWeight="medium" href="#faqs">
                FAQs
              </Link>
            </Flex>
            <Flex flexDir="row" gap={6} px={2}>
              <img
                className="media-social-icon"
                alt="Discord-Icon"
                src="/images/discord-icon.svg"
                title="Discord"
                onClick={() => window.open("https://discord.gg/ksT6cdHpbV")}
              />
              <img
                className="media-social-icon"
                alt="Twitter-Icon"
                src="/images/x-icon.svg"
                title="Twitter"
                onClick={() => window.open("https://twitter.com/insaneinthembrn")}
              />
              <img
                className="media-social-icon"
                alt="Github-Icon"
                src="/images/github-icon.svg"
                title="Github"
                onClick={() => window.open("https://github.com/MembraneFinance")}
              />
              <img
                className="media-social-icon"
                alt="Gitbook-Icon"
                src="/images/gitbook-icon.svg"
                title="Gitbook"
                onClick={() =>
                  window.open(
                    "https://membrane-finance.gitbook.io/membrane-docs-1/"
                  )
                }
              />
              <img
                className="media-social-icon"
                alt="Litepaper-Icon"
                src="/images/litepaper-icon.svg"
                title="Litepaper"
                onClick={() =>
                  window.open(
                    "https://commonwealth.im/membrane/discussion/14701-membrane-the-next-step-in-evolution?tab=0"
                  )
                }
              />
            </Flex>
          </Flex>
          <Divider mt={4} mb={6} />
          <Flex
            justifyContent="space-between"
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "4", md: "" }}
          >
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <Flex align="center" gap="0.375rem">
                  <Image src="./images/logo-block.svg" alt="Logo" />
                </Flex>
              </Box>
            </HStack>
            <p className="text-wrapper-3">
              © 2024 Membrane. All rights reserved.
            </p>
          </Flex>
        </Box>
      </div>
    );
  };
  
  export default Footer;
  