import { characters } from "../data/characters";
import { Card } from "./card";

export function List() {
    return (
        <ul className="characters-list">
            {characters.map((item, index) => (
                <Card character={item} key={index}></Card>
            ))}
        </ul>
    );
}
