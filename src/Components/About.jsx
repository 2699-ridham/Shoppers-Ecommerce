import React from 'react'
import about from '../assests/about.jpeg';
function About() {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={about} alt="" width='300px'/>
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">Who Are We?</h2>
                <p className="lead fs-4 text-secondary mb-3">We help people to find incredible brands and superior products. Our perspective is to furnish outstanding captivating services.</p>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione harum, accusantium dolore reiciendis quae quasi optio maiores? Molestias exercitationem accusamus explicabo harum excepturi facere, perferendis fuga quisquam sapiente veritatis?</p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <i className='fa fa-cog fa-2x'></i>
                      </div>
                      <div>
                        <h4 className="mb-3">Versatile Brand</h4>
                        <p className="text-secondary mb-0">We are crafting a digital method that subsists life across all mediums.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <i className='fa fa-fire fa-2x'></i>
                      </div>
                      <div>
                        <h4 className="mb-3">Digital Agency</h4>
                        <p className="text-secondary mb-0">We believe in innovation by merging primary with elaborate ideas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
