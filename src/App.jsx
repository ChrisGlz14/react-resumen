import './App.css'
<<<<<<< Updated upstream
import { AñadirLibro } from './components/AñadirLibro'
=======
import { AgregarTarea } from './components/AgregarTarea'
>>>>>>> Stashed changes
import ListadoLibros  from './components/ListadoLibros'
import { PrimerComponente } from './components/PrimerComponenteProps'

function App() {

  return (
    <>
<<<<<<< Updated upstream
      <AñadirLibro></AñadirLibro>

      <PrimerComponente titulo = "ESTE ES UNA PROPS" subtitulo="Curso de Sergi CODE" numero = {7}/>
=======
>>>>>>> Stashed changes

    <AgregarTarea/>

    <PrimerComponente titulo = "ESTE ES UNA PROPS" subtitulo="Curso de Sergi CODE" numero = {7}/>

    <ListadoLibros />
    </>
  )
}

export default App
