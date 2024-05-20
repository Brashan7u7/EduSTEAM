"use client"
import React from "react";
import { useState } from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import styles from "./page.module.css";

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
      <div className={styles.formulario}>
        <div className={styles.titulo}>
          <h4>Registrarse</h4>
        </div>
        <div className="container">
          <div className="row">
            <label htmlFor="inputName" className="col-sm-4 col-form-label">
              Nombre del Tema
            </label>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-11">
                    <input
                      type="text"
                      value={titulo}
                      onChange={(e) => settitulo(e.target.value)}
                      required
                      className={`form-control ${styles.input}`}
                      name="inputName"
                      id="inputName"
                      placeholder="Ingresa el nombre del tema"
                    />
                  </div>
                  <div className="col-1 mt-2">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
            Descripcion del tema
            </label>
            <div className="col-12">
              <div className="container">
                <div className="row">
                  <div className="col-11">
                    <input
                      type="email"
                      value={descripcion}
                      onChange={(e) => setdescripcion(e.target.value)}
                      required
                      className={`form-control ${styles.input}`}
                      name="inputEmail"
                      id="inputEmail"
                      placeholder="Ingresa tu correo"
                    />
                  </div>
                  <div className="col-1 mt-2">
                    <i className="fas fa-mail-bulk item"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
            <div>
              <button
                onClick={register}
                type="button"
                className={`btn btn-primary ${styles.btnCustom2}`}
              >
                Registrarse
              </button>
            </div>
          </div>
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-2 extra2">
              <hr />
            </div>
            <div
              className={`col-xxl-6 col-xl-8 col-lg-6 col-md-6 col-sm-6 col-xs-8 ${styles.extra}`}
            >
              ¿Aun no tienes una cuenta?
            </div>
            <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-2 extra2">
              <hr />
            </div>
          </div>
          <div className="mb-3 row">
            <div className=""></div>
          </div>
        </div>
  );
};

//export default Tema;
