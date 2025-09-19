import Whisky from "./Whisky";
import "./whisky.css";

//Recibo un array de whiskys xq quiero mostrar varios whiskys
export default function WhiskyList ({whiskys}) {
   
    return (
        <div className="whisky-list-container">
            <ul className="whiskys-list">
                {/*Muestro el array que me pasan x parametro
                Por cada elemento del array instancio un Whisky*/}
                {
                    whiskys.map((whisky) => (
                        <Whisky key={whisky.id} whisky={whisky} />
                    ))
                }
            </ul>
        </div>
    );
}