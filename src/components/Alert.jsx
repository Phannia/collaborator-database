import {Form} from 'react-bootstrap'

const Alert = ({error}) => {
  return (
    <Form.Label className={error ? "text-danger" : ""}>
        {error
          ? "Debes Completar todos los Campos"
          : "Ingresa un Empleado"
        }
    </Form.Label>
  )
}

export default Alert