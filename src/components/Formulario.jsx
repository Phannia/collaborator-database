// import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';
import { Fragment, useState } from "react";

import React from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');

    return (
    <Fragment>
        <h3
        className="container">
            Agregar Colaborador
        </h3>
        <form>
            <div className="form-group container py-1">
                <input 
                type="text" 
                name="nombre" 
                autoComplete="off" 
                placeholder="Nombre del colaborador"
                
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text" 
                name="email"
                autoComplete="off" 
                placeholder="Email del colaborador"
                
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text"  
                autoComplete="off" 
                name="edad"
                placeholder="Edad del colaborador"
                
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text" 
                autoComplete="off" 
                name="cargo"
                placeholder="Cargo del colaborador"
                
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text" 
                autoComplete="off" 
                name="telefono"
                placeholder="Teléfono del colaborador"
                
                />
            </div>
            <div className="container py-1">
                <button 
                className="btn btn-primary" 
                type="submit">
                    Agregar colaborador
                </button>
            </div>
        </form>
        
    </Fragment>
  )
}

export default Formulario