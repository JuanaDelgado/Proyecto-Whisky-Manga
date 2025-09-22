'use client';

import "./whisky.css";
import Link from "next/link";

//Nuevo
export default function WhiskyDetails({whisky}) {
    //Si el whisky es null o undefined muestro él “Cargando”. 
    //Esto pasa antes de que el fetch de json termine de traer los datos, 
    //entonces para que la pag no quede vacía se muestra el “Cargando”
    if(!whisky){
        return <div>Cargando...</div>
    }
    //Si tengo el whisky muestro el nombre y el país
    return (
        <div>
            <div>Nombre: {whisky.name}</div>
            <div>Pais: {whisky.pais}</div>
        </div>
    );
}