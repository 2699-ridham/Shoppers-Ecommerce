import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Checkout() {
    const state = useSelector((state) => state.AddDelItems);

    let amount = 0;
    const totalAmount = state.filter(item => {
        amount = amount + item.qty * item.price;
        return (
            amount
        )
    })

    return (
        <section className="p-4 p-md-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-5">
                    <div className="card rounded-3">
                        <div className="card-body p-4 mb-4">
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
                                    <div className="col-3 mb-4">
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
                <div className="col-md-4 float-end">
                    <div className="card mb-4">
                        <div className="card-header py-3 bg-primary text-white">
                            <h5 className="mb-0">Summary</h5>
                        </div>
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li
                                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                    Products (item)
                                    <span>{state.length}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                    Shipping
                                    <span>India</span>
                                </li>
                                <li
                                    className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total amount</strong>
                                        <strong>
                                            <p className="mb-0">(including VAT)</p>
                                        </strong>
                                    </div>
                                    <span><strong>Rs. {totalAmount.length === 0 ? 0 : Math.floor(amount)}</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <div className="card-header py-3 bg-primary text-white">
                            <h5 className="mb-0">Shipping Details</h5>
                        </div>
                        <div className="card-body">
                            <form className="mb-0">
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label">First name</label>
                                            <input type="text" className="form-control input-custom" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label">Last name</label>
                                            <input type="text" className="form-control input-custom" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control input-custom" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label">Zip</label>
                                            <input type="text"  className="form-control input-custom" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" >Address</label>
                                            <input type="text" className="form-control input-custom" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="typeEmail">Email</label>
                                            <input type="email" className="form-control input-custom" />
                                        </div>
                                    </div>
                                </div>

                                <div className="float-end ">

                                    <button type="submit" className="btn btn-primary btn-rounded"
                                    >Place order</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout
