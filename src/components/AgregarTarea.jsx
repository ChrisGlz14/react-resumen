import React, { useState } from "react";

export const AgregarTarea = () => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(inputValue)
  }
  return (
    <>
    {/* Ademas tambien hay un form con un event listener y su funciona llamada onSubmit */}
    <form onSubmit={onSubmit}>
      
      {/* Estos atributos son llamados properties y tiene un event listener con una funcion llamada onInputChange*/}
      <input
        type="text"
        placeholder="Escriba una tarea"
        value={inputValue}
        onChange={onInputChange}
      />
      
      </form>
    </>
  );
};
