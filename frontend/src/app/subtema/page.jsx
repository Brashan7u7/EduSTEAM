"use client"
import React from "react";
import { useState } from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tema() {
    const [titulo, settitulo] = useState("");
    const [descripcion, setdescripcion] = useState("");
   

    async function register() {
        let item = { titulo, descripcion};

        try {
            const result = await fetch("http://localhost:8000/api/tema", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });

            const data = await result.json();
            console.log(data);

            localStorage.setItem("tema-info",JSON.stringify(result));
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div>
      <Navbar2></Navbar2>
      <div className={styles.header_content}>
        <div className={styles.card1}>
          <h4>Crear Temario</h4>
          <form className="row g-3">
            <div className="col-12" className={styles.cuestion}>
              <label htmlFor="inputTitle" className="form-label">Nombre del tema</label>
              <input type="text" value={titulo} onChange={ (e) => settitulo(e.target.value)} required className={`form-control ${styles.input}`} name="inputTitle" id="inputTitle" placeholder="Ingresa el nombre del tema"/>
            </div>
            <div className="col-12" className={styles.cuestion}>
              <label for="inputCategory" className="form-label">Categoria</label>
              <select id="inputState" className="form-select" >
                <option selected="">Ingenieria</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-12" className={styles.cuestion}>
              <label htmlFor="inputDescription" className="form-label">Descripcion del tema</label>
              <input type="text" value={descripcion} onChange={ (e) => setdescripcion(e.target.value)} required className={`form-control ${styles.input}`} name= "inputDescription" id="inputDescription" placeholder="Ingresa la descripción del tema"/>
            </div>
          </form>
          <div className={styles.button}>
          <button className={styles.boton}>
            <a href="/tema">Ver Subtemas</a>
          </button>
          </div>
        </div>

<div className={styles.colum}>
        <div className={styles.card2}>
          <h4>Crear Subtema</h4>
          <form className="row g-3">
            <div className="col-12" className={styles.cuestion}>
              <label htmlFor="inputTitle" className="form-label">Nombre del subtema</label>
              <input type="text" value={titulo} onChange={ (e) => settitulo(e.target.value)} required className={`form-control ${styles.input}`} name="inputTitle" id="inputTitle" placeholder="Ingresa el nombre del subtema"/>
            </div>
            <div className="col-12" className={styles.cuestion}>
              <label htmlFor="inputDescription" className="form-label">Información del subtema</label>
              <input type="text" value={descripcion} onChange={ (e) => setdescripcion(e.target.value)} required className={`form-control ${styles.input}`} name= "inputDescription" id="inputDescription" placeholder="Ingresa la infromación del subtema"/>
            </div>
          </form>
          <div className={styles.button}>
          <button className={styles.boton}>
            <a href="/tema">Guardar</a>
          </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

    
