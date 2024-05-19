import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <img src="/logo.png" width="150" height="120" alt="Logo" />
      </div>
      <div className={styles.column2}>
        <img src="/contacto.png" width="150" height="120" alt="Contacto" />
        <h3>Contactanos</h3>
      </div>
      <div className={styles.column3}>
        <p>Santa Cruz Xoxocotlán, Oaxaca</p>
        <p>Politicas de Privacidad</p>
      </div>
      <div className={styles.column4}>
        <h3>Siguenos</h3>
      </div>
    </div>
  );
};

export default Footer;
