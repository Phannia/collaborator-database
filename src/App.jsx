import React from 'react'
import Listado from './components/Listado'
import Formulario from './components/Formulario'

const App = () => {
  return (
    <main className='row'>
        <section className='container '>
            <Listado />
        </section>
        
        <section className='container'>
            <Formulario />
        </section>
        
    </main>
  )
}

export default App