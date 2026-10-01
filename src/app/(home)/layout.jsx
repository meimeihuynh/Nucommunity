import PageHeader from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import { homeCategories } from "../data/homeategories";

function HomeLayout({ children }) {
  return (
    <div>
      <PageHeader title="Community" variant="home" />
      <CategoryMenu categories={homeCategories} />
      {children}
    </div>
  );
}

export default HomeLayout

