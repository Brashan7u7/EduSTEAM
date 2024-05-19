"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css"
import { signOut, useSession } from "next-auth/react";

const links = [
    {
        id: 1,
        title: "Inicio",
        url: "/"
    },
    {
        id: 2,
        title: "Nosotros",
        url: "/"
    },
    {
        id: 3,
        title: "Temas",
        url: "/"
    },
    {
        id: 4,
        title: "",
        url: "/"
    },
]

const Navbar = () => {
   // const session = useSession();

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <img src="/logo.png" width="200" height="170" alt="" />
            </Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                <button className={styles.boton}><a href="/dashboard">Iniciar Sesion</a></button>
            </div>
        </div>
    )
}

export default Navbar