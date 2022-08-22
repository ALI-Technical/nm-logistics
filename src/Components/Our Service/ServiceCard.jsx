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
        <h1 className='Headings'>Our Services</h1>
      </Container>
        {cards.map((item, ind) => (
          <section
          className={`${styles.topBox} bg-gray-900 flex justify-center items-center gap-x-16 text-white`}
        >
          <div
            className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective"
          >
            <div
              className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
            >
              <div className="absolute backface-hidden border-2 w-full h-full">
              <img src={`/images/${item.Pic}`} className="w-full h-full" />
              </div>
              <div
                className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden"
              >
                <div
                style={{backgroundColor: 'var(--object-background)'}}
                  className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
                >
                  <h1 className={`${styles.cardHeading} text-3xl font-semibold`}>{item.name}</h1>
                  <br />
                  <p className='font-serif'>
                    {item.desc}
                  </p>
                  <button
                    className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                  >
                    <Link
                    style={{
                      textDecoration:"none",
                      color:"#fff"
                  }}
                     to={`service_detail/${item.id}`}>Go To Details</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        ))}
    </Container>
  )
}

export default ServiceCard
