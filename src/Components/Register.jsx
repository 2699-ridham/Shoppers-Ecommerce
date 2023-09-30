import React from 'react'

function Register() {
    return (
        <section className="vh-80" background-color="#eee;">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-10">
                        <div className="text-black" border-radius="25px">
                            <div className="card-body">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5">
                                        <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>
                                        <form className="mx-1 mx-md-4">
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fa fa-user fa-lg mt-4 me-3" aria-hidden="true"></i>
                                                <div className="form-outline flex-fill">
                                                    <label className="form-label">Your Name</label>
                                                    <input type="text" id="form3Example1c" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fa fa-envelope fa-lg mt-4 me-2"></i>
                                                <div className="form-outline flex-fill mb-0" >
                                                    <label className="form-label" >Your Email</label>
                                                    <input type="email" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fa fa-lock fa-lg mt-4 me-3"></i>
                                                <div className="form-outline flex-fill">
                                                    <label className="form-label" >Password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fa fa-key fa-lg mt-4 me-2"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label">Repeat your password</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" />
                                                <label className="form-check-label" for="form2Example3">
                                                    I agree all statements in <a href="#!">Terms of service</a>
                                                </label>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                            </div>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sampleimage" />
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

export default Register
