import ran from '../mpimg/ranveer.jpg';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Ranveer() {
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
                        <img src={ran} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699801236937.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Ranveer Brar</h2>
                        <p>
                            Ranveer Brar is a renowned Indian chef known for his culinary
                            expertise and contributions to the world of Indian cuisine. He is
                            widely recognized for the following achievements and contributions:
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
                                    <strong>Culinary Exploration:</strong> Ranveer has explored
                                    various regional Indian cuisines, bringing lesser-known dishes
                                    into the spotlight.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Television Appearances:</strong> He has been a popular face
                                    on Indian cooking shows, sharing his culinary knowledge with a
                                    wide audience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Restaurant Ventures:</strong> Ranveer has been involved in
                                    the restaurant industry, with a focus on serving authentic Indian
                                    flavors.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Recipe Books:</strong> He has authored cookbooks that
                                    enable food enthusiasts to recreate his signature dishes at home.
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
                            Ranveer Brar's culinary expertise extends to a wide range of Indian
                            dishes, with a special emphasis on:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Regional Indian Cuisine:</strong> He is known for
                                    showcasing the diverse regional cuisines of India, including
                                    dishes from North, South, East, and West India.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Fusion Cooking:</strong> Ranveer enjoys creating fusion
                                    dishes that combine traditional Indian flavors with a modern twist.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Culinary Innovation:</strong> He constantly explores new
                                    ingredients and techniques to push the boundaries of Indian
                                    cuisine.
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

export default Ranveer;
