import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UnserServiceData } from "./common/Helper";
const UnserService = () => {
  return (
    <>
      <section className="bg-black py-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h4 className="ff_Oswald fw-bold fs_4xl text-uppercase text-white text-center mb-3">
                Unser Service-Plus:
                <span className="clr_light_pink">
                
                  Mehr Leistung, mehr Wert
                </span>
              </h4>
              <p className="ff_poppins fs_sm fw-normal text-center text-white px-lg-5 mb-0">
                Erweitern Sie Ihren Horizont mit unseren vielseitigen
                Dienstleistungen, die über die digitale Präsenz hinausgehen und
                ganzheitlichen Erfolg anstreben
              </p>
            </Col>
          </Row>
          {UnserServiceData.map((data, index) => {
            return (
              <Row
                className={`align-items-center justify-content-lg-between position-relative z-1 justify-content-center py-md-5 my-lg-1 py-4 ${data.reverse}`}
                key={index}
              >
                <Col md={9} lg={6}>
                  <div className="pe-xl-5">
                    <h6 className="ff_Oswald fw-medium fs_3xl text-capitalize text-white pb-2 pb-lg-1">
                      {data.heading}
                    </h6>
                    <p className="ff_poppins fw-normal fs_sm text-white opacity_07">
                      {data.para}
                    </p>
                  </div>
                </Col>
                <Col md={9} lg={5} className="px-lg-0 mt-2 mt-lg-0">
                  <div className="position-relative">
                    <img
                      src={data.imgellipse}
                      alt="ellipse"
                      className={`position-absolute ${data.setellipse}`}
                    />
                    <img
                      src={data.imges}
                      alt="strategische"
                      className="w-100 rounded-1"
                    />
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </section>
    </>
  );
};

export default UnserService;
