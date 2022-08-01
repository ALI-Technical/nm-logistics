import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import about_img from '../Img/about_img.jpg';
import Map from './Map Section/Map';
import styles from "../Components/About Section/about.module.css";

const Contact = () => {
  return (
    <div>
       <Container fluid>
      <Row>
        <Col md={12} xs={12}>
          <img src={about_img} width='100%' height={400} />
        </Col>
      </Row>
      <Row>
        <Col className='mx-auto' md={6} xs={12}>
          <h1 className='text-center mt-5'>Contact Us</h1>
        <hr  className='mb-5 w-25 mx-auto' />
        </Col>
        <Col className='mx-auto' md={8} xs={12}>
        <Map />
        </Col>
      </Row>
      <div className='container-fluid mt-5' >
      <div className={styles.aboutSection}>
        <div className={styles.opacityBg}>
          <div className={styles.details}>
            <form>
              <input placeholder='Name' /><br />
              <input placeholder='email' /><br />
              <input placeholder='Subject' /><br />
              <input placeholder='Message' /><br />
            </form>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </div>
  )
}

export default Contact
