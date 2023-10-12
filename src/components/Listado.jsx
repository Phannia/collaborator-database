import React from 'react'
import Table from "react-bootstrap/Table";
import { BaseColaboradores } from '../assets/JS/BaseColaboradores';


const Listado = () => {
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
            <tr>
                <td></td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td></td>
                <td> seré un botón borrar</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td></td>
                <td> seré un botón borrar</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td></td>
                <td></td>
                <td> seré un botón borrar</td>
            </tr>
        </tbody>
        </Table>
    );
}

export default Listado