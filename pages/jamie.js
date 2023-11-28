import jam from '../mpimg/jm.avif';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Jamie() {
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
                        <img src={jam} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699799291692.avif`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Jamie Oliver</h2>
                        <p>
                            Jamie Oliver is a renowned British chef, restaurateur, cookbook author, and television personality. He is known for his dedication to making cooking and good food accessible to everyone and for advocating for healthier eating habits.

                            Some key highlights of Jamie Oliver's career and contributions include:
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
                                    <strong>Television Shows:</strong> Jamie Oliver has hosted numerous cooking shows, including "The Naked Chef" and "Jamie's 30-Minute Meals." He's known for his simple and approachable cooking style.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Cookbooks:</strong> He has authored a variety of cookbooks, sharing recipes that emphasize fresh and locally sourced ingredients.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Restaurants:</strong> Jamie Oliver has opened restaurants worldwide, offering a range of cuisines with an emphasis on quality and affordability.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Food Activism:</strong> Oliver is an advocate for healthier school meals and has campaigned to improve food education and food choices for children.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Community Initiatives:</strong> He has been involved in various community food initiatives, including programs to combat food waste and support vulnerable populations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Awards:</strong> Jamie Oliver has received multiple awards and accolades for his contributions to the culinary and food education fields.
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
                            Jamie Oliver is known for his passion for fresh, seasonal ingredients and for creating dishes that are both delicious and nutritious. While he doesn't have a single favorite food, he has expressed a love for simple, well-prepared dishes that celebrate the natural flavors of ingredients.

                            Some of the foods and cuisines he enjoys include:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Italian Cuisine:</strong> Oliver has a deep affection for Italian food, particularly dishes like pasta, risotto, and wood-fired pizza. He often emphasizes the importance of using high-quality ingredients in Italian cooking.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Fresh Seafood:</strong> Given his British background, Oliver enjoys fresh seafood, such as fish and shellfish, prepared with simple and flavorful seasonings.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Vegetables:</strong> He is a strong advocate for incorporating more vegetables into meals. Dishes that highlight seasonal vegetables are among his favorites.
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

export default Jamie;
