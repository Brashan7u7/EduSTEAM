import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <img src="/logo.png" width="150" height="120" alt="" />
      </div>
      <div className={styles.column2}>
        <img src="/contacto.png" width="80" height="80" alt="" />
        <h3>Contactanos</h3>
      </div>
      <div className={styles.column3}>
        <p>Santa Cruz Xoxocotlán, Oaxaca</p>
        <p>Politicas de Privacidad</p>
      </div>
      <div className={styles.column4}>
        <h3>Siguenos</h3>
        <img src="/iconos.png" width="150" height="40" alt="" />
      </div>
    </div>
  );
};
export default Footer;
