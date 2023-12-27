import React from 'react';
import './hl_style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
           I am <strong>Lakshay</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="Project Engineer || Software Engineer ... " //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/about" style={{ textDecoration: 'none', color: 'black' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><a style={{ textDecoration: 'none', color: 'black' }} href="https://blog.motasimfoad.com/" target="_blank" className="home-left-aboutme">Blog</a></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'black' }} to="/contact" className="home-left-aboutme">Contact Me</Link></Button> 
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
