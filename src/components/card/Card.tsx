"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const bull = (
    <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
        •
    </Box>
);

interface Blog {
    title: string;
    body: string;
    id: number;
}
export default function BasicCard({ blog }: { blog: Blog }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {blog.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/blog/${blog.id}`}>View Detail</Link>
            </CardActions>
        </Card>
    );
}
