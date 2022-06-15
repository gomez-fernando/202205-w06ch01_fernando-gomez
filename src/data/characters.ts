import { Character } from "../models/character";
import { Counselor } from "../models/counselor";
import { King } from "../models/king";
import { Knight } from "../models/knight";
import { Squire } from "../models/squire";

export async function createCharacters(){
    const data: Character[] = [
        {...new King('Joffrey', 'Baratheon', 33, 2)},
        {...new Knight('Jaime', 'Lannister', 33, 'espada', 8)},
        {...new Knight('Daenerys', 'Targaryen', 33, 'dragones', 9)},
    ];

    data.push({ ...new Counselor('Tyrion', 'Lannister', 33, data[2])});
    data.push({ ...new Squire('Bronn', 'Aguas negras', 33, 5, data[1] as Knight)});

    return data;
}