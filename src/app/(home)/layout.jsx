import PageHeader from "../component/Header";
import CategoryMenu from "../component/Categorymenu";
import { homeCategories } from "../data/homecategories";
import Footer from "../component/Footer";

function HomeLayout({ children }) {
  return (
    <div>
      <PageHeader title="Community" variant="home" />
      <CategoryMenu categories={homeCategories} />
      {children}

    </div>
  );
}

export default HomeLayout;

