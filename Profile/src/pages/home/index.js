import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import foto from "../../assets/forPortfolio.png"

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
            <img className="h_bg-image order-1 order-lg-2 h-100 " src={foto} alt="Imagen de fondo" />
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  
                </div>
                <div className="columns-container">
  <div className="column">
    <h3>FRONT</h3>
    <hr/>
    <p>React + JS</p>
  </div>
  <div className="column">
    <br/>
    <h3>+</h3>
  </div>
  <div className="column">
    <h3>BACK</h3>
    <hr/>
    <p>Node + Express</p>
  </div>
  <div className="column">
    <br/>
    <h3>=</h3>
  </div>
  <div className="column">
    <h3>FULL STACK</h3>
    <hr/>
    <p>Web SPA</p>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
