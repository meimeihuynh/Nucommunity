import "./component.css";

function CategoryMenu({ categories }) {

    return(
        <nav className="category-nav">   
            {categories.map((category) =>  (
                <button key={category.id} className="category-tab"> {category.label}</button>
            ))}
        </nav>

    );
}

export default CategoryMenu
