import React from 'react'

function ContactUs() {
    return (
        <section className="container col-12 col-lg-7 mb-4">
            <h2 className="fw-bold text-center my-4 fs-1">CONTACT US</h2>
            <p className="text-center mx-auto mb-5 fs-5 text-secondary">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

            <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="name" className="">Your name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <label htmlFor="email" className="">Your email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <label htmlFor="subject" className="">Subject</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-12">
                                <div className="md-form">
                                    <label htmlFor="message">Your message</label>
                                    <textarea type="text" className="form-control md-textarea"></textarea>
                                </div>

                            </div>
                        </div>
                    </form>
                    <div className="text-md-left">
                        <button className="btn btn-primary">Send</button>
                    </div>
                    <div className="status"></div>
                </div>
            </div>
        </section>

    )
}

export default ContactUs
