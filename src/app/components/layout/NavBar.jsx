'use client';

import './navBar.css';
import {useState} from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Notifications from './Notifications';
import CurrentUser from './CurrentUser';

export default function NavBar(){
    //Whisky que uso como avatar para que alguien vea como se ve la app si ya hubiera iniciado sesion
    const {currentUser, logout} = {currentUser: {
        id: '3',
        name: 'Grandy Archie',
        avatar: 'https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/main/public/img/Grady%20Archie.jpg',
        email: 'Grandy.Archie@ejemplo.com',
        status: 'completed'
    }, logout: () => {}};

    //Estados locales del NavBar
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationIndicator, setNotificationIndicator] = useState(true);

    //Si no hay usuario logueado, no muestra nada
    if(!currentUser) return null;
    return (
        //Pongo enlaces a distintas secciones o páginas (Home, Mnagas, Whisky)
        <nav className="navbar">
            <div className="navbar-content">
                {/*Logo y Menu*/}
                <div className="navbar-left">
                    <Logo />
                    <Menu />
                </div>
                <div className="navbar-right">
                    <Notifications notificationIndicator={notificationIndicator} />
                    <CurrentUser currentUser={currentUser} logout={logout}/>
                </div>
            </div>
        </nav>
    );
}