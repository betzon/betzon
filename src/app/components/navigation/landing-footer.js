"use client";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";

import logo from "../../assets/mb.png";

const LandingFooter = () => {
  const theme = useTheme();
  const icons = [
    { icon: <FacebookIcon />, title: "Facebook" },
    { icon: <InstagramIcon />, title: "Instagram" },
    { icon: <XIcon />, title: "X" },
    { icon: <LinkedInIcon />, title: "LinkedIn" },
    { icon: <YouTubeIcon />, title: "YouTube" },
  ]; // const icons = []
  const footerItems = [
    {
      title: "Link One",
      path: "/",
    },
    {
      title: "Link Two",
      path: "/",
    },
    {
      title: "Link Three",
      path: "/",
    },
    {
      title: "Link Four",
      path: "/",
    },
    {
      title: "Link Five",
      path: "/",
    },
    // {
    //     title: 'Help Center',
    //     path: '/help-center'
    // }
  ];

  const handleEmailClick = () => {
    if (typeof window !== "undefined") {
      window.location.href = "mailto:info@betzon.com";
    }
  };

  const isPolcyAndTermUseReady = true;


  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        // background: 'red',
        width: "100vw",
        position: "absolute",
        left: 0,
        paddingLeft: isLargeScreen ? "50px" : '20px',
        paddingRight:  isLargeScreen ? "50px" : '20px',

        background: "black",
        //backdropFilter: 'blur(200px)', // Apply blur effect
        paddingTop: isLargeScreen ? "84px" : '20px',
        paddingBottom: "48px",
        // borderTop: `1px solid ${theme.palette.primary.main}`
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={6}>
          <Box
            maxWidth="xl"
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              flexDirection: {
                xs: "column",
                sm: "column",

                md: "column",
              },
              gridTemplateColumns: ".5fr 1fr 1fr 1fr",
              gap: "48px",
              paddingRight: isLargeScreen && "80px",
              paddingLeft:  isLargeScreen && "50px",
              alignItems:!isLargeScreen && 'flex-start'
            }}

          >
            {/*
                        <Box sx={{
                            ///background: theme.palette.primary.main,
                            border: `6px solid ${theme.palette.primary.main}`,
                            background: "black",
                            borderRadius: '12px 12px 12px 0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100px',
                            height: '100px'
                        }}>
                            <Image src={logo} height={50} />
                        </Box>
                        */}
            <Box sx={{ flex: 1 }}>
              <Stack style={{ paddingRight: isLargeScreen && "40%" }}>
                <Stack direction="row" gap={2} alignItems="center">
                  <Image src={logo} height={50} />
                  <Typography fontWeight={700} fontSize={24}>
                    BetzOn
                  </Typography>
                </Stack>
                <Typography sx={{ paddingTop: "24px", paddingBottom: "24px" }}>
                  Stay up to date with the latest features and releases by
                  joining our newsletter.
                </Typography>
                <Stack direction="row" spacing={3}>
                  <TextField
                    id="filled-basic"
                    label="Enter your email"
                    variant="filled"
                    sx={{ flex: 1 }}
                  />

                  <Button variant="outlined" style={{ borderColor: "white" }}>
                    Subscribe
                  </Button>
                </Stack>

                <Typography style={{ paddingTop: "16px" }} fontSize={12}>
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </Typography>
              </Stack>
            </Box>

            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Links
              </Typography>

              <Stack spacing={1}>
                {footerItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      key={index}
                      sx={{ color: theme.palette.dark.otherlight }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Stack>

            {icons.length === 0 ? (
              ""
            ) : (
              <Stack spacing={2}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Follow Us
                </Typography>
                <Stack spacing={3}>
                  {icons.map((item, index) => (
                    <IconButton
                      key="index"
                      sx={{
                        padding: 0,
                        color: theme.palette.dark.otherlight,
                        gap: "5px",
                        justifyContent: "flex-start",
                      }}
                    >
                      {item.icon}
                      <Typography>{item.title}</Typography>
                    </IconButton>
                  ))}
                </Stack>
              </Stack>
            )}

            {/* <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Contact Details
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.dark.otherlight }}
              >
                If you have any questions, feel free to contact our team!
              </Typography>

              <List spacing={1}>
                <ListItemButton
                  onClick={handleEmailClick} // Add this line
                  sx={{
                    color: theme.palette.dark.otherlight,
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <LocalPhoneIcon />
                  <Typography>info@betzon.com</Typography>
                </ListItemButton>

                <ListItem
                  sx={{
                    color: theme.palette.dark.otherlight,
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: "16px",
                  }}
                >
                  <LocationOnIcon />
                  <Typography>
                    611 N. Brand Blvd, <br /> Glendale, California
                  </Typography>
                </ListItem>
              </List>
            </Stack> */}
          </Box>
          {isPolcyAndTermUseReady ? (
            <>
             { isLargeScreen &&  <Divider
                sx={{ backgroundColor: theme.palette.dark.otherlight }}
              />}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column-reverse",
                    sm: "column-reverse",
                    md: "row",
                    lg: "row",
                    xl: "row",
                  },
                  gap: "16px",
                  justifyContent: "space-between",
                  pt: "24px",
                  pb: "24px",
                }}
              >
                <Typography sx={{ color: theme.palette.dark.otherlight }}>
                  © 2024 BetzOn Inc. All rights reserved.
                </Typography>

                <Stack spacing={3} direction={ isLargeScreen ? "row" :"column"}>
                  <Link
                    href="#"
                    style={{
                      color: "white",
                    }}
                  >
                    <Typography sx={{ color: theme.palette.dark.otherlight }}>
                      Privacy Policy
                    </Typography>
                  </Link>

                  <Link
                    href="#"
                    style={{
                      color: "white",
                    }}
                  >
                    <Typography sx={{ color: theme.palette.dark.otherlight }}>
                      Terms of Use
                    </Typography>
                  </Link>

                  <Link
                    href="#"
                    style={{
                      color: "white",
                    }}
                  >
                    <Typography sx={{ color: theme.palette.dark.otherlight }}>
                      Cookies Settings
                    </Typography>
                  </Link>
                </Stack>
              </Box>
            </>
          ) : (
            ""
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingFooter;
