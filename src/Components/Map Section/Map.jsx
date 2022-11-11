import React from 'react'
import { Container } from 'react-bootstrap'

const Map = () => {
  return (
    <Container className='mt-5'>
      <h1 className="text-3xl text-center underline decoration-objBackground-base mb-7 font-semibold text-gray-800 capitalize lg:text-4xl light:text-white">meet us here</h1>
        <iframe className="gmap_iframe my-3"
          style={{
          height: '500px',
          width: "100%"
          }}
          src="https://maps.google.com/maps?width=800&amp;height=450&amp;hl=en&amp;q=faizan e madina karachi&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

        </iframe>
    </Container>
  )
}

export default Map