import "./component.css";
import Link from "next/link";

function CategoryMenu({ categories }) {

    return(
        <nav className="category-nav">   
            {categories.map((category) =>  (
                <Link key={category.id} href={`/${category.id}`} className="category-tab"> {category.label}
                </Link>
            ))}
        </nav>

    );
}

export default CategoryMenu
