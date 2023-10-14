
import { useState} from 'react'

import { React, useState} from 'react'

import Listado from './components/Listado'
import Formulario from './components/Formulario'
import { BaseColaboradores } from './assets/JS/BaseColaboradores.js'



const App = () => {
  const [ListaColaboradores, setListaColaboradores] = useState(BaseColaboradores);


  return (
    <main className='row'>

        <section className='container-input'>
            <Formulario 
            ListaColaboradores={ListaColaboradores} 
            setListaColaboradores={setListaColaboradores}
            
            />
        </section>
        <section className='container-list'>
            <Listado 
            ListaColaboradores={ListaColaboradores} 
            setListaColaboradores={setListaColaboradores}

        <section className='container'>
            <Listado 
            ListaColaboradores={ListaColaboradores} 
            setListaColaboradores={setListaColaboradores}
            />
        </section>
        <section className='container'>
            <Formulario 
            ListaColaboradores={ListaColaboradores} 
            setListaColaboradores={setListaColaboradores}
            
            />
        </section>
        
    </main>
  )
}

export default App