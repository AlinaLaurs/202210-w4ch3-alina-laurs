import { characters } from "../data/characters";
import { Card } from "./card";

export function List() {
    return (
        <ul className="characters-list">
            {characters.map((item) => (
                <Card character={item}></Card>
            ))}
        </ul>
    );
}
