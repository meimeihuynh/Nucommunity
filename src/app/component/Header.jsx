import "./component.css";
import { MenuHamburgerIcon, MagnifyingGlassIcon, BellIcon, ArrowRightLeftIcon } from '@navikt/aksel-icons';



function PageHeader({ image, title, variant = "home", character}) {
  return (
    <header>
      <div className={`page-header page-header--${variant}`}>
        {image && <img src={image} alt={title} className="page-header-banner" />}
        <div className="white-transition"/>

       <img src="/assets/NuCarnivalLogo.png" className="NUlogo-main" alt="Nu: Carnival"/>

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
            <ArrowRightLeftIcon/>
          </button>
       </div>
      )}
      </div>
    </header>
  );
}

export default PageHeader;