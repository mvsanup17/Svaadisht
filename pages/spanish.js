import React from 'react';
import { Link } from 'react-router-dom';
import spanFood from '../mpimg/paella.jpg';

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

function Spanish() {
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

            <h1 className="text-center">Spanish</h1>

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={spanFood} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699807895642.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Paella</h2>
                        <p>
                            Paella is a renowned Spanish dish originating from Valencia. It's a flavorful and colorful rice dish traditionally cooked in a wide, shallow pan. The dish is known for its distinct saffron-infused rice and a variety of ingredients such as seafood, chicken, rabbit, and vegetables. Paella is a symbol of Spanish cuisine and is often cooked during festivals and gatherings.
                        </p>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <p>
                            <strong>How to Make Paella:</strong>
                            <ol>
                                <li>Start by heating olive oil in a paella pan.</li>
                                <li>Add diced onions, garlic, and bell peppers, and cook until softened.</li>
                                <li>Stir in Arborio or Valencia rice and sauté until the rice is well-coated with the oil.</li>
                                <li>Infuse the dish with saffron threads and paprika for that characteristic flavor and color.</li>
                                <li>Add chicken or seafood, such as prawns and mussels, and cook until they turn pink and opaque.</li>
                                <li>Pour in hot chicken or fish stock and simmer until the rice is cooked and the liquid is absorbed.</li>
                                <li>Create the socarrat, a crispy crust at the bottom, by increasing the heat during the last few minutes of cooking.</li>
                                <li>Garnish with lemon wedges and fresh herbs.</li>
                                <li>Serve your homemade paella directly from the pan, family-style, and enjoy the Spanish flavors.</li>
                            </ol>
                            Paella is a fantastic and communal Spanish dish, perfect for sharing with friends and family.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/8LS7MnQjjjg?si=CYHUeKEr-DPwArZB" title="YouTube video player"
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

export default Spanish;
