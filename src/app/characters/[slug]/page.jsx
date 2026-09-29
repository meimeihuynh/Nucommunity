import { characters } from "../../data/characters";
import PageHeader from "../../component/Header";

async function CharacterPage({ params }) {
    const { slug } = await params;
    const Character = characters[slug];

    return (
        <div>
            <PageHeader
                image={Character.banner}
                title={Character.name}
                variant="character"
                character={Character}
            />
        </div>

        
    );
}

export default CharacterPage
