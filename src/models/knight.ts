import { Character, iCharacter } from "./character";

class Knight extends Character implements iCharacter{

    constructor(
        name: string,
        family: string,
        age: number,
        public weapon: string,
        public skill: number,
    ){
        super(name, family, age, 'knight');
        this.message = 'Primero pego y luego pregunto';
    }
}

export { Knight };