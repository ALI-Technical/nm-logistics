import React from 'react'
import { useState } from 'react'
import CountUp from 'react-countup'
import { FaBoxes } from 'react-icons/fa'
import { FiBox } from 'react-icons/fi'
import { IoEarth } from 'react-icons/io5'
import { RiCustomerService2Fill } from 'react-icons/ri'
import ScrollTrigger from 'react-scroll-trigger'
import './countUpSec.css'

const CountUpSec = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section className='countUpMainBox' >

                <div className="container counterBoxParent py-16 grid gap-x-10 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
                    <div className="counterBox">
                        <FiBox size={70} />
                        <div className="paraBox ml-3">
                            <h2>
                                {counterOn && <CountUp start={0} end={5500} />}+
                            </h2>
                            <p>Delivered Packages</p>
                        </div>
                    </div>
                    <div className="counterBox">
                        <IoEarth size={70} />
                        <div className="paraBox ml-3">
                            <h2>
                                {counterOn && <CountUp start={0} end={5500} />}+
                            </h2>
                            <p>Countries Covered</p>
                        </div>
                    </div>
                    <div className="counterBox">
                        <RiCustomerService2Fill size={70} />
                        <div className="paraBox ml-3">
                            <h2>
                                {counterOn && <CountUp start={0} end={5500} />}+
                            </h2>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                    <div className="counterBox">
                        <FaBoxes size={70} />
                        <div className="paraBox ml-3">
                            <h2>
                                {counterOn && <CountUp start={0} end={5500} />}+
                            </h2>
                            <p>Tons of Goods</p>
                        </div>
                    </div>
                </div>

                <div className="overlayDiv"></div>
            </section>
        </ScrollTrigger>
    )
}

export default CountUpSec
