import theme from "@/app/styles/theme";
import { Button, Stack, Typography } from "@mui/material";
import { Box, display, minHeight } from "@mui/system";
import React from "react";
import check from "../../assets/check.png";
import Image from "next/image";
export default function Pricing({ pricing }) {
  return (
    <Box
      style={{
        border: "2px solid",
        borderColor: pricing?.best_value
          ? theme.palette.primary.main
          : "#1E1E1E",
        flex: 1,
        width: "100%",
        position: "relative",
        borderRadius: "12px",
        display: "flex", // Flexbox to arrange children
        flexDirection: "column", // Arrange children in a column
        alignItems: "flex-start", // Center items horizontally
        justifyContent: "space-between",
        overflow: "hidden",
        padding: "28px",
        minHeight: '356px',
        gap: "10px"
      }}
    >
      {
        pricing?.best_value
        &&
        <Button
          size="small"
          variant="contained">
          BEST VALUE
        </Button>
      }

      <Typography
        variant="h6"
        style={{
          textAlign: "left",
          textTransform: "uppercase",
          fontWeight: 700
        }}
      >
        {pricing?.name}
      </Typography>
      <Stack
        spacing={1}
        direction="row"
        alignItems={"center"}>
        <Typography
          variant="h2"
          style={{
            lineHeight: 1.25,
            letterSpacing: -1.5,
            fontWeight: 900,
          }}
        >
          ${pricing?.price_per_month}
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontSize: 12,

            color: "#8D8D8D",
            textAlign: "left",
          }}
        >
          PER MONTH
        </Typography>
      </Stack>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px"
        }}>
        {pricing?.features?.map((item) => (
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Image src={check} />
            <Typography
              variant="p"
              style={{
                textTransform: "uppercase",

                fontSize: "16px",
                fontWeight: "900",
              }}
            >
              {item}
            </Typography>
          </div>
        ))}
      </div>
      <Button variant="contained" style={{ backgroundColor: !pricing?.best_value && "#1E1E1E" }}>
        SELECT PLAN
      </Button>
    </Box>
  );
}
