import { Character } from "./character";
import { King } from "./king";
import { Fighter } from "./fighter";
import { Squire } from "./squire";

export class Adviser extends Character {
    advised: King | Fighter | Squire;

    constructor(
        name: string,
        family: string,
        age: number,
        advised: King | Fighter | Squire
    ) {
        super(name, family, age);
        this.advised = advised;
        this.message = "No sé por qué, pero creo que voy a morir pronto.";
    }
}
