"use client"
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@emotion/react";

const Item = ({ data }) => {
    const router = useRouter();
    const theme = useTheme();

    return (
        <Stack spacing={2}>
            <Box
                sx={{
                    background: theme.palette.primary.main,
                    height: "60px",
                    width: "60px",
                    borderRadius: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {data.icon}
            </Box>

            <List
                subheader={
                    <ListSubheader
                        sx={{ background: "transparent", mb: 0.5, mt: 0.5 }}
                        id="nested-list-subheader"
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                            {data.title}
                        </Typography>
                    </ListSubheader>
                }
            >
                {data.items.map((item, index) => {
                    // If it's an external link
                    if (item?.type === "external") {
                        return (
                            <ListItemButton
                                key={index}
                                component="a"
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ListItemText primary={item.title} />
                            </ListItemButton>
                        );
                    }
                    // Otherwise, internal navigation
                    return (
                        <ListItemButton
                            key={index}
                            onClick={() => router.push(`/help-center${item.path}`)}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Stack>
    );
};

const Grid = ({ data }) => {
    const theme = useTheme();
    const isMediumUp = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box
            sx={{
                display: "grid",
                gap: "48px",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                    lg: "1fr 1fr 1fr 1fr",
                    xl: "1fr 1fr 1fr 1fr",
                },
            }}
        >
            {data.map((item, index) => (
                <Item data={item} key={index} />
            ))}
        </Box>
    );
};

export default Grid;