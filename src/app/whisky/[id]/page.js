'use client'

import {useState, useEffect} from 'react';
import WhiskyDetails from "../components/WhiskyDetails";
import {useParams} from "next/navigation";

//Nuevo
export default function WhiskyDetailPage () {
    const [whisky, setWhisky] = useState(null);
    const params = useParams();
    const whiskyId = params.id;

   useEffect(() => {
        
        const fetchWhiskys = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/JuanaDelgado/PNT2-Clases/refs/heads/main/EjemploServidor/bddDeMentira.json');
                const data = await response.json();
                
                const foundWhisky = data.find((whisky) => whisky.id === whiskyId);

                if(foundWhisky){
                    setWhisky(foundWhisky);
                }else{
                    console.log('Whisky no encontrado');
                }

            } catch (error) {
                console.log('Error al cargar whiskys', error);
                setLoading(false);
            }
        };
            fetchWhiskys();
    }, []);
    
    return (
        <div>
            <WhiskyDetails whisky = {whisky} />
        </div>
    );
}