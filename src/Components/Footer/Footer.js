import React from 'react';
import './style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © 2023-{(new Date().getFullYear())} <strong>NITIANBIT</strong>,  <small>V1.0</small>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
