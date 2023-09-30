import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <section className="vh-80">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="img-fluid" alt="Phoneimage" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form>

                            <div className="form-outline mb-4">
                                <label className="form-label fw-bold fs-5" htmlFor='email'>Email address</label>
                                <input type="email" className="form-control form-control-lg" />
                            </div>


                            <div className="form-outline mb-4">
                                <label className="form-label fw-bold fs-5">Password</label>
                                <input type="password" className="form-control form-control-lg" />
                            </div>

                            <div className="d-flex justify-content-around align-items-center mb-4">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label"> Remember me </label>
                                </div>
                                <a href="#!">Forgot password?</a>
                            </div>


                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                            </div>

                            <button className="btn btn-outline-primary btn-md me-3" background-color='#3b5998'>
                                <i className="fa fa-facebook-official"></i> Continue with Facebook
                            </button>
                            <button className="btn btn-outline-danger btn-ms" background-color='#55acee'>
                                <i className="fa fa-google"></i> Continue with Google
                            </button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                <Link to="/register" className="link-danger text-decoration-none"> Register</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
