import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import styles from './ourService.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Btn1 } from '../../Widgets/Buttons/Buttons'
import HomeServiceCard from '../../Widgets/Cards/Cards'



const ServiceCard = () => {


  const { cards } = useSelector(state => state.cardsReducer);

  const filterdCard = cards.slice(0, 3)

  return (
    <>
      <section className="bg-white light:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl light:text-white">explore our <br /> awesome <span className="underline decoration-objBackground-base">Services</span></h1>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {filterdCard.map((item, ind) => {

              return (
                <HomeServiceCard
                  item={item}
                  key={ind}
                />
              )

            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceCard
