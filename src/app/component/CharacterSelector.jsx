import { characters } from "../../data/characters";

function CharacterSelector() {

    return(

        <div className="selector-box">
            <div className="character-select">
               { Object.values(characters).map((character)=> (
                <button key={character.name} className="characterselector-icon">
                <img src={character.icon} alt={character.name} />
                <span>{character.name}</span>
                </button>
                )) }
            </div>
        </div>
        

    );


}

export default CharacterSelector