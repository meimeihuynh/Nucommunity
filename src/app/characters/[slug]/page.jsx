import { characters, categories } from "../../data/characters";
import CategoryMenu from "../../component/Categorymenu";
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

            <CategoryMenu categories={Character.categories}/>
        </div>

        
    );
}

export default CharacterPage
