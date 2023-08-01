import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";
import {
  dataabout_es,
  meta_es,
  worktimeline_es,
  skills_es,
  services_es,
} from "../../content_option_es";
export const About = () => {
  const idioma = useSelector(state => state.idioma)

  useEffect(() => {
  }, [idioma]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {idioma === "ENG" ? meta.title : meta_es.title_es}</title>
          <meta name="description" content={idioma === "ENG" ? meta.description : meta_es.description_es} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">{idioma === "ENG" ? "About me" : "Acerca de"}</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{idioma === "ENG" ? dataabout.title : dataabout_es.title_es }</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{idioma === "ENG" ? dataabout.aboutme : dataabout_es.aboutme_es}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{idioma === "ENG" ? "Work Timeline" : "Trabajos realizados"}</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {idioma === "ENG"
                  ? worktimeline.map((data, i) => (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    ))
                  : worktimeline_es.map((data, i) => (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle_es}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    ))}
              </tbody>

            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{idioma === "ENG" ? "Skills" : "Habilidades Técnicas"}</h3>
          </Col>
          <Col lg="7">
            {idioma === "ENG" ? skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            }) : skills_es.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name_es}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value_es}%`,
                      }}
                    >
                      <div className="progress-value">{data.value_es}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">{idioma === "ENG" ? "Services" : "Servicios"}</h3>
          </Col>
          <Col lg="7">
            {idioma === "ENG" ? services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            }):services_es.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title_es}</h5>
                  <p className="service_desc">{data.description_es}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
