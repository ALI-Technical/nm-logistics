import React from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import ship from '../Img/Ship.jpg';
import warehouse from '../Img/Warehouse.jpg';
import byroad from '../Img/By-road.jpg';
import slider from '../Img/slider.gif'
import './style.css'
const Slider = () => {
  return (
    <Container fluid className='mt-3 hero-section'>
      <Row className='my-2'>
        <Col md={12} className='big-col'>
          <Image src={slider} fluid  className='small-img'/></Col>
      </Row>
      {/* <Row>
        <Col md={6} sm={6} xs={6} className='small-col'>
          <Image src={slider} fluid className='small-img' />
        </Col>
        <Col md={6} sm={6} xs={6} className='small-col'>
          <Image src={warehouse} fluid className='small-img' />
        </Col>
      </Row> */}
      
       {/* <img src={slider} alt="" /> */}
    </Container>


  )
}

export default Slider
