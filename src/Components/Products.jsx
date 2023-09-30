import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

function Products() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [copyData, setCopyData] = useState(data);

    useEffect(() => {
        const fetchproducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            const result = await response.json();
            setData(result);
            setCopyData(result);
            console.log(result);
            setLoading(false);
        }
        fetchproducts();
    }, [])

    const Loading = () => {
        return (
            <div className='row justify-content-center mt-5 fs-5'>
                <ClimbingBoxLoader />
            </div>
        )
    }

    const filterProducts = (cat) => {
        const selectedProducts = data.filter((item) =>
            cat === item.category
        )
        setCopyData(selectedProducts);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons mb-5">
                    <button className="btn btn-outline-dark me-2 mt-2" onClick={() => { setCopyData(data) }}>ALL</button>
                    <button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProducts("men's clothing")}>Men's Wear</button>
                    <button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProducts("women's clothing")}>Women's Wear</button>
                    <button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProducts("jewelery")}>Jewellery</button>
                    <button className="btn btn-outline-dark me-2 mt-2" onClick={() => filterProducts("electronics")}>Electronics</button>
                </div>
                {copyData.map((products) => {
                    return (
                        <div key={products.id} className="col-md-3 mb-4">
                            <div className="card h-100 text-center p-4 bg-info bg-opacity-25">
                                <img className="card-img-top rounded" src={products.image} alt={products.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{products.title.substring(0, 11)}...</h5>
                                    <p className="card-text fw-bold lead mt-2">Rs. {products.price}</p>
                                    <Link to={`/product/${products.id}`} className='btn btn-outline-danger fw-medium'>Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
    return (
        <div className='container my-4 py-4'>
            <div className="row">
                <div className="col-12 mb-4">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
                <div className="row text-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products
