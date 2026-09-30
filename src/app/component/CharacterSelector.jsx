import { characters } from "../data/characters";
import "./component.css";

function CharacterSelector({ onClose }) {

    return(

        <div className="selector-box">
            <div className="character-select">
                <button onClick={onClose}>Close</button>
               { Object.values(characters).map((character)=> (
                <button key={character.name}>
                <img src={character.icon} alt={character.name} className="characterselector-icon" />
                <span>{character.name}</span>
                </button>
                )) }
            </div>
            
        </div>        

    );


}

export default CharacterSelector;