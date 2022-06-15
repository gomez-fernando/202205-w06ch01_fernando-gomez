import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCharacters } from '../data/characters';
import { iState } from '../store/store';
import home from './home.module.css';
import * as ac from '../reducers/characters/action.creators'




function HomePage(){
    const characters = useSelector((state: iState) => state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        createCharacters().then(characters => {
            dispatch(ac.loadCharactersAction)
        })
    })
 
    return (
        <main className={home.main}>
            <div className="app container">
                <h2>game of Trones - Home Page</h2>
                <ul className="characters-list row list-unstyled">
                    {

                    }
                </ul>
            </div>
        </main>
    )
}

export { HomePage };