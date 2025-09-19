import "./whisky.css";
import Link from "next/link";

export default function Whisky ({whisky}) {
    return (
        <li key={whisky.id} className="whisky-item">
            <div className="whisky-content">
                <div className="whisky-info">
                    {/*Agregue un link*/}
                    <Link href={`/whiskys/${whisky.id}`}>
                    <div className="whisky-avatar">
                        <img 
                        src = {whisky.avatar}
                        alt = {`Foto de ${whisky.name}`}
                        className="whisky-image"/>
                    </div>
                    </Link>
                    <div className="whisky-details">
                        <div className="whisky-name">{whisky.name}</div>
                        <div className="whisky-pais">{whisky.pais}</div>
                    </div>
                </div>

                <div className="whisky-status-container">
                    <span className={`whisky-status
                    ${whisky.status === 'pocas_unidades' && 'status-pocas-unidades'}
                    ${whisky.status === 'sin_stock' && 'status-sin-stock'}
                    ${whisky.status === 'varias_unidades' && 'status-varias-unidades'}
                    ${whisky.status === 'failed' && 'status-failed'}
                    `}>
                    {whisky.status === 'pocas_unidades' && "Pocas unidades"}
                    {whisky.status === 'sin_stock' && "Sin stock"}
                    {whisky.status === 'varias_unidades' && "Varias unidades"}
                    {whisky.status === 'failed' && "No aprobado"}
                    </span>
                </div>
            </div>
        </li>
    );
}