import pooja from '../mpimg/pooja.jpg';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Pooja() {
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
                        <img src={pooja} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699801098268.webp`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Pooja Dhingra</h2>
                        <p>
                            Pooja Dhingra is a celebrated pastry chef and entrepreneur known for her
                            contribution to the world of baking and desserts in India. She is the
                            founder of Le15 Patisserie, a popular chain of patisseries in India.
                            Pooja is credited with revolutionizing the dessert scene in the country.
                            Some key highlights of Pooja Dhingra's career and contributions include:
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
                                    <strong>Le15 Patisserie:</strong> Pooja founded Le15 Patisserie,
                                    which quickly gained fame for its macarons and other delectable
                                    desserts.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Culinary Education:</strong> She pursued her passion for
                                    pastry by studying at the prestigious Le Cordon Bleu in Paris.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Author:</strong> Pooja is the author of the book "The
                                    Big Book of Treats," which features a collection of her favorite
                                    dessert recipes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Entrepreneurship:</strong> In addition to her patisseries,
                                    Pooja has ventured into online dessert sales and baking classes.
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
                            Pooja Dhingra's culinary expertise revolves around baking and creating
                            delightful desserts. She has a particular fondness for:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Macarons:</strong> Pooja is renowned for her macarons,
                                    known for their perfect texture and a wide range of flavors.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Cupcakes:</strong> Cupcakes are another specialty of
                                    Pooja's patisseries, offered in various flavors and designs.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Classic Desserts:</strong> She excels at creating classic
                                    desserts like tarts, éclairs, and more, often with a unique twist.
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

export default Pooja;
