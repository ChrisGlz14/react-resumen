import React, { useState } from "react";

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
      titulo: "El Gran Gatsby",
      autor: "F. Scott Fitzgerald",
      año: 1925
    },
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967
    },
    {
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      año: 1605
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      año: 1949
    }
];


  const [arreglo, setarreglo] = useState(libros);

  return (
    <>
      <h2>LIBROS PARA LECTURA</h2>
      <ol>
        {arreglo.map((item, index) => (
          <Items key={index} titulo={item.titulo} autor={item.autor} año={item.año} />
        ))}
      </ol>
    </>
  );
};

export default ListadoLibros;