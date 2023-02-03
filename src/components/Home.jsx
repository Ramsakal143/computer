import React from "react";
import { NavLink } from "react-router-dom";
import './all.css'

const Home = () => {
    return (
        <>
            <div>
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid nav_bg">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row mt-60 md:mx-auto" style={{marginTop:"100px"}}>
                                <div className="col-md-6 pt-96 my-32" >
                                    <h1 className="fw-bold">
                                        Grow your business with <br/>
                                        <strong className="text-info">WELCOME HOME</strong>
                                    </h1>
                                    <h3 className="my-3 fw-light">
                                        we are the team of talented developer making websites
                                    </h3>
                                    <div className="mt-3 img-zoom">
                                        <NavLink to='/service' className="btn btn-primary">
                                            Get Started
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <img src="../image/cm.avif" className="container-fluid" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
export default Home