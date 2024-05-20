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
        <div className={styles.card1}>
            <h2>Nuestros Objetivos</h2>
            <p>Fomentar el interés en STEAM a través de actividades prácticas y relacionadas: Aumentar el interés de los estudiantes de preparatoria en los campos STEAM mediante la creación de actividades que demuestren la aplicación práctica de estos conocimientos en la vida cotidiana y en el mundo real.</p>
            <img src="/tarjetas.png" width="170" height="150" alt="" />
        </div>
        <div className={styles.card2}>
            <h2>Equipo</h2>
            <p>En STEAMHUB, creemos firmemente en el poder del trabajo en equipo y la colaboración. Nuestro equipo está compuesto por individuos apasionados y talentosos que comparten un objetivo común: brindar soluciones excepcionales y superar las expectativas de nuestros clientes. Valoramos la diversidad de habilidades, experiencias y perspectivas que cada miembro aporta, y creemos que es esta diversidad la que impulsa nuestra innovación y éxito.</p>
            <img src="/tarjeta2.png" width="170" height="150" alt=""/>
        </div>
        <div className={styles.card3}>
            <h2>Desarrollo</h2>
            <p>En STEAMHUB, creemos firmemente en el poder del trabajo en equipo y la colaboración. Nuestro equipo está compuesto por individuos apasionados y talentosos que comparten un objetivo común: brindar soluciones excepcionales y superar las expectativas de nuestros clientes. Valoramos la diversidad de habilidades, experiencias y perspectivas que cada miembro aporta, y creemos que es esta diversidad la que impulsa nuestra innovación y éxito.</p>
            <img src="/tarjeta3.png" width="170" height="150" alt=""/>
        </div>
      </div>
    </div>
  );
};
export default nosotros;
