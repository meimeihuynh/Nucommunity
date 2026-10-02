"use client";
import { useRouter } from "next/navigation";
import "./component.css";
import CharacterSelector from "./CharacterSelector";
import { useState } from "react";
import { MenuHamburgerIcon, MagnifyingGlassIcon, BellIcon, ArrowRightLeftIcon } from '@navikt/aksel-icons';



function PageHeader({ image, title, variant = "home", character}) {

  const [selectorOpen, setSelectorOpen] = useState(false);
  const router = useRouter();

  console.log("selectorOpen is:", selectorOpen);

  return (
    <header>
      <div className={`page-header page-header--${variant}`}>
        {image && <img src={image} alt={title} className="page-header-banner" />}
        <div className="white-transition"/>

       <img src="/assets/NuCarnivalLogo.png" className="NUlogo-main" alt="Nu: Carnival" onClick={() => router.push("  /")}/>

       <div className="icons-nav">
        <MenuHamburgerIcon className="menu-icon" fontSize="1.5rem" />

        <div className="right-icon-group">
          <MagnifyingGlassIcon   className="search-icon" fontSize="1.5rem" />
          <BellIcon  className="bell-icon" fontSize="1.5rem" />
        </div>
        
       </div>

      {variant === "character" && (
       <div className="character-profile">
         <img src={character.icon} alt={character.name} className="character-icon"/>
         <h2 className="iconname">{character.name}</h2>
         <button  className="switchbutton" onClick={() => setSelectorOpen(true)} >
            <ArrowRightLeftIcon title="switch character"/>
          </button>
       </div>
      )}

      {selectorOpen && (
        <CharacterSelector onClose={() => setSelectorOpen(false)} />
      )}
      </div>
    </header>
  );
}

export default PageHeader;