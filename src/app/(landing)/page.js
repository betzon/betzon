"use client";
import React, { useEffect, useRef, useState } from "react";
import HomeHeaderSection from "./sections/header";
import LeagueDisplaySection from "./sections/league-display";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Container, Tab, Tabs } from "@mui/material";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import ValuePropositionSection from "./sections/value-proposition";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import landingImage from "../assets/landing-image.png";
import basketball1 from "../assets/basketball-1.png";
import motorcyclist1 from "../assets/motorcyclist-1.png";
import logo from "../assets/betzon_logo.png";
import arena from "../assets/arena.png";
import coins from "../assets/coins.png";
import sittingglasses from "../assets/sitting-glasses.png";
import smilinglookingdown from "../assets/smiling-looking-down.png";
import baseball1 from "../assets/baseball-1.png";
import car1 from "../assets/car-1.png";
import betzonphone2 from "../assets/betzon-phone-1.png";
import trophy from "../assets/trophy.png";
import motorcyclist2 from "../assets/motorcyclist-2.png";
import people1 from "../assets/people-1.png";

import Image from "next/image";
import ImageBackground from "../components/new-landing-page/ImageBackground";
import OutlinedTitledBox from "../components/new-landing-page/OutlinedTitledBox";
import zIndex from "@mui/material/styles/zIndex";
import { display, positions, width } from "@mui/system";
import Pricing from "../components/new-landing-page/Pricing";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const SmoothScroll = dynamic(() => import("smooth-scroll"), { ssr: false });

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    scrollButtons="auto"
    variant="scrollable"
    allowScrollButtonsMobile
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))(({ theme }) => ({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.dark.otherlight,
    "&.Mui-selected": {
      color: "#fff",
      fontWeight: 700,
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.dark.otherlight,
    },
  })
);

