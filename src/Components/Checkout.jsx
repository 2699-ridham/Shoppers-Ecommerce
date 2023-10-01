import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <section className="p-4 p-md-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-5">
                    <div className="card rounded-3">
                        <div className="card-body p-4">
                            <div className="text-center mb-3">
                                <h2>Payment</h2>
                            </div>
                            <form action="">
                                <p className="fw-bold mb-3 pb-2">Enter Card Details:</p>

                                <div className="d-flex flex-row align-items-center mb-3 pb-1 ms-3">
                                    <img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='' />
                                    <div className="flex-fill mx-3">
                                        <div className="form-outline">
                                            <label className="form-label">Card Number</label>
                                            <input type="text" className="form-control form-control-lg w-75"
                                                placeholder='---- ---- ---- ----' />
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4 pb-1 ms-3">
                                    <img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" alt='' />
                                    <div className="flex-fill mx-3">
                                        <div className="form-outline">
                                            <label className="form-label">Card Number</label>
                                            <input type="text" className="form-control form-control-lg w-75"
                                                placeholder='---- ---- ---- ----' />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label">Cardholder's Name</label>
                                    <input type="text" className="form-control form-control-lg" />
                                </div>

                                <div className="row mb-4">
                                    <div className="col-4">
                                        <div className="form-outline">
                                            <label className="form-label">Expire</label>
                                            <input type="password" className="form-control"
                                                placeholder="MM/YYYY" />
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="form-outline">
                                            <label className="form-label">Cvv</label>
                                            <input type="password" className="form-control"
                                                placeholder="Cvv" />
                                        </div>
                                    </div>
                                </div>

                                <button type='submit' className="btn btn-success me-3 mb-2">Make Payment</button>
                                <Link to="/cart">
                                    <button type='submit' className="btn btn-secondary mb-2">Review Your Cart</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
