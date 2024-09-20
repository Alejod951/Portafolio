import "./styles.css";
import logo from "./logo.png";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <nav className={`${isNavbarVisible ? "visible" : ""}`}>
        <img src={logo} className="logo"/>
        <div className="nav-items">
          <a href="Portafolio">Portfolio</a>
          <a href="Skills">Skills</a>
          <a href="#">About</a>
        </div>
      </nav>
      
    </>
  );
};