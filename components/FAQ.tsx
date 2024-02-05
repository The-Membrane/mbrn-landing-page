"use client"; // This is a client component

import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaqItem } from "./FAQData";

interface FaqComponentProps {
  data: Record<string, FaqItem[]>;
}

const FAQComponent: React.FC<FaqComponentProps> = ({ data }) => {
  return (
    <Box id="faqs" className="heading-overline" mt={12}>
      <Flex flexDir="column" alignItems="center">
        <div className="overline">FAQS</div>
        <Heading
          className="mbrn-gradient"
          fontSize={{ base: "3xl", md: "5xl" }}
        >
          Questions? Look here.
        </Heading>
      </Flex>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Tabs zIndex={1} align="center">
          <TabList borderBottom="none">
            {Object.keys(data).map((tab) => (
              <Tab
                borderBottom="1px solid"
                borderBottomColor="gray.400"
                key={tab}
                fontSize={{ base: "sm", md: "2xl" }}
                _selected={{
                  borderBottomColor: "#00f1ef",
                  borderBottomWidth: "3px",
                  transform: "translateY(1px)",
                }}
                _focus={{ backgroundColor: "transparent" }}
              >
                <div className="mbrn-gradient">{tab}</div>
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {Object.keys(data).map((tab, index) => (
              <TabPanel key={tab} width="100vw" maxW="7xl" textAlign="left" px={4}>
                {data[tab].map((item, i) => (
                  <Box key={i} mb={4}>
                    <Text fontWeight="bold" fontSize="xl" mb={2} mt={8}>
                      {item.question}
                    </Text>
                    <Text mb={2} lineHeight="tall">
                      {item.answer}
                    </Text>
                    <div className="point " />
                  </Box>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default FAQComponent;
