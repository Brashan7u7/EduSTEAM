import React from "react";
import Navbar2 from "../../components/Navbar2/Navbar2";
import styles from "./page.module.css";
import Link from "next/link";

const Panel = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div className={styles.title}>
        <h1>BIENVENIDO A TU PANEL</h1>
        </div>
      <div className={styles.header_content}>
        
        
        <div className={styles.card1}>
          <img src="/temas.png" width="170" height="150" alt="" />

          <button className={styles.boton}>
            <a href="/tema">Crear Tema</a>
          </button>
          <button className={styles.boton2}>
            <a href="/login">Ver Temas</a>
          </button>
        </div>
        <div className={styles.card2}>
          <img src="/actividad.png" width="170" height="150" alt="" />

          <button className={styles.boton}>
            <a href="/login">Crear Actividad</a>
          </button>
          <button className={styles.boton2}>
            <a href="/login">Ver Actividades</a>
          </button>
        </div>
        <div className={styles.card3}>
          <img src="/usuario.png" width="160" height="160" alt="" />

          <button className={styles.boton2}>
            <a href="/login">Ver Usuarios</a>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Panel;
