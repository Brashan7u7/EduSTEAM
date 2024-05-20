"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import { useSession } from "next-auth/react";

const links = [
  { id: 1, title: "Inicio", url: "/" },
  { id: 2, title: "Panel", url: "/panel" },
  { id: 3, title: "Actividades", url: "/actividades" },
 /* { id: 4, title: "Login", url: "/login" },
  { id: 5, title: "Register", url: "/register" },*/
];

const Navbar2 = () => {
  // const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <img src="/logo.png" width="200" height="170" alt="SustentArte Logo" />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.boton}>
          <a href="/login">Salir</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar2;
