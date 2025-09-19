import MangaList from "./components/MangaList";
import {mangas} from "../data/mocs";

export default function MangaPage () {
    return (
        <div className="container">
            <h1>Lista de Mangas</h1>
            <MangaList mangas={mangas} />
        </div>
    );
}