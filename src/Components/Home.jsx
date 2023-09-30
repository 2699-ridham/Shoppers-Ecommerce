import React from 'react'
import bg from '../assests/bg.jpg'
import Products from './Products'

function Home() {
  return (
    <div className='home-background mt-1'>
      <div className="card bg-dark text-white border-0">
        <img className="card-img" src={bg} alt="background" height="600px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW ARRIVALS OF SEASONS</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Home
