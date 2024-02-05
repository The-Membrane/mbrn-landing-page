"use client"; // This is a client component

import React from "react";
import NavBar from "../components/NavBar";
import FAQComponent from "../components/FAQ";
import { faqData } from "../components/FAQData";
import Vision from "../components/Vision";
import Hero from "../components/Hero";
import { Box, Flex } from "@chakra-ui/react";
import ProtocolOverview from "../components/ProtocolOverview";
import CDT from "../components/CDT";
import Footer from "../components/Footer";
import Ellipse from "../components/Ellipse";

export default function Home() {
  return (
    <div className="option">
      <NavBar />
      <Box h={{ base: "128px", md: "250px" }} />
      <Hero />
      <Box h={{ base: "100px", md: "260px" }} />
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        zIndex="0"
        overflow="hidden"
        maxW="100vw"
      >
        <div className="overlap-9" style={{ top: "-380px", left: "167px" }}>
          <div className="overlap-9">
            <div className="overlap-group-5">
              <div className="ellipse-12" />
              <img
                className="ellipse-13"
                alt="Ellipse"
                src="/images/ellipse-18.svg"
              />
              <img
                className="ellipse-14"
                alt="Ellipse"
                src="/images/ellipse-19.svg"
              />
            </div>
            <div className="main-sphere">
              <div className="overlap-10">
                <div className="ellipse-15" />
                <img
                  className="frame-11"
                  alt="Frame"
                  src="/images/Main Sphere (1).png"
                />
              </div>
            </div>

            <Ellipse w={41} h={40} top={497} left={416} />
            <Ellipse w={40} h={40} top={1287} left={1544} />
            <Ellipse w={21} h={20} top={893} left={1503} />
            <Ellipse w={47} h={47} top={1105} left={1475} sh={true} rot={134} />
            <Ellipse w={67} h={67} top={1002} left={692} sh={true} />
            <Ellipse w={41} h={40} top={441} left={823} sh={true} rot={-90} />
            <Ellipse w={32} h={32} top={1260} left={950} />
            <Ellipse w={60} h={60} top={691} left={1383} sh={true} rot={70} />
            <Box display={{ base: "none", md: "block" }}>
              <Ellipse w={33} h={33} top={614} left={807} />
            </Box>
            <Ellipse w={58} h={58} top={1069} left={1201} />
            <Ellipse w={21} h={21} top={441} left={1252} />
          </div>
        </div>
      </Flex>
      <ProtocolOverview />
      <Box h={{ base: "128px", md: "250px" }} />
      <CDT />
      <Vision />
      <FAQComponent data={faqData} />
      <Footer />
      <Box h={{ base: "36px", md: "60px" }} />
    </div>
  );
}
