// "use client"; // This is a client component (If needed)

import React, { useState } from "react";
import {
  Flex,
  Text,
  HStack,
  IconButton,
  Image,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const close = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Flex
      px={4}
      py={2}
      bg="rgba(0, 0, 0, 0.15)"
      color="white"
      width="100vw"
      zIndex={1}
      justifyContent="center"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        width="100vw"
        maxW="7xl"
      >
        {/* Site Name and Logo */}
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Flex align="center" gap="0.375rem">
              <Image src="./images/logo-block.svg" alt="Logo" />
            </Flex>
          </Box>
        </HStack>

        {/* Desktop Tabs */}
        <HStack as={"nav"} spacing={10} display={{ base: "none", md: "flex" }}>
          <Text fontWeight="semibold" _hover={{ color: "#798eff" }}>
            <a href="#home">Home</a>
          </Text>
          <Text fontWeight="semibold" _hover={{ color: "#798eff" }}>
            <a href="#protocol">Protocol Overview</a>
          </Text>
          <Text fontWeight="semibold" _hover={{ color: "#798eff" }}>
            <a href="#governance">Governance</a>
          </Text>
          <Text fontWeight="semibold" _hover={{ color: "#798eff" }} mr={2}>
            <a href="#vision">The Vision</a>
          </Text>
          <Text fontWeight="semibold" _hover={{ color: "#798eff" }} mr={2}>
            <a href="#faqs">FAQs</a>
          </Text>
          <ChakraLink
            href="https://membrane-ui-mainnet.vercel.app/"
            target="_blank"
          >
            <Button borderRadius="full" bg="#798eff">
              Launch App
            </Button>
          </ChakraLink>
        </HStack>

        {/* Mobile Menu */}
        <HStack display={{ base: "flex", md: "none" }} spacing="0.5rem">
          {!isMobileMenuOpen && (
            <IconButton
              icon={<HamburgerIcon />}
              aria-label={"Open Menu"}
              bg="transparent"
              color="white"
              onClick={handleMobileMenuToggle}
            />
          )}
        </HStack>
      </Flex>

      {/* Mobile Menu Modal */}
      <Modal isOpen={isMobileMenuOpen} onClose={close}>
        <ModalOverlay bg="rgba(0, 0, 0, 0.7)" />
        <ModalContent bg="transparent" color="white" mt={4}>
          <ModalCloseButton mr={2} />
          <ModalBody mt={8}>
            <VStack spacing={8} mt={12}>
              <ChakraLink fontWeight="medium" href="#home" onClick={close}>
                Home
              </ChakraLink>
              <ChakraLink fontWeight="medium" href="#protocol" onClick={close}>
                Protocol Overview
              </ChakraLink>
              <ChakraLink
                fontWeight="medium"
                href="#governance"
                onClick={close}
              >
                Governance
              </ChakraLink>
              <ChakraLink fontWeight="medium" href="#vision" onClick={close}>
                The Vision
              </ChakraLink>
              <ChakraLink fontWeight="medium" href="#faqs" onClick={close}>
                FAQs
              </ChakraLink>
              <ChakraLink
                href="https://membrane-ui-mainnet.vercel.app/"
                target="_blank"
              >
                <Button borderRadius="full" bg="#798eff">
                  Launch App
                </Button>
              </ChakraLink>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
