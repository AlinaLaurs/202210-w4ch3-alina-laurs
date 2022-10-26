import { Character } from './character';
import { Fighter } from './fighter';

export class Squire extends Character {
    master: Fighter | null;
    ballingGrade: number;

    constructor(
        name: string,
        family: string,
        age: number,
        master: Fighter | null,
        ballingGrade: number
    ) {
        super(name, family, age);
        this.master = master;
        this.ballingGrade = ballingGrade;
        this.message = 'Soy un loser.';
    }
}
