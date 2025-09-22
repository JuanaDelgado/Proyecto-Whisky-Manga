'use client';

import React from 'react';
import Link from 'next/link';
import {FaTasks, FaWineBottle, FaClipboardList, FaBook} from 'react-icons/fa';
import {usePathname} from 'next/navigation'; //Hook para saber la ruta actual

//Arrays para los links de navegación
const Menu = () => {
    const navLinks = [
        {name: 'Dashboard', path: '/dashboard', icon: <FaTasks className="navIcon" />},
        {name: 'Whiskys', path: '/whisky', icon: <FaWineBottle className="navIcon" />},
        {name: 'Mangas', path: '/manga', icon: <FaBook className="navIcon" />},
        {name: 'Administración', path: '/admin', icon: <FaClipboardList className="navIcon" />},
    ];
    
  const pathname = usePathname();

  return (
    <div className="desktopNavLinks">
        {navLinks.map((link) => (
            <Link
            key={link.path}
            href={link.path}
            className={`navLink ${pathname === link.path ? 'activeLink' : 'inactiveLink'}`}
            >
                {/*Muestro el icono. Eje: Icono de la Manga*/}
                {link.icon}
                {/*Muestro el texto. Eje: Texto "Manga"*/}
                {link.name}
            </Link>
        ))}
    </div>
  );
};

export default Menu;