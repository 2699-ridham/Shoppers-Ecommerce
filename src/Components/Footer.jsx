import React from 'react'

function Footer() {
    return (
        <div className="container my-4">

            <footer className="bg-light text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <button className="btn btn-primary btn-md me-3">
                            <i className="fa fa-facebook-official"></i>
                        </button>
                        <button className="btn btn-danger btn-md me-3">
                            <i className="fa fa-google"></i>
                        </button>


                        <button className="btn btn-primary btn-md me-3">
                            <i className="fa fa-twitter"></i>
                        </button>


                        <button className="btn btn-dark btn-md me-3">
                            <i className="fa fa-github"></i>
                        </button>


                        <button className="btn btn-primary btn-md me-3">
                            <i className="fa fa-linkedin"></i>
                        </button>

                        <button className="btn btn-danger btn-md me-3">
                            <i className="fa fa-instagram"></i>
                        </button>
                    </section>

                </div>

                <div className="text-black p-3">
                    © 2023 Copyright: <a className="text-black text-decoration-none" href="#!">SHOPPERS.com</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer
