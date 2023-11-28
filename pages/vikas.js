import vik from '../mpimg/Vikas-Khanna.jpg';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

function Vikas() {
    const [image, setImage] = useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/getimage")
        .then(res => setImage(res.data[0].image))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bar fixed-top sticky-top">
                <Link to="/" className="navbar-brand ms-3 fs-3">
                    Svaadisht
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className="bx bx-menu"></i>
                </button>
                <div className="collapse navbar-collapse bgcol" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link mx-3 fs-5">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuisines" className="nav-link mx-3 fs-5">
                                Cuisines
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chefs" className="nav-link mx-3 fs-5">
                                Chefs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link mx-3 fs-5">
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
                        <img src={vik} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699799104280.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Vikas Khanna</h2>
                        <p>
                            Vikas Khanna is a celebrated Indian chef, restaurateur, cookbook author, and humanitarian. He has made significant contributions to the culinary world and is known for his innovative cooking style and commitment to social causes.
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
                                    <strong>Television Shows:</strong> Vikas Khanna has appeared on various cooking and reality TV shows. He is known for his role as a judge on the popular show "MasterChef India."
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Cookbooks:</strong> Khanna has authored several cookbooks that showcase his culinary expertise and his love for exploring Indian flavors with a modern twist.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Restaurants:</strong> He has ventured into the restaurant business with the opening of fine dining establishments and Indian restaurants in various parts of the world.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Philanthropy:</strong> Vikas Khanna is not only a chef but also a humanitarian. He has been involved in various philanthropic activities, including initiatives to provide meals to those in need during the COVID-19 pandemic.
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
                            Vikas Khanna has a passion for Indian cuisine and a deep respect for its cultural significance. He enjoys experimenting with traditional Indian dishes and infusing them with a contemporary twist. While he doesn't have a single favorite food, some of his favorite culinary experiences include:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Biryani:</strong> Vikas Khanna appreciates the complexity and rich flavors of biryani, a classic Indian dish made with fragrant basmati rice, aromatic spices, and a choice of proteins.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Street Food:</strong> He has a fondness for Indian street food, which is known for its bold and diverse flavors. Whether it's chaat, vada pav, or dosas, he enjoys the vibrancy of street food culture.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Fusion Cuisine:</strong> Vikas Khanna is known for his innovative approach to Indian cuisine. He enjoys creating fusion dishes that combine Indian flavors with global culinary influences.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Indian Sweets:</strong> Like many with a sweet tooth, Khanna has an appreciation for Indian sweets, including classics like gulab jamun and jalebi.
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

export default Vikas;
