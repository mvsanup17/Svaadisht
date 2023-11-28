import React from 'react';
import { Link } from 'react-router-dom';
import itFood from '../mpimg/spaghetti-and-meatballs.webp';

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

function Italian() {
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

            <h1 className="text-center">Italian</h1>

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={itFood} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699807453103.webp`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Spaghetti and Meatballs</h2>
                        <p>
                            Meatballs and Spaghetti is a classic Italian-American dish that consists of three main components: meatballs, a tomato-based sauce, and spaghetti pasta. It's a beloved comfort food and a staple of Italian-American cuisine. Here's a breakdown of these components:
                            Meatballs and spaghetti is a beloved and comforting meal that's both flavorful and satisfying. It's enjoyed by people all around the world and has become a symbol of Italian-American cuisine. The recipe for meatballs and spaghetti can vary from family to family and from region to region, with each cook adding their unique touch to the dish.
                        </p>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <p>
                            How to Cook Spaghetti and Meatballs:
                        </p>
                        <p>
                            Ingredients:
                        </p>
                        <ul>
                            <li>For the Meatballs:</li>
                            <ul>
                                <li>1 pound ground beef</li>
                                <li>1/2 pound ground pork</li>
                                <li>1/2 cup breadcrumbs</li>
                                <li>1/4 cup grated Parmesan cheese</li>
                                <li>1/4 cup chopped fresh parsley</li>
                                <li>1/4 cup milk</li>
                                <li>1/4 cup finely chopped onion</li>
                                <li>2 cloves garlic, minced</li>
                                <li>1 large egg</li>
                                <li>1 teaspoon salt</li>
                                <li>1/2 teaspoon black pepper</li>
                            </ul>
                            <li>For the Sauce:</li>
                            <ul>
                                <li>1 can (28 ounces) crushed tomatoes</li>
                                <li>1 can (14 ounces) diced tomatoes</li>
                                <li>1/4 cup tomato paste</li>
                                <li>2 cloves garlic, minced</li>
                                <li>1/4 cup chopped fresh basil</li>
                                <li>1/4 cup chopped fresh parsley</li>
                                <li>1 teaspoon sugar</li>
                                <li>Salt and black pepper to taste</li>
                            </ul>
                            <li>For the Pasta:</li>
                            <ul>
                                <li>12 ounces spaghetti</li>
                            </ul>
                        </ul>
                        <p>
                            Instructions:
                        </p>
                        <p>
                            <strong>Make the Meatballs:</strong>
                        </p>
                        <ul>
                            <li>In a large mixing bowl, combine all the meatball ingredients: ground beef, ground pork, breadcrumbs, Parmesan cheese, parsley, milk, onion, garlic, egg, salt, and black pepper. Mix until everything is well combined.</li>
                            <li>Shape the mixture into meatballs, about 1 to 1.5 inches in diameter. You can make them larger or smaller, depending on your preference.</li>
                            <li>In a large skillet, heat some olive oil over medium-high heat. Add the meatballs and cook until they are browned on all sides and cooked through. This should take about 10-15 minutes. Once cooked, transfer the meatballs to a plate.</li>
                        </ul>
                        <p>
                            <strong>Make the Sauce:</strong>
                        </p>
                        <ul>
                            <li>In the same skillet, add a bit more olive oil if needed and sauté the minced garlic until fragrant, about 1 minute.</li>
                            <li>Add the crushed tomatoes, diced tomatoes, and tomato paste to the skillet. Stir to combine.</li>
                            <li>Season the sauce with chopped basil, chopped parsley, sugar, salt, and black pepper.</li>
                            <li>Return the cooked meatballs to the skillet and simmer everything together for about 15-20 minutes to allow the flavors to meld.</li>
                        </ul>
                        <p>
                            <strong>Cook the Pasta:</strong>
                        </p>
                        <ul>
                            <li>While the sauce is simmering, bring a large pot of salted water to a boil. Cook the spaghetti according to the package instructions until al dente. Drain the pasta.</li>
                        </ul>
                        <p>
                            <strong>Serve the meatballs and sauce over the cooked spaghetti.</strong>
                        </p>
                        <p>
                            <strong>Enjoy:</strong> Serve your homemade Spaghetti and Meatballs hot, garnished with additional grated Parmesan cheese and chopped parsley, if desired.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/YNJYPv2t6-c?si=hNY1-XlVmO_dDwqs" 
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

export default Italian;
