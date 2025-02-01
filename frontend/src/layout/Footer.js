import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

 const Footer = () => {
    return (
        <footer className="bg-light border-top py-4">
            <div className="container">
                <div className="mb-5">
                    <div className="d-flex align-items-center justify-content-center bg-white"
                        style={{
                            height: "64px",
                            width: "256px",
                        }}
                    > LOGO HERE</div>
                </div>

                <div className="row gy-4">
                    <div className="col-md-2">
                        <h2 className="mb-4 fw-semibold"
                            style={{
                                color: "#414C79",
                            }}
                        >
                            Company
                        </h2>
                        <nav>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        About
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Jobs
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Press
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Register Your Business
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-2">
                        <h2
                            className="mb-4 fw-semibold"
                            style={{
                                color: "#414C79",
                            }}
                        >
                            Legal
                        </h2>
                        <nav>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Claim
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Privacy
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="#"
                                        className="text-decoration-none"
                                        style={{
                                            color: "#6B7299",
                                        }}
                                    >
                                        Terms
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <h2
                            className="mb-4 fw-semibold"
                            style={{
                                color: "#414C79",
                            }}
                        >
                            Follow us on
                        </h2>
                        <div className="d-flex justify-content-center gap-3">
                            <button className="btn btn-light border"><i className="bi bi-facebook"></i></button>
                            <button className="btn btn-light border"><i className="bi bi-linkedin"></i></button>
                            <button className="btn btn-light border"><i className="bi bi-instagram"></i></button>
                            <button className="btn btn-light border"><i className="bi bi-youtube"></i></button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <h2
                            className="mb-4 fw-semibold"
                            style={{
                                color: "#414C79",
                            }}
                        >
                            Get the latest news and updates
                        </h2>
                        <p
                            style={{
                                color: "#6B7299",
                            }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Nunc.
                        </p>
                        <form className="d-flex align-item-center justify-content-center gap-3">
                            <div className="w-70">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-30 w-md-auto"
                                style={{
                                    backgroundColor: "#1D6AE5",
                                    borderColor: "#1D6AE5",
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-top mt-5 pt-4">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p
                                className="mb-0"
                                style={{
                                    color: "#6B7299",
                                }}
                            >
                                Copyright © 2024 Website. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <a
                                href="#"
                                className="text-decoration-none me-3"
                                style={{
                                    color: "#6B7299",
                                }}
                            >
                                Terms & Conditions
                            </a>
                            <span
                                style={{
                                    color: "#6B7299",
                                }}
                            >
                                |
                            </span>
                            <a
                                href="#"
                                className="text-decoration-none ms-3"
                                style={{
                                    color: "#6B7299",
                                }}
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer