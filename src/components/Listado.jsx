import React from 'react'
import Table from "react-bootstrap/Table";


const Listado = (props) => {
    return (
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
                <th>Eliminar registro</th>
            </tr>
        </thead>
        <tbody>
            {props.ListaColaboradores.map(colaborador => 
                    <tr 
                    key={colaborador.id}>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td></td>
                    </tr>
                )
            }
        </tbody>
        </Table>
    );
}

export default Listado