const LandingPage = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const router = useRouter();
  const [isScrollingFromHandleChange, setIsScrollingFromHandleChange] =
    useState(false);
  const [isSmoothScrollLoaded, setIsSmoothScrollLoaded] = useState(false);

  // Initialize SmoothScroll

  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("smooth-scroll").then((SmoothScrollModule) => {
        scrollRef.current = new SmoothScrollModule.default();
        setIsSmoothScrollLoaded(true);
      });
    }
  }, []);

  const smoothScrollTo = (elementId) => {
    const targetElement = document.getElementById(elementId);
    if (targetElement && scrollRef.current && isSmoothScrollLoaded) {
      scrollRef.current.animateScroll(targetElement, null, {
        speed: 500,
        easing: "easeInOutCubic",
        offset: 125, // 50 pixels offset from the top
      });
    }
  };

  const handleChange = (event, newValue) => {
    setIsScrollingFromHandleChange(true); // Set flag to true
    setValue(newValue);
    smoothScrollTo(event.target.name);

    setTimeout(() => {
      setIsScrollingFromHandleChange(false);
    }, 2500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingFromHandleChange) return; // Skip if scrolling from handleChange

      const sections = [
        document.getElementById("top"),
        document.getElementById("our-sports"),
        // other sections
        document.getElementById("why-motobookie"),
        document.getElementById("waitlist"),
      ];

      const currentSection = sections.findIndex((section) => {
        if (section) {
          const sectionRect = section.getBoundingClientRect();
          if (typeof window !== "undefined") {
            // browser code
            // Check if any part of the section is within the viewport
            const isSectionInView =
              sectionRect.top < window.innerHeight && sectionRect.bottom >= 205;

            return isSectionInView;
          }
        }
        return false;
      });

      if (currentSection !== -1 && currentSection !== value) {
        setValue(currentSection);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [value, isScrollingFromHandleChange]);

  useEffect(() => {
    // Scroll to the top of the page on page load/refresh
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  const subscriptions = [
    {
      name: "Free",
      price_per_month: 0,
      features: [
        "No Private Wagering",
        "5 Free Wagers",
        "25 Fantasy Chips per Month",
        "Social Features",
      ],
    },
    {
      name: "Premium Subscription",
      price_per_month: 9.99,
      features: [
        "Unlimited Wagering",
        "Private Wagering",
        "200 Fantasy Chips per Month",
      ],
      best_value: true,
    },
    {
      name: "Standard Subscription",
      price_per_month: 4.99,
      features: [
        "Unlimited Wagering",
        "15 Wagers per Month",
        "100 Fantasy Chips per Month",
      ],
    },
  ];
  //<Divider sx={{ marginBottom: '120px', marginTop: '120px' }} />
  return (
    <>
      {/* Landing Container */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Background image */}
        <ImageBackground source={landingImage} />
        {/* Title */}
        <Stack
          justifyContent="center"
          alignItems="center"
          maxWidth="xl"
          spacing={2}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -1.5
            }}
          >
            UNLIMITED FAN-TO-FAN WAGERING FOR $9.99 PER MONTH
          </Typography>
          <Button variant="contained">CREATE AN ACCOUNT</Button>
        </Stack>
      </Container>
      {/* See pricing container */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: isLargeScreen ? "590px" : "460px",
        }}
      >
        {/* Background images */}
        <Box
          disableGutters
          sx={{
            display: "flex",
            width: "100%",
            height: isLargeScreen ? "590px" : "460px",
            justifyContent: isLargeScreen ? "space-between" : "flex-end",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <Image
            src={motorcyclist1}
            style={{
              objectFit: "cover",
              width: "auto",
              height: "100%",
              transform: "translateX(-40%)",
              marginRight: "-100%",
              display: isLargeScreen ? "block" : "none",
            }}
          />
          <Image
            src={basketball1}
            style={{
              objectFit: "contain",
              width: "auto",
              height: "148%",
              transform: "translateX(47%)",
              marginLeft: "-100%",
            }}
          />
        </Box>
        {/* See pricing text */}
        <Box
          disableGutters
          maxWidth="md"
          sx={{
            display: "flex",
            width: "100%",
            height: isLargeScreen ? "590px" : "460px",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "absolute",
            alignItems: isLargeScreen ? "center" : "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            gap: "15px",
            paddingLeft: isLargeScreen ? 0 : "15px",
            paddingRight: isLargeScreen ? 0 : "30%",
          }}
        >
          {isLargeScreen && (
            <Image src={logo} style={{ height: "69px", width: "auto" }} />
          )}

          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: -1.5,
              textAlign: isLargeScreen ? "center" : "left"
            }}
          >
            JOIN A COMMUNITY OF FANS ON BETZON
          </Typography>
          <Typography
            variant="h5"
            fontWeight={500}
            style={{ textAlign: isLargeScreen ? "center" : "left" }}
          >
            BetzOn is the ultimate place for wagers on NASCAR, FormulaOne,
            Motocross/Supercross, MotoGP, and MLB. Sign up and start winning!
          </Typography>
          <Button variant="contained" style={{ marginTop: 15 }}>
            SEE PRICING
          </Button>
        </Box>
      </Container>
      {/* Sign up form container */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          height: "100%",
        }}
      >
        {/* Background image */}
        <ImageBackground source={arena} />
        {isLargeScreen && (
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "100%",
              left: 0,
              backgroundColor: theme.palette.primary.main,
            }}
          />
        )}
        <Box
          disableGutters
          maxWidth="lg"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            gap: "80px",
            paddingLeft: "30px",
            paddingRight: "30px",
            position: "relative",
          }}
        >
          <Box
            sx={{
              flex: 1,
              gap: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h3"
              fontWeight={900}
              sx={{
                textAlign: "left",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: -1.5
              }}
            >
              JOIN BETZON NOW & GET 200 CHIPS INSTANTLY
            </Typography>
            <Typography
              variant="p"
              fontWeight={500}
              style={{ textAlign: "left" }}
            >
              For a limited time only, BetzOn is offering 200 wager credits to
              all new members. Sign up today, claim your credits, and place your
              bets on the biggest sporting events. Seize your chance to win big!
            </Typography>
            <TextField
              id="filled-basic"
              label="Enter Your Email"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Create a Username"
              variant="filled"
            />
            <TextField
              id="filled-basic"
              label="Create a Password"
              variant="filled"
            />
            <Box
              style={{
                display: "flex",
                gap: "12px",
                flexDirection: isLargeScreen ? "row" : "column",
              }}
            >
              <Button variant="contained" style={{}}>
                CLAIM CHIPS
              </Button>
              <Button variant="outlined" style={{ borderColor: "white" }}>
                LOG IN
              </Button>
            </Box>
          </Box>
          {isLargeScreen && (
            <Box sx={{ flex: 1 }}>
              <Image
                src={coins}
                alt="Coins"
                style={{
                  objectFit: "contain",
                  width: "auto",
                  height: "100%",
                  maxWidth: 500
                }}
              />
            </Box>
          )}
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          gap: isLargeScreen ? "40px" : "20px",
          padding: isLargeScreen ? "30px" : "20px",
          flexDirection: isLargeScreen ? "row" : "column",
        }}
      >
        <OutlinedTitledBox text="DIRECT BETTING, NO MIDDLEMAN.">
          <Image
            src={sittingglasses}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "auto",
              position: isLargeScreen ? "relative" : "static",
              left: isLargeScreen ? "-30px" : "auto",
              bottom: isLargeScreen ? "-20px" : "auto",
              marginTop: isLargeScreen ? "-120px" : "0",
            }}
          />
        </OutlinedTitledBox>
        <OutlinedTitledBox text="FULL WINNINGS, ZERO FEES.">
          <Image
            src={smilinglookingdown}
            style={{
              width: "100%",
              objectFit: "contain",
              height: "auto",
              position: isLargeScreen ? "relative" : "static",
              left: isLargeScreen ? "-40px" : "auto",
              bottom: isLargeScreen ? "-30px" : "auto",
              marginTop: isLargeScreen ? "-120px" : "0",
            }}
          />
        </OutlinedTitledBox>
      </Container>
      {/* Large screen BetzOn Phone overlay */}
      {isLargeScreen && (
        <Container
          maxWidth={false}
          style={{
            position: "absolute",
            zIndex: "1",
            paddingLeft: "0",
            paddingRight: "0",
            pointerEvents: "none",
          }}
        >
          <Box
            maxWidth="xl"
            style={{
              margin: "auto",
              width: "100%",
              height: "1300px",
              zIndex: "1",
              alignItems: "center",
              justifyContent: "flex-end",
              display: "flex",
              transform: "translateY(-15%)",
              overflow: "hidden"
            }}
          >
            {isLargeScreen && (
              <Box
                style={{
                  width: "400px",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  overflow: "hidden",
                  transform: "translateX(-15%)",
                  position: "absolute",
                }}
              >
                <Image
                  src={betzonphone2}
                  style={{
                    width: "200%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Box>
            )}
            <Image
              src={car1}
              style={{
                width: "600px",
                objectFit: "contain",
                height: "auto",
                position: "absolute",
                transform: "translateX(-30%) translateY(60%) scaleX(-1)",
                zIndex: "-1",
                left: "55%",
              }}
            />
            <Image
              src={baseball1}
              style={{
                width: isLargeScreen ? "400px" : "240px",
                objectFit: "contain",
                height: "auto",
                position: "absolute",
                transform: "translateX(10%) translateY(100%) scaleX(-1)",
                zIndex: "1",
              }}
            />
          </Box>
        </Container>
      )}
      {/* Sports list container + small screen images */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          //   width: "100%",
          display: "flex",

          height: "auto",
          justifyContent: "center",
          position: "relative",
          background: `linear-gradient(180deg, #000 0%, ${theme.palette.primary.main}  100%)`,
          paddingBottom: "150px",
          overflow: "hidden",
        }}
      >
        {!isLargeScreen && (
          <>
            <Image
              src={car1}
              style={{
                width: "200px",
                objectFit: "contain",
                height: "auto",
                position: "absolute",
                transform: "translateX(30%) scaleX(-1)",
                bottom: "350px",

                right: "0",
              }}
            />
            <Image
              src={baseball1}
              style={{
                width: "240px",
                objectFit: "contain",
                height: "auto",
                position: "absolute",
                transform: "translateX(-15%)",
                left: "0",
                bottom: "50px",
              }}
            />
          </>
        )}
        <Box
          disableGutters
          maxWidth="xl"
          style={{
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "auto",
            alignItems: isLargeScreen ? "flex-start" : "center",
            textAlign: "center",
            paddingLeft: "20px",
            paddingRight: isLargeScreen ? "600px" : "20px",
            gap: "10px",
            zIndex: 1,
            paddingTop: 125
          }}
        >
          <Typography
            variant="h2"
            style={{
              textAlign: isLargeScreen ? "left" : "center",
              lineHeight: 1,
              letterSpacing: -1.5,
              fontWeight: 900,
            }}
          >
            WHY SETTLE FOR WATCHING WHEN YOU CAN BE WINNING?
          </Typography>
          <Typography
            variant="p"
            fontWeight={500}
            style={{ textAlign: isLargeScreen ? "left" : "center" }}
          >
            Wager on sports you love, transforming every match, every race, and
            every game into an electrifying betting experience. Explore our
            sports selection
          </Typography>
          <Stack
            spacing={2}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            sx={{
              marginTop: 12
            }}>
            <Typography
              variant="h2"
              fontWeight={900}
              style={{
                textAlign: isLargeScreen ? "left" : "center",
                lineHeight: 1.25,
                letterSpacing: -1.5,
                fontWeight: 900,
              }}
            >
              MLB
              <br />
              NBA
              <br />
              MOTOCROSS
              <br />
              FORMULA1
              <br />
              MOTOGP
              <br />
              NASCAR
            </Typography>
            <Button
              variant="contained"
              style={{ backgroundColor: "white", color: "black" }}
            >
              PARTICIPATE TODAY!
            </Button>
          </Stack>
        </Box>
      </Container>
      {/* Large screen Motorcycle overlay */}
      {isLargeScreen && (
        <Container
          maxWidth={false}
          style={{
            position: "absolute",
            zIndex: "1",
            paddingLeft: "0",
            paddingRight: "0",
            pointerEvents: "none",
          }}
        >
          <Box
            maxWidth="xl"
            style={{
              margin: "auto",
              width: "100%",
              height: "1300px",
              zIndex: "1",
              alignItems: "center",
              justifyContent: "flex-end",
              display: "flex",
              transform: "translateY(-15%)",
              overflow: "hidden",
            }}
          >
            <Image
              src={motorcyclist2}
              style={{
                width: "400px",
                objectFit: "contain",
                height: "auto",
                position: "absolute",
                // transform: "translateY(20%)",
                zIndex: "-1",
                left: "-5px",
                bottom: "18%",
              }}
            />
          </Box>
        </Container>
      )}
      {/* View live challenges container */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          //   width: "100%",
          py: 24,
          display: "flex",
          height: "auto",
          justifyContent: "center",
          position: "relative",
          backgroundColor: theme.palette.primary.main,
          overflow: "hidden",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <Image
          src={trophy}
          style={{
            position: isLargeScreen ? "absolute":'relative',
            width: isLargeScreen ? "1000px" : "100%",
            height: "auto",
            objectFit: "contain",
            right: "-255px",
            bottom: "-400px",
          }}
        />
        <Box
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: isLargeScreen ? "flex-start" : "center",
            gap: 4
          }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            style={{
              textAlign: isLargeScreen ? "left" : "center",
              paddingRight: isLargeScreen && "40%",
              lineHeight: 1,
              letterSpacing: -1.5,
              fontWeight: 900,
            }}
          >
            JOIN THE BETZON CHALLENGE AND COMPETE FOR PRIZES IN OUR BI-MONTHLY
            CONTESTS
          </Typography>
          <Button
            variant="contained"
            style={{ backgroundColor: "white", color: "black" }}
          >
            VIEW LIVE CHALLENGES
          </Button>
        </Box>
      </Container>

      {/* Pricing container */}
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: "flex",
          height: "auto",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          py: 12
        }}
      >
        <Box
          maxWidth="xl"
          style={{
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            // alignItems: "flex-start",
            position: "relative",
          }}
        >
          <Box
            maxWidth="xl"
            style={{
              display: "flex",
              justifyContent: isLargeScreen ? "flex-end" : "space-between",
              width: "100%",
              position: "relative",
              padding: isLargeScreen ? "32px 0" : "16px 0",
            }}
          >
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                position: isLargeScreen ? "absolute" : "relative",
                left: isLargeScreen && "50%",
                transform:
                  isLargeScreen && "translateX(-50%) translateY(-16px)",

                textAlign: "center",
              }}
            >
              PRICING
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="p"
                fontWeight={900}
                style={{ textAlign: isLargeScreen ? "left" : "center" }}
              >
                MONTHLY
              </Typography>
              <Switch />
            </div>
          </Box>

          <Box
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: isLargeScreen ? "row" : "column",
              position: "relative",
            }}
          >
            {subscriptions.map((item) => (
              <Pricing pricing={item} />
            ))}
          </Box>
        </Box>
      </Container>
      <Container
        maxWidth={false}
        disableGutters
        style={{
          position: "relative",
        }}
      >
        <Image
          src={people1}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
          }}
        />
        {/* Ready to bet container */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            width: "100%",
            transform: "translateX(-50%) translateY(-50%)",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={900}
            style={{ textAlign: isLargeScreen ? "center" : "left" }}
          >
            READY TO BET?
          </Typography>
          <Typography
            variant="h5"
            fontWeight={500}
            style={{ textAlign: isLargeScreen ? "center" : "left" }}
          >
            JOIN BETZON TODAY.
          </Typography>
          <Button variant="contained" style={{ marginTop: 15 }}>
            SIGN UP NOW
          </Button>
        </Box>
      </Container>
      {/* Accordion container */}
      <Container
        maxWidth={false}
        disableGutters
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          maxWidth="lg"
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            paddingLeft: "30px",
            paddingRight: "30px"
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            style={{ textAlign: isLargeScreen ? "center" : "left" }}
          >
            FAQs
          </Typography>
          <Typography
            variant="p"
            fontWeight={500}
            style={{ textAlign: "center" }}
          >
            Find answers to frequently asked questions about how BetzOn works,
            betting rules, and account management.
          </Typography>

          <div
            style={{
              paddingTop: "80px",
              paddingLeft: isLargeScreen && "20px",
              paddingRight: isLargeScreen && "20px",
              width: "100%"
            }}
          >
            <Accordion
              sx={{
                backgroundColor: "transparent",
                borderTop: "1px solid white",
                borderTopLeftRadius: "0 !important",
                borderTopRightRadius: "0 !important",
              }}
            >
              <AccordionSummary
                sx={{
                  display: "flex",
                }}
                id="panel1-header"
                aria-controls="panel1-content"
              >
                <Typography variant="p" style={{ flexGrow: "1" }}>
                  How to bet responsibly?
                </Typography>
                <KeyboardArrowDownIcon />
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "transparent",
                borderTop: "1px solid white",
              }}
            >
              <AccordionSummary
                id="panel2-header"
                aria-controls="panel2-content"
              >
                <Typography variant="p" style={{ flexGrow: "1" }}>
                  How are winnings calculated?
                </Typography>
                <KeyboardArrowDownIcon />
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "transparent",
                borderTop: "1px solid white",
              }}
            >
              <AccordionSummary
                id="panel3-header"
                aria-controls="panel3-content"
              >
                <Typography variant="p" style={{ flexGrow: "1" }}>
                  How to withdraw winnings?
                </Typography>
                <KeyboardArrowDownIcon />
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "transparent",
                borderTop: "1px solid white",
              }}
            >
              <AccordionSummary
                id="panel4-header"
                aria-controls="panel4-content"
              >
                <Typography variant="p" style={{ flexGrow: "1" }}>
                  How to manage my account?
                </Typography>
                <KeyboardArrowDownIcon />
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "transparent",
                borderTop: "1px solid white",
                borderBottom: "1px solid white",
                borderBottomLeftRadius: "0 !important",
                borderBottomRightRadius: "0 !important",
              }}
            >
              <AccordionSummary
                id="panel4-header"
                aria-controls="panel4-content"
              >
                <Typography variant="p" style={{ flexGrow: "1" }}>
                  Is BetzOn legal?
                </Typography>
                <KeyboardArrowDownIcon />
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </AccordionDetails>
            </Accordion>
          </div>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "80px",
              gap: '20px'
            }}
          >
            <Typography
              variant="h4"
              fontWeight={900}
              style={{ textAlign: isLargeScreen ? "center" : "left" }}
            >
              Still have questions?
            </Typography>
            <Typography
              variant="p"
              fontWeight={500}
              style={{ textAlign: "center" }}
            >
              Contact our support team for further assistance.
            </Typography>
            <Button variant="outlined" style={{ borderColor: "white" }}>
              Contact
            </Button>
          </Box>
        </Box>
      </Container>
      {/* <ContactSection /> */}

      <div style={{ marginBottom: "120px" }} />
    </>
  );
};
//IT&apos;S ON!
export default LandingPage;

/*
 <HomeHeaderSection />

            <Box sx={{
                position: 'sticky',
                zIndex: 999,
                // bgcolor: theme.palette.dark.dark,
                borderRadius: '8px',
                top: '24px',
                bottom: '48px',
                border: `1px solid ${theme.palette.dark.light}`,
                width: { xs: '100%', sm: 'fit-content', md: 'fit-content', lg: 'fit-content', xl: 'fit-content' },
                margin: 'auto',
                overflow: 'hidden',
                backdropFilter: 'blur(300px)', // Apply blur effect

            }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                >
                    <StyledTab label="Scroll to Top" name='top' />
                    <StyledTab label="Our Sports" name='our-sports' />
                    <StyledTab label="Why BetzOn?" name='why-betzon' />
                    <StyledTab label="Join Waitlist" name='waitlist' />
                </StyledTabs>
            </Box>
            <div style={{ marginBottom: '120px' }} />
            <LeagueDisplaySection />
            <div style={{ marginBottom: '120px' }} />
            <OurResponsibilitiesSection />
            <div style={{ marginBottom: '120px' }} />
            <ContactSection />
            <div style={{ marginBottom: '120px' }} />
*/
