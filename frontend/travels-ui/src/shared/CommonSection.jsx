import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="text-[2.5rem] text-white font-medium">{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

CommonSection.propTypes = {
  title: PropTypes.string,
};

export default CommonSection;
