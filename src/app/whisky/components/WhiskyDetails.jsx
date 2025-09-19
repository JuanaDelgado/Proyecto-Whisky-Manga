'use client';

import "./whisky.css";
import Link from "next/link";

//Nuevo
export default function WhiskyDetails({whisky}) {
    
    if(!whisky){
        return <div>Cargando...</div>
    }
    return (
        <div>
            <div>Nombre: {whisky.name}</div>
            <div>Pais: {whisky.pais}</div>
        </div>
    );
}