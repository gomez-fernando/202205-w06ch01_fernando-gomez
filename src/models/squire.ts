import { Character, iCharacter } from "./character";
import { Knight } from "./knight";

class Squire extends Character implements iCharacter{

    constructor(
        name: string,
        family: string,
        age: number,
        public submission: number,
        public lord: Knight
    ){
        super(name, family, age, 'squire');
        this.message = 'Soy un looser';
    }
}

export { Squire };