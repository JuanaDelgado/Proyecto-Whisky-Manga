export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer">
        <p>{currentYear}</p>
        </footer>
    );
}