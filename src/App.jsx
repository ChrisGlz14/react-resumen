import './App.css'

import { AgregarTarea } from './components/AgregarTarea'
import ListadoLibros  from './components/ListadoLibros'
import { PrimerComponente } from './components/PrimerComponenteProps'
import { UseEffectExample } from './components/UseEffectExample'

function App() {

  return (
    <>


      <PrimerComponente titulo = "ESTE ES UNA PROPS" subtitulo="Curso de Sergi CODE" numero = {7}/>

    <AgregarTarea/>

    <PrimerComponente titulo = "ESTE ES UNA PROPS" subtitulo="Curso de Sergi CODE" numero = {7}/>

    <ListadoLibros />

    <hr />
    <UseEffectExample></UseEffectExample>
    </>
  )
}

export default App
