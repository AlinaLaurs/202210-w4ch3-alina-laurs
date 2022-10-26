export interface ICharacter {
    // Aquí definimos modelo de datos
    name: string;
    family: string;
    age: number;
    isAlive: boolean;
    message: string;
}

export interface IFullCharacter {
    // Defino los tipos
    name: string;
    family: string;
    age: number;
    isAlive: boolean;
    message: string;
    death: () => void;
}

export interface IMethodsCharacter {
    death: () => void;
    communicate: () => string;
}

export class Character implements ICharacter, IMethodsCharacter {
    //name: string;
    //family: string;
    //age: number;

    lifeStatus: boolean;
    message: string;

    static show = 'GoT';
    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;

        this.lifeStatus = true;
        this.message = '';
    }

    communicate() {
        return this.message;
    }

    death() {
        this.lifeStatus = false;
    }
}
