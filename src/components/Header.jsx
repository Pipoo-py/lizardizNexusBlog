import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useStore } from '@nanostores/react';
import { theme, setTheme, toggleTheme } from '../stores/themeStore';
import '../styles/Header.css'; 
import miniLogoLight from '../assets/logoSmall.webp'; 
import miniLogoDark from '../assets/logoSmallDark.webp';

export const Header = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const currentTheme = useStore(theme);

  const openMobileNav = () => {
    const navSectionsContainer = document.querySelector(".nav__sections-container");
      if(mobileIsOpen){
        setMobileIsOpen(false);
        setIsClosing(true);
        setTimeout(()=>{
        if (navSectionsContainer) {
          navSectionsContainer.style.display = "none";
        }
      }, 300);
    }
    else{
    
    if (navSectionsContainer) {
        navSectionsContainer.style.display = "block";
      }
    setIsClosing(false);
    setMobileIsOpen(true);
  }
}

  useEffect(() => {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = !storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialClientTheme = storedTheme ?? (prefersDark ? 'dark' : 'light');
      if (initialClientTheme !== theme.get()) {
          setTheme(initialClientTheme); 
      }
    }, []); 

  return (
  <header>
    <nav className={`nav ${currentTheme}`}>
      <div className="nav__container">
        <div className="nav__logo-container">
          <img 
            src={currentTheme === "light" ? miniLogoLight.src : miniLogoDark.src}
            alt="Logo de Lizardiz Nexus en versión miniatura"
          />
          
        </div>
          <div 
            className={`nav__sections-container ${mobileIsOpen ? "isOpen" : ""} ${isClosing ? "isClosing" : ""}`}
          >
            <ul className="nav__sections-ul">
              <li className="nav__ul-li"> <a href="/" onClick={openMobileNav}>Inicio</a> </li>
              <li className="nav__ul-li"> <a href="/blog/" onClick={openMobileNav}>Artículos</a> </li>
              <li className="nav__ul-li"> <a href="/tags/" onClick={openMobileNav}>Categorías</a> </li>
              <li className="nav__ul-li"> <a href="/about/" onClick={openMobileNav}>Sobre mi</a> </li>
              <li className="nav__ul-li"> <a href="https://lizardiznexus.netlify.app/" target="blank" onClick={openMobileNav}>Portafolio</a> </li>
              <li className="nav__ul-li li-theme" onClick={toggleTheme}>
                {currentTheme === "light" ? <Moon /> : <Sun />}
              </li>
            </ul>
          </div>

        <button className="nav__button-mobile" onClick={openMobileNav} aria-label="Boton menú">
          {mobileIsOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  </header>
  );
};
