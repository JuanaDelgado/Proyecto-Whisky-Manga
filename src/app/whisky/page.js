'use client'
import WhiskyList from "./components/WhiskyList";
import { useState, useEffect } from 'react';

export default function WhiskyPage() {
    const[whiskys, setWhiskys] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWhiskys = async () => {
            try{
                const response = await fetch('https://raw.githubusercontent.com/JuanaDelgado/PNT2-Clases/refs/heads/main/EjemploServidor/bddDeMentira.json');

                const data = await response.json();
                setWhiskys(data);
                setLoading(false);
            } catch (error){
                console.log('Error al cargar whiskys', error);
                setLoading(false);
            }

        };
        setTimeout(() => {
            fetchWhiskys();
        });
    }, []);

    return (
        <div className="container">
            {
                loading ? (
                    <p>Cargando whiskys...</p>
                ) : (
                    <WhiskyList whiskys={whiskys} />
                )
            }
        </div>
    )
}