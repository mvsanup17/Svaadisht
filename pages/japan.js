import React from 'react';
import { Link } from 'react-router-dom';
import japFood from '../mpimg/Sushi.avif';

const videoContainerStyle = {
    position: 'relative',
    paddingBottom: '56.25%', // This maintains a 16:9 aspect ratio (adjust as needed)
    paddingTop: '30px',
    height: '0',
    overflow: 'hidden',
};

const iframeStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '50%',
};

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Japanese() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bar fixed-top sticky-top">
                <Link to="/" style={styling} className="navbar-brand ms-3 fs-3">
                    Svaadisht
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className="bx bx-menu"></i>
                </button>
                <div className="collapse navbar-collapse bgcol" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" style={styling} className="nav-link mx-3 fs-5">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuisines" style={styling} className="nav-link mx-3 fs-5">
                                Cuisines
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chefs" style={styling} className="nav-link mx-3 fs-5">
                                Chefs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" style={styling} className="nav-link mx-3 fs-5">
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <br />
            <br />

            <h1 className="text-center">Japanese</h1>

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={japFood} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699808180719.avif`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Sushi Rolls</h2>
                        <p>
                            Sushi is a beloved Japanese dish known for its fresh and delicate flavors. It typically consists of vinegared rice, various ingredients like seafood, vegetables, and occasionally tropical fruits, all rolled up in a sheet of seaweed called nori. Sushi is often served with pickled ginger, soy sauce, and wasabi.
                        </p>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <p>
                            <strong>How to Make Sushi Rolls:</strong>
                            <ol>
                                <li>Start by preparing sushi rice by mixing cooked rice with rice vinegar, sugar, and salt.</li>
                                <li>Place a sheet of plastic wrap on a bamboo sushi rolling mat.</li>
                                <li>Put a sheet of nori on the plastic wrap and wet your fingers to spread a thin layer of sushi rice over the nori, leaving a small border at the top.</li>
                                <li>Add your choice of ingredients, such as thin strips of fresh fish, avocado, and cucumber, on the rice.</li>
                                <li>Roll the sushi using the bamboo mat, applying gentle pressure as you roll to create a compact roll.</li>
                                <li>Use a sharp knife to slice the roll into bite-sized pieces.</li>
                                <li>Serve your sushi rolls with soy sauce, pickled ginger, and wasabi for a delightful Japanese dining experience.</li>
                            </ol>
                            Sushi is not only delicious but also an artful and healthy cuisine option that you can enjoy in various styles, including Nigiri, Sashimi, and more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/joweUxpHaqc?si=6wju6dD6j6jiAqvi" title="YouTube video player"
                        frameBorder="0"
                        allowFullScreen
                        style={iframeStyle}
                    ></iframe>
                </div>
            </div>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossOrigin="anonymous"
            ></script>
        </div>
    );
}

export default Japanese;
