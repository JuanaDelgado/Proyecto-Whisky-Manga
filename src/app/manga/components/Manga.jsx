'use client'
import {useState} from "react";
import "./manga.css";
//Likes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

export default function Manga ({manga}) {
    const [quantity, setQuantity] = useState(0);
    const [message, setMessage] = useState("");
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);

    //Cambio el handleBuy
    const handleBuy = () => {
        if(quantity === 1){
            setMessage(`Has comprado ${quantity} unidad de ${manga.name}`);
            setTimeout(() => setMessage(''), 3000);
        }else if(quantity <= 0){
            setMessage(`No se puede comprar ${quantity} unidades de ${manga.name}`);
            setTimeout(() => setMessage(''), 3000);
        }else{
            setMessage(`Has comprado ${quantity} unidades de ${manga.name}`);
            setTimeout(() => setMessage(''), 3000);
        } 
    }

    //Agrego opcion del like
    const handleLike = () => {
        if(liked) {
            setLikes(likes - 1);
            setLiked(!liked);
        }else{
            setLikes(likes + 1);
            setLiked(!liked);
        }
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
                {/*Cambio para que sea un solo handle*/}
                <div className="quantity-control">
                    <span className="quantity-label">Cantidad:</span>
                    <button onClick={() => setQuantity(quantity - 1)} className="quantity-button quantity-button-left">-</button>
                    {/*Contador*/}
                    <button onClick={() => setQuantity(quantity + 1)} className="quantity-button quantity-button-right">+</button>
                    <span className="quantity-display">{quantity}</span>
                </div>
                {/*Agrego el boton del like*/}
                <div className="heart-button">
                    <button onClick={handleLike} className={`heart-button ${liked ? 'liked' : ''}`}>
                        <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
                    </button>
                    <span>{likes}</span>
                </div>
                {/*Boton de compra*/}
                <button onClick={handleBuy} className="buy-button">Comprar</button>
                {
                    message && (<div className="success-message">{message}</div>)
                }
            </div>
        </div>
    );
}