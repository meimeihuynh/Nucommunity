import "./component.css";
import { MenuHamburgerIcon, MagnifyingGlassIcon, BellIcon, ArrowRightLeftIcon } from '@navikt/aksel-icons';




function PageHeader({ image, title, variant = "home", character}) {
  return (
    <header>
      <div className={`page-header page-header--${variant}`}>
        <img src={image} alt={title} className="page-header-banner" />
        <div className="white-transition"/>

       <img src="/assets/NuCarnivalLogo.png" className="NUlogo-main"/>

       <div className="icons-nav">
        <MenuHamburgerIcon className="menu-icon" fontSize="1.5rem" />

        <div className="right-icon-group">
          <MagnifyingGlassIcon   className="search-icon" fontSize="1.5rem" />
          <BellIcon  className="bell-icon" fontSize="1.5rem" />
        </div>
        
       </div>

      {variant === "character" && (
       <div className="character-icon">
         <img src={character.icon} alt={character.name}/>
         <h2 className="iconname">{character.name}</h2>
         <button className="switchbutton">
            <ArrowRightLeftIcon title="a11y-title" fontSize="1.5rem" />
          </button>
       </div>
      )}
      </div>
    </header>
  );
}

export default PageHeader;