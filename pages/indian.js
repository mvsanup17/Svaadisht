import indFood from '../mpimg/mutton-biryani.jpg';
import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react'
// import axios from 'axios'

    const videoContainerStyle = {
        position: 'relative',
        paddingBottom: '56.25%', // This maintains a 16:9 aspect ratio (adjust as needed)
        paddingTop: '30px',
        height: '400',
        overflow: 'hidden',
    };

    const iframeStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '50%',
    };


function Indian(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg bar fixed-top sticky-top">
                <Link to="/" className="navbar-brand ms-3 fs-3">Svaadisht</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                    <i className='bx bx-menu'></i>
                </button>
                <div className="collapse navbar-collapse bgcol" id="btn">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link mx-3 fs-5">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cuisines" className="nav-link mx-3 fs-5">Cuisines</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/chefs" className="nav-link mx-3 fs-5">Chefs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link mx-3 fs-5">About us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={indFood} className="img-fluid rounded" alt="Biryani" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699806811299.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Biryani</h2>
                        <p>
                            Biryani is a beloved South Asian dish known for its aromatic spices, fragrant rice, and tender meat or vegetables.
                            It's a wholesome, one-pot meal that has many regional variations, each with its unique flavors and cooking techniques.
                            Biryani is not just food; it's an experience, a celebration of flavors, and a dish that has stood the test of time.
                            Over time, biryani became a symbol of celebration, an expression of love, and a connection to the rich culinary heritage of the land. It was no longer just a dish; it was a testament to the magic that could be woven in the kitchen.

                            The tale of Parvati's biryani reminds us that food is more than sustenance; it's a journey of taste and tradition. It has the power to transcend generations, unite people, and create memories that linger like the aroma of a well-cooked biryani.
                        </p>
                    </div>
                </div>
                <br />
                <div className="col-lg-12">
                    <h3><b>How to Cook Biryani:</b></h3>
                    <p>
                        While there are many variations, here's a general method to prepare a simple chicken biryani:
                        <br /><br />
                        <b>Ingredients:</b><br />
                        <ul>
                            <li>2 cups of basmati rice</li>
                            <li>500g chicken pieces (or any meat or vegetables of your choice)</li>
                            <li>2 onions, thinly sliced</li>
                            <li>2 tomatoes, chopped</li>
                            <li>1/2 cup plain yogurt</li>
                            <li>2 tablespoons ginger-garlic paste</li>
                            <li>Biryani spice mix (or create your own blend with cumin, coriander, cardamom, and more)</li>
                            <li>Saffron strands (soaked in warm milk)</li>
                            <li>Ghee (clarified butter) or cooking oil</li>
                            <li>Fresh coriander and mint leaves</li>
                            <li>Salt to taste</li>
                        </ul>
                        <br />
                        <b>Instructions:</b><br />
                        <ol>
                            <li>Marinate the Meat (or Vegetables): Mix the meat or vegetables with yogurt, ginger-garlic paste, and a portion of your biryani spice mix. Allow it to marinate for at least 30 minutes.</li>
                            <li>Prepare the Rice: Wash the rice and soak it for 30 minutes. Cook it until it's about 70% done. Drain and set aside.</li>
                            <li>Fry Onions: Heat ghee or oil in a large, heavy-bottomed pan. Add the sliced onions and fry until they're golden brown and crispy. Remove some for garnish.</li>
                            <li>Layer the Biryani: In the same pan, add the marinated meat or vegetables. Cook for a few minutes until the meat changes color. Then, layer it with partially cooked rice. Sprinkle saffron milk, fried onions, and fresh mint and coriander leaves between the layers.</li>
                            <li>Dum Cooking: Cover the pan with a tight-fitting lid or seal it with dough to trap the steam. Cook on low heat (dum) for 20-25 minutes. This allows the flavors to meld.</li>
                            <li>Serve: Once done, gently fluff the biryani with a fork, mixing the layers. Serve hot with raita (yogurt sauce) or a cooling salad.</li>
                        </ol>
                        <p>Biryani is more than just a dish; it's a culinary journey filled with rich flavors and heritage. Experiment with different types and enjoy this iconic South Asian dish!</p>
                    </p>
                </div>
            </div>
            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="50%"
                        height="315" // Adjust the height as needed
                        src="https://www.youtube.com/embed/95BCU1n268w"
                        frameBorder="0"
                        allowFullScreen
                        style={iframeStyle}
                    ></iframe>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </div>
    );

}


export default Indian;
