import styles from './navBar.css';

export default function NavBar(){
    return (
        <nav className="navbar">
        <a href="/">Home</a>
        <a href="/mangas">Mangas</a>
        <a href="/whiskys">Whiskys</a>
        </nav>
    );
}