import {
  Box,
  Flex,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ScoreCard from "./ScoreCard";
import ellipse from "../../assets/allsvgimages/ellipse.svg";
import { Link } from "react-router-dom";
import { CommonLayout } from "../../components/CommonLayout";
import axios from "axios";

const Result = () => {
  const [value, setValue] = React.useState("");
  const [sectionScores, setSectionScores] = useState([
    {
      sectionId: "650f14dde33d4e8ad514c27e",
      sectionScore: 0,
      sectionName: "VC - 1",
      isVideoSection: true,
      sectionMaxMarks: 10,
    },
    {
      sectionId: "650f14dde33d4e8ad514c282",
      sectionScore: 0,
      sectionName: "VC - 2",
      isVideoSection: true,
      sectionMaxMarks: 10,
    },
    {
      sectionId: "650f14dfe33d4e8ad514c296",
      sectionScore: 0,
      sectionName: "Cognitive Ability",
      isVideoSection: false,
      sectionMaxMarks: 36,
    },
    {
      sectionId: "650f14e0e33d4e8ad514c2bc",
      sectionScore: 0,
      sectionName: "Attention to Detail",
      isVideoSection: false,
      sectionMaxMarks: 15.5,
    },
    {
      sectionId: "650f14e1e33d4e8ad514c2e7",
      sectionScore: 0,
      sectionName: "Verbal Ability",
      isVideoSection: false,
      sectionMaxMarks: 30,
    },
  ]);
  const [percentageScore, setPercentageScore] = useState(0);
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    //call the score api, and set the response in SetSectionScore
    // axios.get("", )
    // https://dash-board.up.railway.app/score
  }, []);
  useEffect(() => {
    let maxMarks = 0,
      marksObtained = 0;
    sectionScores.forEach((section) => {
      maxMarks += section.sectionMaxMarks;
      marksObtained += section.sectionScore;
    });
    const percentageScore = (marksObtained / maxMarks) * 100;
    setPercentageScore(percentageScore);
    if (maxMarks !== 0 && percentageScore >= 30) {
      setIsPassed(true);
    }
  }, [sectionScores]);

  localStorage.setItem(
    "auth",
    JSON.stringify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE2OTUxNDIzNjN9.m4eJTxyZOsZCXJ8F0x58MTqQMyAJj8Sp6IqtHC-WV7Y"
    )
  );

  axios.patch("https://dash-board.up.railway.app/update-profile", {
    phone: "9963442007",
    ReferralCode: "TEST_CODE",
    profileImage: "https://example.com/test.jpg",
    dob: "1990-01-01",
    graduation: "2010-01-01",
    adharCard: false,
    work: false,
  });

  if (!value) {
    var bg2 = "#3470E4";
    var bg1 = "#F2F6FF";
    var c2 = "#F2F6FF";
    var c1 = "#3470E4";
  }

  if (value) {
    var bg1 = "#3470E4";
    var bg2 = "#F2F6FF";
    var c1 = "#F2F6FF";
    var c2 = "#3470E4";
  }
  console.log({ percentageScore });
  const correctSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 6.99984L9 18.9998L3.5 13.4998L4.91 12.0898L9 16.1698L19.59 5.58984L21 6.99984Z"
        fill="#6FCD9E"
      />
    </svg>
  );
  const crossSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
        fill="#ED0331"
      />
    </svg>
  );
  return (
    <Box maxW="1400px" h="100vh" bgColor="#F2F6FF" pt="50px">
      <Flex gap="32px" ml={["10px", "70px"]} wrap="wrap" mr={["10px", "0px"]}>
        {/* results main container */}

        <Box
          maxW="711px"
          h={["600px", "424px"]}
          borderRadius="16px"
          border="1px solid var(--neutral-grey-100, #E5E5E5)"
          bgColor="#fff"
          position="relative"
          overflow="hidden"
          ml={{ sm: "auto", lg: "0px" }}
          mr={{ sm: "auto", lg: "0px" }}
        >
          <Image src={ellipse} position="absolute" />

          {/* main Heading for msat result */}

          <Flex
            maxW="356px"
            direction="column"
            align="center"
            gap="8px"
            mt={["100px", "87px"]}
            ml={["50px", "178px"]}
            mr={["10px"]}
            fontStyle="normal"
            fontWeight="700"
            fontFamily="Poppins"
            textAlign="center"
          >
            <Heading
              w="215px"
              color="var(--secondary-blue-500, #3470E4)"
              fontSize="24px"
              lineHeight="32px"
              m="0px"
            >
              MSAT Result
            </Heading>
            <Heading
              m="0px"
              color="var(--neutral-grey-700, #544D4F)"
              fontSize="16px"
              lineHeight="20px"
            >
              {sectionScores.length > 0
                ? isPassed
                  ? "Congratulations! You have cleared the MSAT!"
                  : "Sorry, you failed to clear the MSAT"
                : "Please wait while we get your scores"}
            </Heading>
          </Flex>

          {/* results container */}

          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="24px"
            mt="40px"
            ml="32px"
            mr="20px"
          >
            <Flex alignItems="flex-start" gap={2} wrap="wrap">
              {sectionScores.map((section) => (
                <ScoreCard
                  name={section.sectionName}
                  result={
                    (section.sectionScore / section.sectionMaxMarks) * 100 >= 30
                      ? "Passed"
                      : "Failed"
                  }
                  marks={section.sectionScore}
                  maxMarks={section.sectionMaxMarks}
                />
              ))}
            </Flex>
          </Box>
        </Box>

        {/* course selection main container */}

        <Box
          w="531px"
          h={["550px", "424px"]}
          borderRadius="16px"
          border="1px solid var(--neutral-grey-100, #E5E5E5)"
          bgColor="#FFF"
          boxShadow="0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)"
          overflow="hidden"
        >
          {/* course selection container heading */}

          <Flex
            display="flex"
            p="24px 12px 20px 12px"
            direction="column"
            justify="flex-end"
            alignItems="center"
            gap="13px"
            bgColor="var(--extended-yellow-100, #FFF3CC)"
          >
            <Box>
              Based on your MSAT result you have cleared cut off for{" "}
              {percentageScore >= 50
                ? "1"
                : percentageScore >= 60
                ? "2"
                : percentageScore >= 70
                ? "3"
                : percentageScore >= 80
                ? "4"
                : "0"}{" "}
              courses.
            </Box>
            <Heading
              m="0px"
              color="var(--primary-red-900, #0A0103)"
              textAlign="center"
              // fontFamily: "Poppins",
              fontSize="16px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="20px"
            >
              Select course that you want to apply for or Retake MSAT.
            </Heading>
          </Flex>

          {/* courses container */}
          <Box
            h="251px"
            border="1px solid #E2E2E2"
            bgColor="#FFF"
            pt="13px"
            position="relative"
            overflow="hidden"
            fontFamily="Open Sans"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
          >
            {/* courses continer headings */}
            <Box
              display="inline-block"
              w="302px"
              h="18px"
              ml="54px"
              color="var(--neutral-grey-900, #21191B)"
            >
              Courses
            </Box>
            <Box
              display="inline-block"
              w="152px"
              textAlign="center"
              color="var(--neutral-grey-900, #21191B)"
              ml="19px"
            >
              Cut-off clear
            </Box>

            {/* horizontal line */}

            <hr style={{ backgroundColor: "#CCC" }} />

            {/* courses selection list */}

            <RadioGroup onChange={setValue} value={value}>
              <VStack
                flexDirection="column"
                alignItems="flex-start"
                gap="24px"
                w="327px"
                mt="20px"
                ml="24px"
              >
                <Radio disabled={percentageScore < 50}>
                  {" "}
                  <Box
                    color="var(--primary-red-900, #0A0103)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    UX/UI Design{" "}
                    <Text
                      as="span"
                      color="var(--secondary-blue-500, #3470E4)"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                    >
                      {" "}
                      (view details){" "}
                    </Text>
                  </Box>
                </Radio>
                <Radio value="2" disabled={percentageScore < 60}>
                  {" "}
                  <Box
                    color="var(--primary-red-900, #0A0103)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="24px"
                  >
                    Web Development{" "}
                    <Text
                      as="span"
                      color="var(--secondary-blue-500, #3470E4)"
                      fontFamily="Open Sans"
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="24px"
                    >
                      {" "}
                      (view details){" "}
                    </Text>
                  </Box>
                </Radio>
                <Radio value="3" disabled={percentageScore < 70}>
                  {" "}
                  <Box
                    color="var(--neutral-grey-300, #CCC)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24px"
                  >
                    Data Analyst{" "}
                  </Box>
                </Radio>
                <Radio value="4" disabled={percentageScore < 80}>
                  {" "}
                  <Box
                    color="var(--neutral-grey-300, #CCC)"
                    // fontFamily="Open Sans"
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="24px"
                  >
                    Android Development{" "}
                  </Box>
                </Radio>
              </VStack>
            </RadioGroup>

            {/* vertical line  */}

            <Box
              borderLeft="1px solid #D9D9D9"
              h="278px"
              position="absolute"
              left="375px"
              top="13px"
            ></Box>

            {/* icons */}

            <Box
              position="absolute"
              w="24px"
              h="24px"
              flexShrink="0"
              top="71px"
              left="436px"
            >
              {percentageScore >= 50 ? correctSvg : crossSvg}
            </Box>
            <Box position="absolute" w="24px" h="24px" top="119px" left="436px">
              {percentageScore >= 60 ? correctSvg : crossSvg}
            </Box>
            <Box position="absolute" w="24px" h="24px" top="163px" left="436px">
              {percentageScore >= 70 ? correctSvg : crossSvg}
            </Box>
            <Box position="absolute" w="24px" h="24px" top="211px" left="436px">
              {percentageScore >= 80 ? correctSvg : crossSvg}
            </Box>
          </Box>
          {/* buttons */}

          <Box
            display="inline-flex"
            alignItems="flex-start"
            gap="20px"
            mt="16px"
            ml="164px"
            fontFamily="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            letterSpacing="1.25px"
            textTransform="uppercase"
          >
            <button
              style={{
                backgroundColor: bg1,
                color: c1,
                padding: "8px 16px",
                borderRadius: "8px",
                textTransform: "uppercase",
              }}
            >
              <Link to="/home/onboardingform">confirm course</Link>
            </button>
            <button
              style={{
                // backgroundColor: "#3470E4",
                backgroundColor: bg2,
                color: c2,
                padding: "8px 16px",
                borderRadius: "8px",
                textTransform: "uppercase",
              }}
            >
              retake msat
            </button>
          </Box>
        </Box>
      </Flex>

      <Flex
        maxW="1400px"
        p="16px 24px 16px 900px"
        justify="flex-end"
        align="center"
        gap="24px"
        mt="120px"
        bgColor="#FFF"
        boxShadow="0px -1px 0px 0px #D9D9D9"
        flexShrink="0"
      >
        <Text m="0px">Don’t want to proceed further?</Text>
        <button
          style={{
            backgroundColor: "#F2F6FF",
            color: "#3470E4",
            fontFamily: "Open Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "1.25px",
            textTransform: "uppercase",
            padding: "8px 16px",
            borderRadius: "8px",
            textTransform: "uppercase",
          }}
        >
          Explore dashboard
        </button>
      </Flex>
    </Box>
  );
};

export default Result;
