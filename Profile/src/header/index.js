import React, { useState, useEffect } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import { setLanguage } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const dispatch = useDispatch()
  const idioma = useSelector(state => state.idioma)

  useEffect(() => {
  }, [idioma]);

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };
  const handleClickESP = () => {
    dispatch(setLanguage("ESP"))
  }
  const handleClickENG = () => {
    dispatch(setLanguage("ENG"))
  }
  return (
    <>
      <header className="fixed-top site__header">
        <button className="btn_idioma" onClick={handleClickESP}>ESP</button>
        <button className="btn_idioma"  onClick={handleClickENG}>ENG</button>
        <div className="d-flex align-items-center justify-content-between">
        
          <Link  className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          
          <div className="d-flex align-items-center">
          
          <Themetoggle />
          
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">{idioma === "ENG" ? "Home" : "Inicio"}</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">{idioma === "ENG" ? "About" : "Acerca"}</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> {idioma === "ENG" ? "Contact" : "Contacto"}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a>
            <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">Github</a>
            {/* <a href={socialprofils.twitter}>Twitter</a> */}
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;