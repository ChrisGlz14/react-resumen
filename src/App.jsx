import './App.css'
import ListadoLibros  from './components/ListadoLibros'
import { PrimerComponente } from './components/PrimerComponenteProps'

function App() {

  return (
    <>
      <PrimerComponente titulo = "ESTE ES UNA PROPS" subtitulo="Curso de Sergi CODE" numero = {7}/>

      <ListadoLibros />
    </>
  )
}

export default App
