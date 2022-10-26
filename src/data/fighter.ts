import { Character } from './character';

export class Fighter extends Character {
    weapon: string;
    skill: number;

    constructor(
        name: string,
        family: string,
        age: number,
        weapon: string,
        skill: number
    ) {
        super(name, family, age);
        this.weapon = weapon;
        this.skill = skill;
        this.message = 'Primero pego y luego pregunto.';
    }
}
