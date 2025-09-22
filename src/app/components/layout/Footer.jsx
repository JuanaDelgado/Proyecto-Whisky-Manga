export default function Footer() {
    //Obtengo el año actual
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
        {/*Muestro el año actual*/}
        <p>{currentYear} Todos los derechos reservados.</p>
        </footer>
    );
}