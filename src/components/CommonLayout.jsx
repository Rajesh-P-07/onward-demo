import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { Box, Flex, Button } from "@chakra-ui/react";
import { SideBar } from "./Sidebar/Sidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import BottomNavbar from "./Navbar/BottmNavbar";
import PhoneRightSidebar from "./RightSidebar/PhoneRightSidebar";

export const CommonLayout = ({
  children,
  rightsidebar,
  bottomnav,
  handleReferPageStatus,
}) => {
  return (
    <Box>
      <Navbar />
      <Flex mt="70px" width={"100%"}>
        <Box
          display={{ base: "none", lg: "block" }}
          background="white"
          borderRight="1px solid #D9D9D9"
        >
          <SideBar />
        </Box>
        <Box flexGrow={"1"}>{children}</Box>

        <Box
          display={{
            base: "none",
            lg: rightsidebar == "no" ? "none" : "block",
          }}
          // width={"260px"}
          width={"260px"}
          position={"sticky"}
          // right="0"
          height={"89vh"}
          overflow={"scroll"}
          scrollbarWidth="none"
          sx={{
            //Hide scrollbar for Chrome, Safari, and Opera
            "&::-webkit-scrollbar": {
              display: "none",
            },
            //Hide scrollbar for IE and Edge
            msOverflowStyle: "none",
            //Hide scrollbar for Firefox
            scrollbarWidth: "none",
          }}
          top="70px"
          flexGrow="0"
        >
          <RightSidebar />
        </Box>
      </Flex>

      <Box display={{ base: bottomnav == "no" ? "none" : "block", md: "none" }}>
        <PhoneRightSidebar />
      </Box>

      <Box
        w="100%"
        display={{ base: bottomnav == "no" ? "none" : "block", md: "none" }}
        position={"fixed"}
        bottom={0}
      >
        <BottomNavbar />
      </Box>
    </Box>
  );
};
