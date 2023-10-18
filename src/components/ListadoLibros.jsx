import { useState } from "react"


const Items= ({ titulo, autor, año}) => {
    return (
        <li>
            {titulo}
            {autor}
            {año}
        </li>
    )
}


export const ListadoLibros = () => {

      let libros = [
      {
        titulo: "El Gran Gatsby",
        autor: "F. Scott Fitzgerald",
        año: 1925
      },
      {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967
      }
    ]

  const [arreglo, setarreglo] = useState(libros)


  return (
    <>
    <h2>LIBROS PARA LECTURA</h2>
    <ol>
        {arreglo.map(item => <item key = {item.año} titulo = {item.titulo} autor = {item.autor} año = {item.año}></item>)}
    </ol>
    </>
  )

}


export default ListadoLibros;