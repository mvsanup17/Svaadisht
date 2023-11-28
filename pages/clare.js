import cs from '../mpimg/cs.webp';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Clare() {
    const [image, setImage] = useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/getimage")
        .then(res => setImage(res.data[0].image))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bar fixed-top sticky-top">
                <Link to="/" style={styling} className="navbar-brand ms-3 fs-3">
                    Svaadisht
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#btn"
                >
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
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={cs} className="img-fluid" alt="image"/>
                    </div>
                    <div className="col-lg-8">
                        <h2>Clare Smyth</h2>
                        <p>
                            Clare Smyth is an accomplished chef known for her culinary
                            expertise and dedication to the art of fine dining. She has gained
                            recognition for several notable achievements in the world of
                            gastronomy:
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                            <li>
                                <p>
                                    <strong>Three Michelin Stars:</strong> Clare Smyth has earned
                                    three Michelin stars, a testament to her culinary mastery.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>First Female Chef with Three Stars:</strong> She made
                                    history as the first female chef to run a three-star Michelin
                                    restaurant in the UK.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Global Influence:</strong> Clare's influence extends
                                    globally, inspiring aspiring chefs worldwide.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p>
                            Clare Smyth's culinary style combines tradition with innovation,
                            featuring:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>British and French Fusion:</strong> She blends British
                                    and French culinary traditions to create unique and exquisite
                                    dishes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Seasonal and Locally-Sourced Ingredients:</strong> Clare
                                    prioritizes seasonal and locally-sourced ingredients to deliver
                                    the freshest flavors.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Creative Presentation:</strong> Her dishes are known for
                                    their creative and artistic presentation.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
                crossorigin="anonymous"
            ></script>
        </div>
    );
}

export default Clare;
