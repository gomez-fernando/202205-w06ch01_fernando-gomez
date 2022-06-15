import { configureStore } from "@reduxjs/toolkit";
import { anyCharacter, Character } from "../models/character";
import { characterReducer } from "../reducers/characters/character.reducer";

export interface iState{
    characters: anyCharacter[];
    speaker: anyCharacter;
}

const preloadedState = {
    characters: [] as anyCharacter[],
    speaker: { ...new Character('', '', 0, 'king')}
}

export const store = configureStore({
    reducer: {
        characters: characterReducer
    },
    preloadedState
})