import { Fragment, useState } from "react";
import React from 'react'
// import Alert from "./Alert";


const Formulario = (props) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState(false)
    //const [validate, setValidate] = useState({ isShown: true, msg: '' });

    const enviarFormulario = (e) => {
        e.preventDefault()
        if (nombre === '' || email === '' || edad === '' || cargo === '' || telefono === '') {
            setError(true)
            //setValidate({ isShown: true, msg: 'Todos los campos son obligatorios' });
            return;
        } 
        else {
            // setValidate({ isShown: true, msg: 'Se ha registrado con Exito' });
            setNombre('');
            setEmail('');
            setEdad('');
            setCargo('');
            setTelefono('');

            // agrego el dato a la array que ya existe
            props.ListaColaboradores.push({
                "id": props.ListaColaboradores.length +1,
                "nombre": nombre,
                "correo": email,
                "edad": edad,
                "cargo": cargo,
                "telefono": telefono
            });
            //se añade nuevo colaborador
            props.setListaColaboradores([...props.ListaColaboradores])
            console.log(props.ListaColaboradores);
            return;
        }
    }

    return (
    <Fragment>
        <h3
        className="container">
            Agregar Colaborador
        </h3>
        <form className="formulario" onSubmit={enviarFormulario}>
            
            <div className="form-group container py-1">
                <input 
                type="text" 
                name="nombre" 
                autoComplete="off" 
                placeholder="Nombre del colaborador"
                className='form-control'
                onChange={(e) => setNombre(e.target.value)}
                //Se comenta required para enviar alerta de Todos los campos son obligatorios
                //required
                />
                
            </div>
            <div className="form-group container py-1">
                <input 
                type="text" 
                name="email"
                autoComplete="off" 
                placeholder="Email del colaborador"
                className='form-control'
                onChange={(e) => setEmail(e.target.value)}
                //Se comenta required para enviar alerta de Todos los campos son obligatorios
                //required
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text"  
                autoComplete="off" 
                name="edad"
                placeholder="Edad del colaborador"
                className='form-control'
                onChange={(e) => setEdad(e.target.value)}
                //Se comenta required para enviar alerta de Todos los campos son obligatorios
                //required
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text" 
                autoComplete="off" 
                name="cargo"
                placeholder="Cargo del colaborador"
                className='form-control'
                onChange={(e) => setCargo(e.target.value)}
                //Se comenta required para enviar alerta de Todos los campos son obligatorios
                //required
                />
            </div>
            <div className="form-group container py-1">
                <input 
                type="text" 
                autoComplete="off" 
                name="telefono"
                placeholder="Teléfono del colaborador"
                className='form-control'
                onChange={(e) => setTelefono(e.target.value)}
                //Se comenta required para enviar alerta de Todos los campos son obligatorios
                //required
                />
            </div>
            <div className="container py-1">
                <button 
                className="btn btn-primary" 
                type="submit">
                    Agregar colaborador
                </button>
            </div>
            {/* {error ? <Alert message={message} /> : null} */}
        </form>
    </Fragment>
    )
}

export default Formulario