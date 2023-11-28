import yan from '../mpimg/ya.jpeg';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Yannick() {
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
                        <img src={yan} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699801388945.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Yannick Alleno</h2>
                        <p>
                            Yannick Alléno is a world-renowned French chef with a passion for
                            pushing the boundaries of culinary art. He has earned recognition for
                            the following culinary achievements and contributions:
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
                                    <strong>Michelin Stars:</strong> Yannick Alléno is celebrated for
                                    his numerous Michelin-starred restaurants, a testament to his
                                    culinary excellence.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>French Haute Cuisine:</strong> He is known for his mastery
                                    of French haute cuisine, creating dishes that are a perfect blend
                                    of tradition and innovation.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Culinary Innovation:</strong> Yannick continually explores
                                    new ingredients and techniques to redefine the art of fine dining.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Global Influence:</strong> His influence extends beyond
                                    France, inspiring chefs and food enthusiasts worldwide.
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
                            Yannick Alléno's culinary repertoire features an extensive range of
                            French cuisine, with a particular focus on:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Haute Cuisine:</strong> His approach to cooking reflects
                                    the elegance and refinement of French haute cuisine.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Artistic Presentation:</strong> Yannick's dishes are
                                    celebrated for their artistic presentation, making dining an
                                    visual and gustatory experience.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Seasonal Ingredients:</strong> He prioritizes seasonal and
                                    locally-sourced ingredients, ensuring the freshest flavors in his
                                    creations.
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

export default Yannick;
