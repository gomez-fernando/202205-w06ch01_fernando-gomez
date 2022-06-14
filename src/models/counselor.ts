import { Character, iCharacter } from "./character";

class Counselor extends Character implements iCharacter{
    constructor(
        name: string,
        familiy: string,
        age: number,
        public chief: Character,
    ){
        super(name, familiy, age, 'counselor');
        this.message = 'No sé por qué, pero creo que vy a morir pronto';
    }
}

export { Counselor }