"use client";
import { Button } from "@mui/material";
import Link from "next/link";

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Portfolio", url: "/portfolio" },
    { id: 3, title: "Blog", url: "/blog" },
    { id: 4, title: "About", url: "/about" },
    { id: 5, title: "Contact", url: "/contact" },
    { id: 6, title: "Dashboard", url: "/dashboard" },
];
export default function Navbar() {
    return (
        <div className="flex justify-between">
            <p>Todo App</p>
            <div>
                {links.map((link) => (
                    <Link className="mx-3" key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
                <Button variant="contained" color="success">
                    Login
                </Button>
            </div>
        </div>
    );
}
