import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const nosotros = () => {
  return (
    <div>
      <div className={styles.header}></div>
      <div className={styles.header_content}>
        <Link href="/" className={styles.logo}>
          <img src="/fondo2.png" width="130" height="510" alt="" />
        </Link>
        <img src="/mensaje.png" width="400" height="400" alt="" />
        <div className={styles.card1}>
            <h2>Correo: STEAM@gmail.com</h2>
            <h2>Numero:953458764</h2>
            <h2>Dirección: Santa Cruz Xoxocotlan, Oaxaca</h2>
            <h2>Duda enviar mensaje al siguiente correo: ayudasteam@gamil.com</h2>
        </div>
      </div>
    </div>
  );
};
export default nosotros;
