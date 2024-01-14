import React,{ useCallback } from 'react';
import './style.css';
 
import HomeLeft from './Home_Left.js';
import HomeRight from './Home_Right.js';
import Footer from '../Footer/Footer.js';
 
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-tsparticles';
import particles from '../Const/particle.js';
import ReactGa from 'react-ga';
import { loadFull } from "tsparticles"
import {Helmet} from 'react-helmet';
// import { loadSlim } from "tsparticles-slim";
// import type { Container, Engine } from "tsparticles-engine";

//--Motasim Foads Portfolio website Google analytics--
//--Replace with your own key !!
// function Analytics(){
//   ReactGa.initialize("UA-154721739-1")
//   ReactGa.pageview('motasimfoad.com - Home Screen')
// }

//--Motasim Foads Portfolio website Google analytics--

const Index = ()=> {
  // Analytics()
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
    // await loadSlim(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home</title>
                  <link rel="canonical" href="http://motasimfoad.com/home" />
                  <meta name="description" content="NitianBit !!" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
          
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particles}
            />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
            <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
            </Row>
            <Row className="App-footer">
            <Footer/>
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Index;
