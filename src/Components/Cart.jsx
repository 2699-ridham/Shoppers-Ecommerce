import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AddItemToCart, DeleteItemFromCart, RemoveFromCart } from '../Redux/Actions/Actions'
import checkout from '../assests/checkout.jpeg';


function Cart() {
    const state = useSelector((state) => state.AddDelItems);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    // console.log(state);
    const handleAdd = (product) => {
        dispatch(AddItemToCart(product));
    }

    const handleSub = (product) => {
        dispatch(DeleteItemFromCart(product))
    }

    const handleRemove = (product) => {
        dispatch(RemoveFromCart(product))
    }
    let amount = 0;
    const totalAmount = state.filter(item => {
        amount = amount + item.qty * item.price;
        return (
            amount
        )
    })

    return (
        <section className="vh-80 mt-5">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p><span className="h2">Shopping Cart </span><span className="h5">({state.length} items in your cart)</span></p>
                        <p><span className='h6'>Total value of your cart: <strong>Rs. {totalAmount.length === 0 ? 0 : Math.floor(amount)}</strong> </span></p>
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
                                                    <div className="col-md-2 d-flex justify-content-center">
                                                        <button className='btn btn-outline-danger' onClick={() => handleRemove(product)}>
                                                            <i className='fa fa-trash fs-5'></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                        </div>
                        <div className='col-xs-1'>
                            <Link to="/products" type="button" className="btn btn-primary me-2">
                                <i className='fa fa-arrow-left'></i> Continue shopping
                            </Link>
                            <button className="btn btn-primary" onClick={() => { navigate('/payment-page') }}>
                                <img src={checkout} alt='checkout' height='22px' width='20px' className='me-2 rounded' />
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart
