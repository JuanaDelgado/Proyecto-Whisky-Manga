'use client'
import {useState} from "react";
import "./manga.css";

export default function Manga ({manga}) {
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState("");

    const handlePlus = () => {
        setQuantity(quantity + 1);
    }
    const handleMinus = () => {
        setQuantity(quantity - 1);
    }
    const handleBuy = () => {
        setMessage(`Has comprado ${quantity} unidades de ${manga.name}`);
        setTimeout(() => setMessage(''), 3000);
    }

    return (
        <div className="manga-card">
            <div className="manga-image-container">
                <img
                src={manga.label}
                alt={`Foto de ${manga.name}`}
                className="manga-image"
                />
            </div>
            <div className="manga-info">
                <h3 className="manga-name">{manga.name}</h3>
                <div>
                    <p className="manga-details"><span>Escritor:</span>{manga.escritor}</p>
                </div>
                <div className="quantity-control">
                    <span className="quantity-label">Cantidad:</span>
                    <button onClick={handleMinus} className="quantity-button quantity-button-left">-</button>
                    {/*Contador*/}
                    <span className="quantity-display">{quantity}</span>
                    <button onClick={handlePlus} className="quantity-button quantity-button-right">+</button>
                </div>
                <button onClick={handleBuy} className="buy-button">Comprar</button>
                {
                    message && (<div className="success-message">{message}</div>)
                }
            </div>
        </div>
    );
}