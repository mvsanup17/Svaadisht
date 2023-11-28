import mexFood from '../mpimg/taco.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'


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
    textDecoration: "none",
    color: "black"
};

function Mexican() {
    const [image, setImage] = useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/getimage")
        .then(res => setImage(res.data[0].image))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <nav className="navbar navbar-expand-lg bar fixed-top sticky-top">
                <Link to="/" style={styling} className="navbar-brand ms-3 fs-3">Svaadisht</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className='bx bx-menu'></i>
                </button>
                <div className="collapse navbar-collapse bgcol" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" style={styling} className="nav-link mx-3 fs-5">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuisines" style={styling} className="nav-link mx-3 fs-5">Cuisines</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chefs" style={styling} className="nav-link mx-3 fs-5">Chefs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" style={styling} className="nav-link mx-3 fs-5">About us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <br /><br />

            <h1 className="text-center">Mexican</h1>
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={mexFood} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699807222202.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Tacos</h2>
                        <p>
                            Tacos are a delicious and iconic Mexican street food. They consist of a variety of fillings, such as seasoned meats, beans, cheese, and fresh toppings, all wrapped in a soft corn or flour tortilla. Tacos are not only popular in Mexico but have gained international fame due to their versatility and mouthwatering flavors.

                            There are countless variations of tacos, with each region of Mexico offering its unique twist. Some popular taco fillings include carne asada (grilled beef), al pastor (marinated pork), and fish tacos (typically made with grilled or fried fish). Toppings often include fresh salsa, guacamole, onions, cilantro, and lime.

                            Tacos are a true culinary delight, and part of their charm lies in their customizability. You can mix and match fillings and toppings to create your perfect taco. Whether enjoyed at a street vendor's cart, a local taqueria, or homemade in your kitchen, tacos are a must-try dish for any food lover.
                        </p>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <h2>How to Cook Tacos</h2>
                        <p>
                            Follow this simple recipe to make classic beef tacos at home:

                            <strong>Ingredients:</strong>
                            <ul>
                                <li>1 pound ground beef</li>
                                <li>1 small onion, chopped</li>
                                <li>2 cloves garlic, minced</li>
                                <li>1 packet taco seasoning mix (or use your homemade mix)</li>
                                <li>1/2 cup water</li>
                                <li>Salt and pepper to taste</li>
                            </ul>

                            <strong>For assembling:</strong>
                            <ul>
                                <li>8 small soft corn or flour tortillas</li>
                                <li>1 cup shredded lettuce</li>
                                <li>1 cup diced tomatoes</li>
                                <li>1 cup shredded cheddar cheese</li>
                                <li>1/2 cup sour cream</li>
                                <li>Salsa, hot sauce, and guacamole (optional)</li>
                            </ul>

                            <strong>Instructions:</strong>
                            <ol>
                                <li>In a large skillet, cook the chopped onions and minced garlic over medium heat until they become soft and translucent, which should take about 2-3 minutes.</li>
                                <li>Add the ground beef to the skillet and cook it, breaking it apart with a spatula as it browns. Cook until there's no pink left, and the beef is crumbled and slightly crispy. This usually takes around 5-7 minutes.</li>
                                <li>Drain any excess fat from the skillet.</li>
                                <li>Add the taco seasoning mix and water to the beef. Stir well to combine.</li>
                                <li>Allow the mixture to simmer and thicken for a few minutes until you have a well-seasoned beef filling. Taste and add salt and pepper if needed.</li>
                                <li>Warm your tortillas. You can do this by wrapping them in a damp paper towel and microwaving them for 15-20 seconds or by quickly heating them in a dry skillet.</li>
                                <li>Lay out your tortillas on a clean, flat surface.</li>
                                <li>In the center of each tortilla, place a portion of the beef filling.</li>
                                <li>Add your favorite toppings, such as shredded lettuce, diced tomatoes, shredded cheddar cheese, sour cream, salsa, hot sauce, and guacamole.</li>
                                <li>Fold the sides of the tortilla over the filling, and then fold up the bottom to create your taco.</li>
                            </ol>
                            <p>Enjoy your homemade beef tacos with your choice of toppings! Feel free to get creative with your taco fillings and customize them to your preferences. You can also explore vegetarian or vegan options by using ingredients like black beans, refried beans, grilled veggies, or plant-based meat substitutes.</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/pvSL_VsLb4w?si=3hIX9V05D4EBFZBm"
                        //<iframe width="560" height="315" src="https://www.youtube.com/embed/pvSL_VsLb4w?si=3hIX9V05D4EBFZBm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        frameBorder="0"
                        allowFullScreen
                        style={iframeStyle}
                    ></iframe>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </div>
    );
}

export default Mexican;
