import sanj from '../mpimg/san.avif';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react'
import axios from 'axios'


function Sanjeev() {
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
                        <img src={sanj} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699798750408.avif`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Sanjeev Kapoor</h2>
                        <p>
                            Sanjeev Kapoor is a renowned Indian chef and culinary expert. He is often considered one of the most
                            famous and influential chefs in India. Kapoor is known for his culinary skills, innovative cooking
                            techniques, and his contribution to popularizing Indian cuisine both in India and internationally.
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
                                    <strong>Television Shows:</strong> He has hosted several cooking shows on Indian television, the most famous of which is "Khana Khazana." This show, which ran for many years, played a significant role in making him a household name.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Cookbooks:</strong> Kapoor has authored numerous cookbooks, sharing his recipes and culinary expertise with a wide audience. His cookbooks cover a variety of cuisines and cooking styles.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Restaurants:</strong> Sanjeev Kapoor has been involved in the restaurant business. He has launched a chain of restaurants both in India and abroad, offering a mix of Indian and international cuisines.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Culinary Entrepreneurship:</strong> He's an entrepreneur in the culinary industry. Kapoor has been involved in various culinary ventures, including food processing, ready-to-cook meals, and kitchenware.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Awards:</strong> He has received numerous awards and accolades for his contributions to the culinary world.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Cooking Styles:</strong> Kapoor's cooking style is often described as contemporary Indian, and he's known for his innovative take on traditional Indian dishes.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Education:</strong> Apart from his culinary pursuits, Kapoor has also been involved in culinary education and training, helping to groom the next generation of chefs.
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
                            Sanjeev Kapoor, a renowned Indian chef and television personality, has expressed his love for a wide variety of foods over the years. While there isn't a single "favorite" food associated with him, he has shared his appreciation for different dishes and ingredients. Some of the foods he enjoys and the reasons behind his preferences include:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Butter Chicken:</strong> Sanjeev Kapoor has a special fondness for Butter Chicken, a classic Indian dish known for its rich and creamy tomato-based sauce. He appreciates the balance of flavors in this dish, which combines tender chicken with a velvety sauce.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Aloo Paratha:</strong> Aloo Paratha is a traditional Indian stuffed bread, often filled with spiced potatoes. Kapoor has mentioned that this dish reminds him of home-cooked meals and the comfort of Indian cuisine.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Tandoori Chicken:</strong> Tandoori Chicken is another Indian favorite for Sanjeev Kapoor. The smoky and charred flavors from the tandoor (clay oven) appeal to his taste buds.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Mangoes:</strong> Sanjeev Kapoor, like many Indians, has a strong liking for mangoes. He appreciates the various varieties of mangoes available in India and enjoys them in both sweet and savory preparations.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Vegetarian Dishes:</strong> Kapoor is an advocate for vegetarianism and has a deep appreciation for vegetarian cuisine. He enjoys the flavors and versatility of plant-based foods.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Indian Street Food:</strong> Kapoor has expressed his love for Indian street food, such as chaat, pav bhaji, and dosas. These dishes are known for their bold and vibrant flavors.
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

export default Sanjeev;
