import Manga from "./Manga";
import "./manga.css";

export default function MangaList ({mangas}) {
    return(
        <div className="manga-list-container">
            <h2 className="manga-list-tittle">Nuestra Seleccion de Mangas</h2>
            <div className="manga-grid">
                {/*Muestro el array que me pasan x parámetro
                Por cada elemento del array instancio un Manga*/}
                {
                    mangas.map((manga) => (
                        <Manga key={manga.name} manga={manga} />
                    ))
                }
            </div>
        </div>
    );
}