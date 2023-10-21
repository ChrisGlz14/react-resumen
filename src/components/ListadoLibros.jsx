import React, { useState } from "react";
import { AñadirLibro } from "./AñadirLibro";

const Items = ({ titulo, autor, año }) => {
  return (
    <li>
      <h3>{titulo}</h3>
      <p>Autor: {autor}</p>
      <p>Año: {año}</p>
    </li>
  );
};

const ListadoLibros = () => {
  let libros = [
    {
      id : 0,
      titulo: "El Gran Gatsby",
      autor: "F. Scott Fitzgerald",
      año: 1925,
    },
    {
      id : 1,
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967,
    },
    {
      id : 2,
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      año: 1605,
    },
    {
      id : 3,
      titulo: "1984",
      autor: "George Orwell",
      año: 1949,
    },
  ];

  const [arreglo, setarreglo] = useState(libros);

  // De esta forma no delegamos la modificacion directa del estado al hijo, para que el hijo solo mande lo que tiene que hacer, ya que el componente agregarTarea podriamos utilizarlo en diferentes lugares


  // llega un valor que es un String, se convierte en un objeto y se agrega a la lista
  const onAgregarLibro = (val) => {

    let valor = val.trim()

    if(valor < 1) return

    const envio = {
      id : arreglo.length,
      titulo: val,
      autor: "No se sabe",
      año: "0000",
    };
    setarreglo([...arreglo, envio]);
  };

  return (
    <>
      <h2>LIBROS PARA LECTURA</h2>

      {/* a traves de las properties de añadirlibro, cuya propiedad es una funcion (onAgregarLibro) que es la que modifica el estado del padre  */}
      {/* añadirLibro es el nombre que recibirá el hijo */}
      {/* onInputChange es lo que le mandamos desde el Padre */}

      <AñadirLibro añadirLibro={onAgregarLibro}></AñadirLibro>

      <ol>
        {arreglo.map((item) => (
          <Items
            key={item.id}
            titulo={item.titulo}
            autor={item.autor}
            año={item.año}
          />
        ))}
      </ol>
    </>
  );
};

export default ListadoLibros;
