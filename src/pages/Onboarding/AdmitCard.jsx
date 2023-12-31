import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import masai from "../../assets/allsvgimages/Group.svg";

const AdmitCard = () => {
  const [user, setUser] = useState("");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let token = JSON.parse(localStorage.getItem("user"));

    console.log(token);
    try {
      let res = await axios.get(
        "https://dash-board.up.railway.app/user-details",
        { headers: { Authorization: token } }
      );
      console.log(res);
      setUser(res.data.userName);
    } catch (e) {
      console.log(e);
    }
  };

  const handleWelcome=()=>{
    window.location.href = "https://onward-demo.vercel.app/home/welcome";
  }
  return (
    <Flex
      w="100%"
      h="100vh"
      flexShrink="0"
      opacity="0.9"
      background="#010A1B"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        position="relative"
        w="539px"
        h="440px"
        borderRadius="16px"
        background="#FFF"
        flexDirection="column"
        alignItems="center"
        pt="40px"
      >
        <Box
          position="absolute"
          top="10px"
          right="20px"
          _hover={{ cursor: "pointer" }}
          onClick={handleWelcome}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="#544D4F"
            />
          </svg>
        </Box>
        <Box
          w="436px"
          h="280px"
          flexShrink="0"
          borderRadius="18px"
          background="#FFF"
          boxShadow="0px 0px 28px 1px rgba(6, 38, 99, 0.32)"
          overflow="hidden"
          position="relative"
        >
          <Flex
            w="435px"
            h="61px"
            flexShrink="0"
            borderRadius="8px 8px 0px 0px"
            background="#0A0103"
            flexDirection="column"
            alignItems="center"
            pt="5px"
          >
            <Text
              color="#FFF"
              fontFamily="Poppins"
              fontSize="18px"
              fontstyle="normal"
              fontWeight="700"
              lineHeight="24px"
            >
              Provisional Admit Card
            </Text>
            <Flex alignItems="center" gap="10px">
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="#FFDB66"
                >
                  <path
                    d="M6.3418 0L7.68888 4.1459H12.0481L8.52142 6.7082L9.86851 10.8541L6.3418 8.2918L2.81509 10.8541L4.16217 6.7082L0.635458 4.1459H4.99471L6.3418 0Z"
                    fill="#FFDB66"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="#FFDB66"
                >
                  <path
                    d="M6.3418 0L7.68888 4.1459H12.0481L8.52142 6.7082L9.86851 10.8541L6.3418 8.2918L2.81509 10.8541L4.16217 6.7082L0.635458 4.1459H4.99471L6.3418 0Z"
                    fill="#FFDB66"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="#FFDB66"
                >
                  <path
                    d="M6.3418 0L7.68888 4.1459H12.0481L8.52142 6.7082L9.86851 10.8541L6.3418 8.2918L2.81509 10.8541L4.16217 6.7082L0.635458 4.1459H4.99471L6.3418 0Z"
                    fill="#FFDB66"
                  />
                </svg>
              </Flex>
              <Text
                color="#CFEEDF"
                fontFamily="Open Sans"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
              >
                Upcoming rock star developer
              </Text>
              <Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="#FFDB66"
                >
                  <path
                    d="M6.3418 0L7.68888 4.1459H12.0481L8.52142 6.7082L9.86851 10.8541L6.3418 8.2918L2.81509 10.8541L4.16217 6.7082L0.635458 4.1459H4.99471L6.3418 0Z"
                    fill="#FFDB66"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="#FFDB66"
                >
                  <path
                    d="M6.3418 0L7.68888 4.1459H12.0481L8.52142 6.7082L9.86851 10.8541L6.3418 8.2918L2.81509 10.8541L4.16217 6.7082L0.635458 4.1459H4.99471L6.3418 0Z"
                    fill="#FFDB66"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="#FFDB66"
                >
                  <path
                    d="M6.3418 0L7.68888 4.1459H12.0481L8.52142 6.7082L9.86851 10.8541L6.3418 8.2918L2.81509 10.8541L4.16217 6.7082L0.635458 4.1459H4.99471L6.3418 0Z"
                    fill="#FFDB66"
                  />
                </svg>
              </Flex>
            </Flex>
          </Flex>
          <Flex gap="20px" w="80%" m="auto" mt="20px">
            <Box w="72px" h="72px" flexShrink="0" position="relative">
              <Image src={masai} position="absolute" top="25px" left="9px"/>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="73"
                height="72"
                viewBox="0 0 73 72"
              >
                fill="none"
                <circle
                  cx="36.3418"
                  cy="36"
                  r="35.5"
                  fill="url(#paint0_linear_3_23070)"
                  stroke="url(#paint1_linear_3_23070)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_3_23070"
                    x1="19.8847"
                    y1="1.02857"
                    x2="49.7132"
                    y2="69.9429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_3_23070"
                    x1="65.6561"
                    y1="72"
                    x2="4.97037"
                    y2="-3.08571"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF99AE" />
                    <stop offset="1" stop-color="#99C8FF" stop-opacity="0.71" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <Flex flexDirection="column">
              <Flex>
                <Text
                  w="45px"
                  color="#6C6768"
                  fontFamily="Poppins"
                  fontSize="10px"
                  fontStyle="normal"
                  fontWeight="300"
                  lineHeight="normal"
                >
                  Name
                </Text>
                <Text
                  color="#21191B"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="20px"
                >
                  {user}
                </Text>
              </Flex>
              <Flex>
                <Text
                  w="45px"
                  color="#6C6768"
                  fontFamily="Poppins"
                  fontSize="10px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                >
                  Course
                </Text>
                <Text
                  color="#21191B"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="20px"
                >
                  Full Stack Web Development
                </Text>
              </Flex>
              <Flex>
                <Text
                  w="45px"
                  color="#6C6768"
                  fontFamily="Poppins"
                  fontSize="10px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                >
                  Date
                </Text>
                <Text
                  color="#21191B"
                  fontFamily="Open Sans"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="20px"
                >
                  {currentDay} {currentMonth} {currentYear}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex ml="" m="auto" mt="10px">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              w="160px"
            >
              <Text
                color="#3470E4"
                textAlign="center"
                fontFamily="Poppins"
                fontSize="18px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="20px"
              >
                96%*
              </Text>
              <Text
                color="#3B3435"
                textAlign="center"
                fontFamily="Poppins"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="12px"
              >
                Placement Rate After course completion
              </Text>
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              gap="8px"
              w="190px"
            >
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="27"
                  viewBox="0 0 20 27"
                  fill="none"
                >
                  <path
                    d="M3.65035 22.9894C3.92419 22.8051 4.29829 22.932 4.40344 23.2449L5.13847 25.432C5.28268 25.861 5.87735 25.8929 6.06662 25.4817L8.99615 19.1168C9.0873 18.9188 9.03963 18.6845 8.87833 18.5379L8.78831 18.456C8.68989 18.3576 8.59147 18.3249 8.4601 18.3249C8.43044 18.3249 8.4075 18.3315 8.38521 18.3388C8.32764 18.3578 8.26696 18.3686 8.21031 18.3901L6.83434 18.912C6.58656 19.006 6.30848 18.8903 6.20045 18.6483L5.57262 17.242C5.50693 17.0779 5.34282 16.9468 5.14599 16.9468L4.72713 16.9286C4.52409 16.9198 4.33593 17.0348 4.2511 17.2194L1.42634 23.3688C1.21548 23.8279 1.74074 24.2744 2.15984 23.9924L3.65035 22.9894Z"
                    fill="#9EA0DD"
                  />
                  <path
                    d="M15.318 16.9469C15.1211 16.9469 14.957 17.0453 14.8914 17.2422L14.2647 18.6459C14.1562 18.8889 13.8763 19.0044 13.628 18.9086L12.2996 18.3958C12.2345 18.3707 12.1719 18.3305 12.1022 18.3262C12.0813 18.325 12.059 18.325 12.0368 18.325C11.9057 18.325 11.807 18.3577 11.7086 18.4561L11.6186 18.538C11.4573 18.6847 11.4096 18.9189 11.5008 19.117L14.4303 25.4818C14.6196 25.893 15.2142 25.8612 15.3584 25.4321L16.0925 23.2478C16.198 22.9341 16.5736 22.8075 16.8474 22.9935L18.3057 23.984C18.7237 24.268 19.2511 23.8232 19.0417 23.3632L16.2448 17.2205C16.1605 17.0352 15.9723 16.9196 15.7689 16.9281L15.318 16.9469Z"
                    fill="#9EA0DD"
                  />
                  <path
                    d="M10.2315 16.2231C13.7752 16.2231 16.6626 13.3357 16.6626 9.79204C16.6626 6.24843 13.7751 3.32812 10.2315 3.32812C6.68788 3.32812 3.76758 6.21562 3.76758 9.75923C3.76758 13.3029 6.68783 16.2231 10.2315 16.2231ZM7.36047 9.61152C7.64135 9.33066 8.09673 9.33068 8.3776 9.61155L8.70407 9.93802C9.09461 10.3286 9.72779 10.3285 10.1183 9.938L12.6759 7.38026C12.9567 7.09938 13.4121 7.09937 13.693 7.38025C13.9739 7.66111 13.9739 8.11647 13.693 8.39734L10.1182 11.9723C9.72773 12.3628 9.09455 12.3628 8.70402 11.9723L7.36044 10.6287C7.07954 10.3478 7.07956 9.8924 7.36047 9.61152Z"
                    fill="#9EA0DD"
                  />
                  <path
                    d="M1.86449 8.70886C1.27948 9.31227 1.27976 10.2713 1.86511 10.8744L1.89724 10.9075C2.15976 11.17 2.22545 11.5636 2.09408 11.9246C1.78257 12.7309 2.16368 13.6393 2.95725 13.982L2.98008 13.9918C3.30829 14.123 3.53785 14.4839 3.57058 14.8449C3.58887 15.7251 4.29803 16.4342 5.17821 16.4525C5.53915 16.4525 5.90007 16.6823 6.03126 17.0103C6.37831 17.8139 7.30215 18.1951 8.11494 17.8701L8.13121 17.8636C8.45942 17.7324 8.88582 17.7979 9.14832 18.0604L9.16566 18.0767C9.79835 18.6732 10.7884 18.666 11.4124 18.0604C11.6749 17.7979 12.0686 17.7322 12.4295 17.8636C13.2314 18.1915 14.1533 17.8056 14.4968 17.0103C14.6609 16.6821 14.9888 16.4525 15.3498 16.4525C16.23 16.4342 16.9391 15.7251 16.9574 14.8449C16.9574 14.4839 17.1872 14.123 17.5152 13.9918L17.538 13.982C18.3316 13.6393 18.7127 12.7309 18.4012 11.9246C18.2701 11.5636 18.3355 11.17 18.598 10.9075C19.2012 10.2861 19.2012 9.29778 18.598 8.67637C18.3355 8.41385 18.2698 8.0202 18.4012 7.65927C18.7122 6.83594 18.3232 5.90824 17.5152 5.55932C17.187 5.42817 16.9574 5.06723 16.9574 4.70627C16.9391 3.82609 16.23 3.11693 15.3498 3.09863C14.9889 3.09863 14.6279 2.86884 14.4968 2.50814C14.1296 1.71825 13.2032 1.35764 12.397 1.68738C12.0361 1.81852 11.6424 1.75306 11.3799 1.49054L11.3637 1.47476C10.7304 0.859705 9.7252 0.852223 9.08287 1.45779C8.82035 1.72031 8.42669 1.786 8.06576 1.65462C7.25944 1.34312 6.35106 1.72423 6.00837 2.51779L5.99851 2.54063C5.8344 2.86884 5.50642 3.0984 5.14546 3.13112C4.26527 3.14942 3.55612 3.85857 3.53782 4.73876C3.53782 5.0997 3.30803 5.42792 2.94733 5.59181C2.13933 5.94073 1.75029 6.86843 2.06132 7.69176C2.19247 8.01997 2.12701 8.41362 1.86449 8.70886ZM10.2314 2.86863C14.0377 2.86863 17.1547 5.98569 17.1547 9.79192C17.1547 13.5981 14.0377 16.7152 10.2314 16.7152C6.39245 16.7152 3.30815 13.5981 3.30815 9.79192C3.30815 5.98593 6.42521 2.86863 10.2314 2.86863Z"
                    fill="#9EA0DD"
                  />
                </svg>
              </Box>
              <Box
                color="#544D4F"
                fontFamily="Poppins"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="24px"
              >
                I am in the Top{" "}
                <Text
                  as="span"
                  color="#049402"
                  fontFamily="Poppins"
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="24px"
                >
                  {" "}
                  10%
                </Text>
                of applicants{" "}
              </Box>
            </Flex>
          </Flex>
          <Flex
            position="absolute"
            bottom="0px"
            w="435px"
            h="48px"
            p="16px"
            justifyContent="center"
            alignItems="center"
            flexShrink="0"
            borderRadius="0px 0px 8px 8px"
            background="#0A0103"
          >
            <Text
              color="#CFEEDF"
              textAlign="center"
              fontFamily="Open Sans"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="16px"
            >
              *As per Masai’s internal assessment report
            </Text>
          </Flex>
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          mt="20px"
        >
          <Text
            color="#0A0103"
            fontFamil="Open Sans"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
          >
            Share your success with your friends
          </Text>
          <Flex gap="24px">
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2531_1256)">
                  <path
                    d="M22.2283 0H1.77167C1.30179 0 0.851161 0.186657 0.518909 0.518909C0.186657 0.851161 0 1.30179 0 1.77167V22.2283C0 22.6982 0.186657 23.1488 0.518909 23.4811C0.851161 23.8133 1.30179 24 1.77167 24H22.2283C22.6982 24 23.1488 23.8133 23.4811 23.4811C23.8133 23.1488 24 22.6982 24 22.2283V1.77167C24 1.30179 23.8133 0.851161 23.4811 0.518909C23.1488 0.186657 22.6982 0 22.2283 0ZM7.15333 20.445H3.545V8.98333H7.15333V20.445ZM5.34667 7.395C4.93736 7.3927 4.53792 7.2692 4.19873 7.04009C3.85955 6.81098 3.59584 6.48653 3.44088 6.10769C3.28591 5.72885 3.24665 5.31259 3.32803 4.91145C3.40941 4.51032 3.6078 4.14228 3.89816 3.85378C4.18851 3.56529 4.55782 3.36927 4.95947 3.29046C5.36112 3.21165 5.77711 3.25359 6.15495 3.41099C6.53279 3.56838 6.85554 3.83417 7.08247 4.17481C7.30939 4.51546 7.43032 4.91569 7.43 5.325C7.43386 5.59903 7.38251 5.87104 7.27901 6.1248C7.17551 6.37857 7.02198 6.6089 6.82757 6.80207C6.63316 6.99523 6.40185 7.14728 6.14742 7.24915C5.893 7.35102 5.62067 7.40062 5.34667 7.395ZM20.4533 20.455H16.8467V14.1933C16.8467 12.3467 16.0617 11.7767 15.0483 11.7767C13.9783 11.7767 12.9283 12.5833 12.9283 14.24V20.455H9.32V8.99167H12.79V10.58H12.8367C13.185 9.875 14.405 8.67 16.2667 8.67C18.28 8.67 20.455 9.865 20.455 13.365L20.4533 20.455Z"
                    fill="#0A66C2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2531_1256">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2531_1258)">
                  <path
                    d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                    fill="#1877F2"
                  />
                  <path
                    d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2531_1258">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M7.54752 21.7512C16.6042 21.7512 21.5578 14.2479 21.5578 7.74101C21.5578 7.52789 21.5578 7.31573 21.5434 7.10453C22.507 6.40748 23.3389 5.54441 24 4.55573C23.1014 4.95413 22.148 5.21528 21.1718 5.33045C22.1998 4.71514 22.9692 3.74723 23.3366 2.60693C22.3701 3.18054 21.3126 3.58475 20.2099 3.80213C19.4675 3.01271 18.4856 2.48997 17.4162 2.31481C16.3468 2.13966 15.2494 2.32184 14.294 2.83318C13.3385 3.34452 12.5782 4.1565 12.1307 5.14348C11.6833 6.13045 11.5735 7.23739 11.8186 8.29301C9.8609 8.19481 7.94576 7.68604 6.19745 6.79973C4.44915 5.91343 2.90676 4.66939 1.6704 3.14837C1.04073 4.23236 0.847872 5.5156 1.1311 6.73679C1.41433 7.95798 2.15234 9.02532 3.19488 9.72149C2.41123 9.69853 1.64465 9.48712 0.96 9.10517V9.16757C0.960311 10.3044 1.35385 11.4062 2.07387 12.2859C2.79389 13.1657 3.79606 13.7693 4.9104 13.9944C4.18548 14.1922 3.42487 14.2211 2.68704 14.0789C3.00181 15.0573 3.61443 15.9128 4.43924 16.5259C5.26405 17.139 6.25983 17.479 7.28736 17.4985C6.26644 18.3009 5.09731 18.8942 3.84687 19.2444C2.59643 19.5947 1.28921 19.6949 0 19.5394C2.25183 20.9844 4.87192 21.7509 7.54752 21.7474"
                  fill="#1DA1F2"
                />
              </svg>
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.5903 13.4103C11.0003 13.8003 11.0003 14.4403 10.5903 14.8303C10.2003 15.2203 9.56031 15.2203 9.17031 14.8303C7.22031 12.8803 7.22031 9.71031 9.17031 7.76031L12.7103 4.22031C14.6603 2.27031 17.8303 2.27031 19.7803 4.22031C21.7303 6.17031 21.7303 9.34031 19.7803 11.2903L18.2903 12.7803C18.3003 11.9603 18.1703 11.1403 17.8903 10.3603L18.3603 9.88031C19.5403 8.71031 19.5403 6.81031 18.3603 5.64031C17.1903 4.46031 15.2903 4.46031 14.1203 5.64031L10.5903 9.17031C9.41031 10.3403 9.41031 12.2403 10.5903 13.4103ZM13.4103 9.17031C13.8003 8.78031 14.4403 8.78031 14.8303 9.17031C16.7803 11.1203 16.7803 14.2903 14.8303 16.2403L11.2903 19.7803C9.34031 21.7303 6.17031 21.7303 4.22031 19.7803C2.27031 17.8303 2.27031 14.6603 4.22031 12.7103L5.71031 11.2203C5.70031 12.0403 5.83031 12.8603 6.11031 13.6503L5.64031 14.1203C4.46031 15.2903 4.46031 17.1903 5.64031 18.3603C6.81031 19.5403 8.71031 19.5403 9.88031 18.3603L13.4103 14.8303C14.5903 13.6603 14.5903 11.7603 13.4103 10.5903C13.0003 10.2003 13.0003 9.56031 13.4103 9.17031Z"
                  fill="#3470E4"
                />
              </svg>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdmitCard;
