import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddItemToCart, DeleteItemFromCart } from '../Redux/Actions/Actions'
import checkout from '../assests/checkout.jpeg';


function Cart() {
    const state = useSelector((state) => state.AddDelItems)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(state);
    const handleAdd = (product) => {
        dispatch(AddItemToCart(product));
    }

    const handleSub = (product) => {
        dispatch(DeleteItemFromCart(product))
    }

    let amount = 0;
    const totalAmount = state.map(item => {
        amount = amount + item.qty * item.price;
        return (
            amount
        )
    })

    const totalPrice = Math.floor(totalAmount[totalAmount.length - 1]);

    // console.log(totalAmount[totalAmount.length - 1]);
    return (
        <section className="vh-80 mt-5">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p><span className="h2">Shopping Cart </span><span className="h5">({state.length} items in your cart)</span></p>
                        <div className="col-sm-1 col-md-12 card mb-4">
                            {state.length === 0 ? <div className='text-center fs-4 fw-bold'>Your cart is Empty</div> :
                                state.map((product) => {
                                    return (
                                        <>
                                            <div key={product.id} className="card-body p-2">
                                                <div className="row align-items-center justify-content-around">
                                                    <div className="col-md-2">
                                                        <img src={product.image} className="img-fluid" alt="Genericplaceholderimage" height="60px" width="60px" />
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-0">Name</p>
                                                            <p className="lead fw-normal fs-6 mb-0">{product.title}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-0 pb-2">Quantity</p>
                                                            <div className="d-flex flex-row">
                                                                <button className='btn btn-outline-dark btn-sm' onClick={() => handleSub(product)}>
                                                                    <i className='fa fa-minus'></i>
                                                                </button>
                                                                <p className="lead fw-normal ms-2 me-2">{product.qty}</p>
                                                                <button className='btn btn-outline-dark btn-sm' onClick={() => handleAdd(product)}>
                                                                    <i className='fa fa-plus'></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-0 pb-2">Price</p>
                                                            <p className="lead fw-normal mb-0">{product.price}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <div>
                                                            <p className="small text-muted mb-0 pb-2">Total</p>
                                                            <p className="lead fw-normal mb-0">{product.qty > 1 ? product.qty * product.price : product.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
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
                                            <span><strong>Rs. {totalAmount.length === 0 ? 0 : totalPrice}</strong></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button className="btn btn-primary" onClick={() => {navigate('/payment-page') }}>
                                <img src={checkout} alt='checkout' height='30px' width='30px' className='me-2 rounded' />
                                Proceed to checkout
                            </button>
                        </div>
                        <div className='col-xs-1'>
                            <Link to="/products" type="button" className="btn btn-primary me-2">
                                <i className='fa fa-arrow-left'></i> Continue shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
