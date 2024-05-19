"use client"
import styles from './page.module.css';
import Link from "next/link";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("");

    async function register() {
        let item = { nombre, email, password, rol };

        try {
            const result = await fetch("http://localhost:8000/api/register", {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            });

            const data = await result.json();
            console.log(data);

            localStorage.setItem("user-info",JSON.stringify(result));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className={`col-lg-7 col-md-6 d-flex ${styles.imagenCol}`} style={{ backgroundColor: '#F8CB97' }}>
                    <img src="logo.png" alt="SustentArte Logo" className={styles.imagen} />
                </div>
                <div className="col-lg-5 col-md-6" style={{ height: '100%' }}>
                    <div className={styles.formulario}>
                        <div className={styles.titulo}>
                            <img src="assets/img/SustentArte_Logo.png" alt="SustentArte Logo" className={styles.imagen2} />
                            <h4>Registrarse</h4>
                        </div>
                        <div className="container">
                            <div className="row">
                                <label htmlFor="inputName" className="col-sm-4 col-form-label">Nombre</label>
                                <div className="col-12">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-11">
                                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required className={`form-control ${styles.input}`} name="inputName" id="inputName" placeholder="Ingresa tu nombre" />
                                            </div>
                                            <div className="col-1 mt-2">
                                                <i className="fa fa-user" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="inputEmail" className="col-sm-4 col-form-label">Correo</label>
                                <div className="col-12">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-11">
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={`form-control ${styles.input}`} name="inputEmail" id="inputEmail" placeholder="Ingresa tu correo" />
                                            </div>
                                            <div className="col-1 mt-2">
                                                <i className="fas fa-mail-bulk item"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div>
                                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Contraseña</label>
                                </div>
                                <div className="col-sm-12">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-11">
                                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={`form-control ${styles.input}`} name="inputPassword" id="inputPassword" placeholder="Ingresa tu contraseña" />
                                            </div>
                                            <div className="col-1 mt-2">
                                                <i className="fa fa-key item" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div>
                                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Elige tu rol:</label>
                                </div>
                                <div className="col-sm-12">
                                    <div className="container">
                                        <div className="row">
                                            <div className="form-check">
                                                <input onChange={() => setRol("1")} className="form-check-input" type="radio" name="rol" id="rol1" />
                                                <label className="form-check-label" htmlFor="rol1"> Maestro </label>
                                            </div>
                                            <div className="form-check">
                                                <input onChange={() => setRol("2")} className="form-check-input" type="radio" name="rol" id="rol2" />
                                                <label className="form-check-label" htmlFor="rol2"> Alumno </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div>
                                    <button onClick={register} type="button" className={`btn btn-primary ${styles.btnCustom2}`}>Registrarse</button>
                                </div>
                            </div>
                            <div className="row justify-content-center align-items-center g-2">
                                <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-2 extra2"><hr /></div>
                                <div className={`col-xxl-6 col-xl-8 col-lg-6 col-md-6 col-sm-6 col-xs-8 ${styles.extra}`}>¿Aun no tienes una cuenta?</div>
                                <div className="col-xxl-3 col-xl-2 col-lg-3 col-md-3 col-sm-3 col-xs-2 extra2"><hr /></div>
                            </div>
                            <div className="mb-3 row">
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
