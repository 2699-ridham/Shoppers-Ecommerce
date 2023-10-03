import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { useDispatch } from 'react-redux';
import { AddItemToCart } from '../Redux/Actions/Actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SingleProductPage() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(AddItemToCart(product));
        toast.success('Item Added Successfully', {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    useEffect(() => {
        const fetchproducts = async () => {
            setLoading(true)
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const result = await response.json();
            setData(result);
            setLoading(false);
        }
        fetchproducts();
    }, [id])

    // console.log(id);
    console.log(data);
    const Loading = () => {
        return (
            <div className='row justify-content-center mt-5 fs-5'>
                <ClimbingBoxLoader />
            </div>
        )
    }

    const ShowDetailedProduct = () => {
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                />
                <Link to="/products">
                    <button className='btn btn-outline-dark fs-3'>
                        <i className='fa fa-arrow-circle-o-left'></i>
                    </button>
                </Link>
                <div className="col-md-6">
                    <img src={data.image} alt={data.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{data.category}</h4>
                    <h1 className='display-6 text-danger-emphasis fw-bolder'>{data.title}</h1>
                    <p className='lead'>
                        Rating {data.rating && data.rating.rate}
                        <i className='fa fa-star text-warning'></i>
                    </p>
                    <p className="display-6 fw-bold my-4">Rs. {data.price}</p>
                    <p className=' lead fs-5'>{data.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2 fw-bold mb-2" onClick={() => addProduct(data)}>
                        Add to Cart
                    </button>
                    <Link to="/cart" className='btn btn-outline-primary ms-2 px-3 py-2 fw-bold mb-2'>Go To Cart</Link>
                </div>
            </>
        )
    }
    return (
        <div className='container py-5'>
            <div className="row py-4">
                {loading ? <Loading /> : <ShowDetailedProduct />}
            </div>

        </div>
    )
}

export default SingleProductPage
