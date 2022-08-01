import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import styles from './ourService.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const ServiceCard = () => {


  const { cards } = useSelector(state => state.cardsReducer);

  return (
    <Container className={[styles.OurService]}>
      <Container className={styles.heading}>
        <h1>Our <span className={styles.span}>Services</span> </h1>
      </Container>
      <Row>
        {cards.map((item, ind) => (
          <Col md={4} key={ind}>
            {/* <Link to={`service_detail/${item.id}`}> */}
              <div class="card">
                <div class="image">
                  <img src={`/images/${item.Pic}`} />
                </div>
                <div class="details">
                  <div class="center">
                    <h1>{item.name}</h1>
                    <p>{item.desc}</p>
                    <Link to={`service_detail/${item.id}`}>go to detail</Link>
                  </div>
                </div>
              </div>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ServiceCard
