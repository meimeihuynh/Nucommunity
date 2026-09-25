import "./component.css";
import { MenuHamburgerIcon, MagnifyingGlassIcon, BellIcon } from '@navikt/aksel-icons';




function Header() {
  return (
    <header>
      
      <div className="header">

       <img src="\assets\NuCarnivalLogo.png" className="NUlogo"/>

       <div className="icons-nav">
        <MenuHamburgerIcon className="menu-icon" fontSize="1.5rem" />

        <div className="right-icon-group">
          <MagnifyingGlassIcon   className="search-icon" fontSize="1.5rem" />
          <BellIcon  className="bell-icon" fontSize="1.5rem" />
        </div>
        
       </div>

      </div>
    </header>
  );
}

export default Header;