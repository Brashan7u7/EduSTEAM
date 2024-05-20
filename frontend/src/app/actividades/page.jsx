import React from 'react';
import styles from './Page.module.css';

const activities = [
  {
    category: "SCIENCE",
    title: "OBSERVACIÓN DE MICROORGANISMOS",
    description: "Utilizan microscopios digitales para observar microorganismos en muestras de agua o suelo.",
    buttonText: "VER MÁS"
  },
  {
    category: "TECHNOLOGY",
    title: "DISEÑO DE UN SITIO WEB",
    description: "Aprenden los fundamentos del diseño web creando su propio sitio usando HTML y CSS.",
    buttonText: "VER MÁS"
  },
  {
    category: "ENGINEERING",
    title: "CONSTRUCCIÓN DE PUENTES",
    description: "Diseñan y construyen puentes con materiales simples para probar su resistencia.",
    buttonText: "VER MÁS"
  },
  {
    category: "ART",
    title: "PROYECTO DE ARTE RECICLADO",
    description: "Crean obras de arte utilizando materiales reciclados como papel y plástico.",
    buttonText: "VER MÁS"
  },
  {
    category: "MATHEMATICS",
    title: "INVESTIGACIÓN DE PATRONES NUMÉRICOS",
    description: "Analizan secuencias numéricas y buscan patrones utilizando hojas de cálculo como Excel o Google Sheets.",
    buttonText: "VER MÁS"
  }
];

const Page = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>STEAMHUB</h1>
        <nav className={styles.nav}>
          <button>Inicio</button>
          <button>Temario</button>
          <button>Temas</button>
          <button>Salir</button>
        </nav>
      </header>
      <main className={styles.main}>
        <h2>BIENVENIDO A TUS ACTIVIDADES</h2>
        <div className={styles.activities}>
          {activities.map((activity, index) => (
            <div key={index} className={styles.activityCard}>
              <div className={styles.icon} data-category={activity.category.toLowerCase()}></div>
              <div className={styles.content}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <button className={styles.button}>{activity.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Page;
