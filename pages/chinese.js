import chiFood from '../mpimg/kungpaochicken.jpg';
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
}

function Chinese() {
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

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={chiFood} className="img-fluid" alt="Kungpao Chicken" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699807058869.jpg`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-4 mb-4">Kungpao Chicken</h1>
                        <p className="lead">
                            Kung Pao Chicken, also known as "Gong Bao Ji Ding" in Chinese, is a beloved classic in Sichuan cuisine.
                            This dish is renowned for its bold flavors, combining the perfect balance of spicy, sweet, and savory
                            elements. Kung Pao Chicken is known for its succulent chicken pieces, roasted peanuts, and a tantalizing
                            sauce that makes it a favorite in Chinese restaurants around the world.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="mb-4">How to Cook Kung Pao Chicken:</h2>
                        <p>
                            <strong>Ingredients:</strong>
                        </p>
                        <ul>
                            <li>1 pound boneless, skinless chicken breasts or thighs, cut into bite-sized pieces.</li>
                            <li>1/2 cup roasted unsalted peanuts.</li>
                            <li>2 tablespoons vegetable oil.</li>
                            <li>2-3 dried red chilies (adjust according to your spice preference).</li>
                            <li>1/2 red bell pepper, cut into small cubes.</li>
                            <li>1/2 green bell pepper, cut into small cubes.</li>
                            <li>3-4 cloves of garlic, minced.</li>
                            <li>1-inch piece of fresh ginger, minced.</li>
                            <li>2 green onions, chopped.</li>
                        </ul>

                        <p>
                            <strong>For the Marinade:</strong>
                        </p>
                        <ul>
                            <li>1 tablespoon soy sauce.</li>
                            <li>1 teaspoon cornstarch.</li>
                            <li>1 teaspoon vegetable oil.</li>
                        </ul>

                        <p>
                            <strong>For the Sauce:</strong>
                        </p>
                        <ul>
                            <li>2 tablespoons soy sauce.</li>
                            <li>1 tablespoon black vinegar (or rice vinegar).</li>
                            <li>1 tablespoon hoisin sauce.</li>
                            <li>1 teaspoon sugar.</li>
                            <li>1/2 teaspoon cornstarch.</li>
                            <li>Salt and pepper to taste.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="mb-3">Instructions:</h3>
                        <p>
                            1. Start by marinating the chicken. In a bowl, combine the chicken pieces with the soy sauce, cornstarch, and vegetable oil. Mix well and let it sit for about 15-20 minutes.

                            2. While the chicken is marinating, prepare the sauce. In another bowl, mix together the soy sauce, black vinegar, hoisin sauce, sugar, and cornstarch. Set it aside.

                            3. Heat the vegetable oil in a wok or a large, deep skillet over medium-high heat. Once the oil is hot, add the dried red chilies, minced garlic, and ginger. Stir-fry for about 30 seconds or until they become fragrant.

                            4. Add the marinated chicken to the wok. Stir-fry until the chicken turns white and is almost cooked through. This should take about 5-7 minutes.

                            5. Add the red and green bell pepper cubes to the wok and continue to stir-fry for another 2-3 minutes until the peppers begin to soften.

                            6. Now, pour the sauce you prepared earlier over the chicken and vegetables. Stir well to coat everything evenly. Allow the sauce to thicken, which should take another 2-3 minutes.

                            7. Toss in the roasted peanuts and green onions, and give it a final stir.

                            8. Taste the dish and adjust the salt and spice level according to your preferences. If you want it spicier, you can add more dried red chilies or a dash of chili sauce.

                            9. Serve your delicious Kung Pao Chicken over steamed rice and garnish with additional green onions or crushed peanuts.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container my-5">
    <div style={videoContainerStyle}>
        <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YT8oN4U7Vm8"
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

export default Chinese;
