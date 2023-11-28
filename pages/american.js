import React from 'react';
import { Link } from 'react-router-dom';
import usFood from '../mpimg/smash-burgers.jpeg';

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

function American() {
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

            <h1 className="text-center">American</h1>

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={usFood} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699807607442.jpeg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Burger</h2>
                        <p>
                            A burger is an American classic and a symbol of comfort food. 
                            It consists of a ground meat patty, typically beef, that is seasoned, cooked, and placed inside a sliced bun.
                            Burgers are incredibly versatile, and you can customize them with various toppings like lettuce, tomatoes,
                            onions, cheese, and condiments.
                            Whether you like your burger plain and simple or loaded with toppings, 
                            it's a beloved dish that's easy to prepare at home or enjoy at a restaurant. 
                            The combination of juicy meat, fresh toppings, and a soft bun is simply irresistible.
                        </p>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <p>
                            <strong>Classic Beef Burger Recipe</strong>
                            <br />
                            <br />
                            <strong>Ingredients:</strong>
                            <br />
                            - 1 pound (450g) ground beef (80% lean, 20% fat is recommended for juicy burgers)
                            - Salt and pepper, to taste
                            - 4 hamburger buns
                            - Toppings of your choice (lettuce, tomato, onion, cheese, pickles, ketchup, mayonnaise, mustard, etc.)
                            - Cooking oil (vegetable oil or canola oil) for grilling
                            <br />
                            <br />
                            <strong>Instructions:</strong>
                            <br />
                            1. <strong>Preheat the Grill:</strong>
                            <br />
                            - If you're using a grill, preheat it to medium-high heat. If you don't have a grill, you can use a stovetop skillet or griddle, preheated over medium-high heat.
                            <br />
                            2. <strong>Prepare the Beef:</strong>
                            <br />
                            - Divide the ground beef into 4 equal portions (for 4 burgers).
                            - Shape each portion into a patty, about 1 inch (2.5 cm) thick.
                            - Season each patty generously with salt and pepper on both sides.
                            <br />
                            3. <strong>Grilling the Burgers:</strong>
                            <br />
                            - Place the burger patties on the grill or in the hot skillet.
                            - Cook for about 3-4 minutes on each side for medium-rare burgers, or longer if you prefer them more well-done. If you like your burgers with cheese, add a slice of cheese on top during the last minute of grilling.
                            <br />
                            4. <strong>Toasting the Buns:</strong>
                            <br />
                            - While the burgers are cooking, cut the hamburger buns in half.
                            - Lightly toast the inside of the buns on the grill or in the skillet for a minute or two until they're lightly browned.
                            <br />
                            5. <strong>Assembling the Burgers:</strong>
                            <br />
                            - Place a burger patty on the bottom half of each bun.
                            - Add your choice of toppings. Popular options include lettuce, tomato slices, onion, pickles, and condiments like ketchup, mayonnaise, and mustard.
                            - Top with the other half of the bun.
                            <br />
                            6. <strong>Serve and Enjoy:</strong>
                            <br />
                            - Serve your delicious homemade burgers while they're still hot and enjoy!
                            <br />
                            <br />
                            Feel free to customize your burger with your favorite toppings and condiments to suit your taste. Burgers are incredibly versatile, so you can get creative with them.
                            <br />
                            This basic recipe will give you a classic beef burger. You can also make burgers with ground chicken, turkey, or plant-based alternatives for different flavor variations.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/BIG1h2vG-Qg?si=1VNPP_PQnTP8xGxa" title="YouTube video player"
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

export default American;
