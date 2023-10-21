import { useState } from "react";

export const AñadirLibro = ({añadirLibro}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

// Utilizamos preventDefault y utilizamos variables para almacenar valores
  const onSubmit = (event) => {
    
    event.preventDefault();
    // El hijo recibe añadirLibro que es la propertie que realmente es una funcion, y a traves del spread operator para sumar la infomacion
    
    añadirLibro(inputValue)
    // Sabemos que emite bien el hijo hacia el padre y el padre hace el console.log
  };

//   Utilizamos Form y evento onsubmit
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Escribir libro"
          onChange={onInputChange}
          value={inputValue}
        />
      </form>
    </>
  );
};
