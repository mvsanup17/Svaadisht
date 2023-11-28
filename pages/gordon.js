import gor from '../mpimg/re.jpg';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'

const styling = {
    textDecoration: 'none',
    color: 'black',
};

function Gordon() {
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
                        <img src={gor} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699799555862.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Gordon Ramsay</h2>
                        <p>
                            Gordon Ramsay is a world-renowned British chef, restaurateur, and television personality. 
                            Known for his culinary expertise and fiery persona, he has made a significant impact on the culinary world.
                            Some key highlights of Gordon Ramsay's career and contributions include:
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
                                    <strong>Michelin Stars:</strong> Gordon Ramsay holds multiple Michelin stars for his restaurants, which are known for their exceptional quality and fine dining experiences.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Television Shows:</strong> He has been the host of several popular television shows, including "Hell's Kitchen" and "MasterChef," where he's known for his high culinary standards and tough mentoring.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Restaurants:</strong> Ramsay's restaurant empire spans the globe, offering diverse culinary experiences from gourmet dining to more casual eateries.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Culinary Expertise:</strong> He's known for his mastery of classic French cuisine and a passion for using fresh, high-quality ingredients.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Cookbooks:</strong> Gordon Ramsay has authored numerous cookbooks, sharing his recipes and culinary wisdom.
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
                            Gordon Ramsay's culinary preferences are diverse, and as a chef of international acclaim, he appreciates a wide range of foods. While he doesn't have a single favorite, some of the cuisines and dishes he enjoys include:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Beef Wellington:</strong> This classic British dish, consisting of beef fillet wrapped in puff pastry, holds a special place in Ramsay's heart. He's famous for his Beef Wellington recipe.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Scallops:</strong> Ramsay is known for his love of perfectly seared scallops. He often emphasizes the importance of cooking them to perfection.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Italian Cuisine:</strong> He enjoys Italian food, particularly pasta dishes and risotto. He appreciates the simplicity and quality of Italian cooking.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Indian Cuisine:</strong> Ramsay has expressed his love for Indian flavors and curries. He enjoys the complex and diverse spices used in Indian cuisine.
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

export default Gordon;
