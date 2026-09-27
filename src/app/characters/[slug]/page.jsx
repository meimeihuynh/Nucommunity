import { characters } from "@/app/data/characters";
import PageHeader from "@/app/component/Header";

function CharacterPage({ params }) {
    const selectedCharacter = characters[params.slug];

    return (
        <div>
            <PageHeader
                image={selectedCharacter.banner}
                title={selectedCharacter.name}
                variant="character"
                character={selectedCharacter}
            />
        </div>
    );
}
