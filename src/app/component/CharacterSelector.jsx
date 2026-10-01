import { characters } from "../data/characters";
import "./component.css";

import { useRouter } from "next/navigation";

function CharacterSelector({ onClose }) {

    const router = useRouter();

    return(

        <div className="selector-box">
            <div className="character-select">
                <button onClick={onClose}>Close</button>
                { Object.entries(characters).map(([slug, character])=> (
                    <button key={slug}
                    className="characterselector-icon"
                    onClick={() => {router.push(`/characters/${slug}`);
                    onClose();
                 }}
                 >
                
                <img src={character.icon} alt={character.name} />
                <span>{character.name}</span>
                </button>
                )) }
            </div>
            
        </div>        
    );


}

export default CharacterSelector;