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

import ui7 from "../assets/ux/ui-7.jpg";
import ui6 from "../assets/ux/ui-6.jpg";
import ui5 from "../assets/ux/ui-5.jpg";
import ui4 from "../assets/ux/ui-4.jpg";
import ui3 from "../assets/ux/ui-3.jpg";
import ui2 from "../assets/ux/ui-2.jpg";
import ui1 from "../assets/ux/uib-1.jpg";

import { Inter } from 'next/font/google'
import HowToCarousel from "./components/carousel";
import StateList from "./components/stateList";
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

  const states = [
    "Alaska",
    "California",
    "Florida",
    "Georgia",
    "Illinois",
    "Kansas",
    "Kentucky",
    "Minnesota",
    "Nebraska",
    "New Mexico",
    "North Carolina",
    "North Dakota",
    "Oklahoma",
    "Oregon",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Texas",
    "Utah",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "District of Columbia"
  ];

  const howToSteps = [
    {
      src: ui5,
      name: "STEP 1: REGISTER ACCOUNT",
      description: "We legally need to verify your identity before you play. We will need some personal detials such as your age and address. This is to ensure the safety of you and everyone who uses Betzon!"
    },
    {
      src: ui1,
      name: "STEP 2: DEPOSIT FUNDS",
      description: "You can start playing against other users on Betzon with as little as $3. Make a fast and more importantly SECURE deposit using your debit or credit card and start playing right away!"
    },
    {
      src: ui2,
      name: "STEP 3: JOIN/CREATE/SEND A CONTEST",
      description: "Now it's time to use your skill and compete against other users on the Betzon by joining their contest or create your own to post/send to another user!"
    },
    {
      src: ui7,
      name: "STEP 4: WIN!",
      description: ""
    }
  ]

  const socialFeatures = [
    {
      src: ui4,
      name: "ADD A CAPTION TO YOUR CONTEST",
      description: "Talk smack, hype up your favorite pick, hate on your least favorite player when you create a contest. Let people know your thoughts!"
    },
    {
      src: ui3,
      name: "COMMENT ON OTHER CONTESTS",
      description: "Have something to say about someones contest? You better let them know!"
    },
    {
      src: ui6,
      name: "SEND MESSAGES/CONTEST TO USERS AND YOUR FRIENDS",
      description: "Got something to settle with a specific user? Send them a message or a contest!"
    }
  ]

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
            variant="h5"
            sx={{
              fontWeight: 900,
              lineHeight: 1
            }}
          >
            DAILY SPORTS FANTASY&apos;S
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              lineHeight: 1
            }}
          >
            ULTIMATE FAN-VS-FAN EXPERIENCE.
          </Typography>
          <Button variant="contained">DOWNLOAD ON APPLE</Button>
        </Stack>
      </Container>


      {/* See pricing container */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          pt: 6
        }}
      >
        <Stack
          sx={{
            marginBottom: -10
          }}
          direction={"column"}
          spacing={-1}>
          {
            ["NO JUICE", "NO VIG", "NO HOUSE", "ALL FAN-VS-FAN"]?.map((item, index) => (
              <Typography
                key={index}
                variant="h1"
                fontWeight={900}
                sx={{
                  fontWeight: 900,
                  textAlign: "center"
                }}
              >
                {item}
              </Typography>
            ))
          }
        </Stack>
        <Image
          src={sittingglasses}
          style={{
            width: "100%",
            objectFit: "contain",
            height: "auto",
          }}
        />
      </Container>

      <Container
        sx={{
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, #000 100%)`,
          gap: 6
        }}
      >
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 700
          }}>
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            HOW TO PLAY
          </Typography>
          <Typography
            variant="body1"
            fontWeight={900}
            sx={{
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            Betzon&apos;s Fan-vs-Fan Daily Fantasy Sports app is lightning quick and easy to use. You create an account, add funds, and start playing in less than 1 minute. Here&apos;s how:
          </Typography>
        </Stack>
        <HowToCarousel data={howToSteps} showButton />
        <Button
          size="large"
          variant="contained">
          AVAILABLE ON APP STORE
        </Button>
      </Container>

      <Container
        sx={{
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#000",
        }}
      >
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2
          }}>
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            SOCIAL FEATURES
          </Typography>
        </Stack>
        <HowToCarousel data={socialFeatures} interval={4000} />
        <Button
          size="large"
          variant="contained">
          AVAILABLE ON APP STORE
        </Button>
      </Container>

      <Container
        sx={{
          py: 6,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "#000",
          gap: 4
        }}
      >
        <Stack
          sx={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Typography
            variant="h1"
            fontWeight={900}
            sx={{
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            AVAILABLE IN 23 STATES
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 900,
              textAlign: "center"
            }}
          >
            Betzon&apos;s social features can be accessed from anywhere in the United States, however not all games are available.
            Betzon&apos;s real-money games can be played in the following states:
          </Typography>
        </Stack>
        <StateList states={states} />
      </Container>

      <Container
        maxWidth={false}
        disableGutters
        style={{
          position: "relative",
          marginTop: 36
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
            variant="h5"
            fontWeight={900}
            style={{ textAlign: isLargeScreen ? "center" : "left" }}
          >
            THE ULTIMATE FAN-VS-FAN EXPERIENCE
          </Typography>
          <Typography
            variant="h5"
            fontWeight={500}
            style={{ textAlign: isLargeScreen ? "center" : "left" }}
          >
            JOIN BETZON TODAY.
          </Typography>
          <Button variant="contained" style={{ marginTop: 15 }}>
            AVAILABLE ON APP STORE
          </Button>
        </Box>
      </Container>

    </>
  );
};

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
