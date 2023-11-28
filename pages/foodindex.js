import React from 'react';
import { Link } from 'react-router-dom';
import food from '../mpimg/biodiverse.avif';
import food2 from '../mpimg/International.jpg';
import food3 from '../mpimg/cooking.jpg';

function Foodindex() {
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

            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={food} className="d-block w-100 cimg" alt="slide1" />
                        <div className="carousel-caption top-0 mt-4 d-none d-md-block">
                            <h1 className="display-1 fw-bolder">Explore About Us</h1>
                            <Link to="/home" className="btn btn-primary">Food</Link>
                            <h4>
                                Explore About us - Hello  dear! Here we  go with about Page for acknowledgement about our svaaDISHt   page
                                for our mission  & Vision 
                                click the  above about us button to take your way their....
                                Explore Now dude!
                            </h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={food2} className="d-block w-100 cimg" alt="slide2" />
                        <div className="carousel-caption top-0 mt-4 d-none d-md-block">
                            <h1 className="display-1 fw-bolder">Explore About Cuisines</h1>
                            <Link to="/cuisines" className="btn btn-primary">Cuisines</Link>
                            <h4>
                                Cuisines - Here The Core region...? which region...? region region.. that's all about Your choice dear.. 
                                because svaaDISHt offers the option to explore the famous food items preparations through the cuisines option
                                Go on your way to Know about the famous dish from different Countries, hold a second. not just the making process,description
                                (or) info about the dish. we aren't done yet here 
                                so that's why we provide the video links of the dish making below Check it out
                            </h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={food3} className="d-block w-100 cimg" alt="slide3" />
                        <div className="carousel-caption top-0 mt-4 d-none d-md-block">
                            <h1 className="display-1 fw-bolder">Explore About Chefs</h1>
                            <Link to="/chefs" className="btn btn-primary">Chefs</Link>
                            <h4>
                                Chefs - Not just knowledge about food dude take your eyes on the famous chefs in the world 
                                Who made elixier moments in the Serving plates 
                                They play a pivotal role in shaping the way we experience food, from our daily meals to special occasions.
                                the multifaceted world of chefs, examining their roles, skills, and contributions to the art of gastronomy.
                                Take your seconds to click on the above chefs button for Your acknowledgement on these hand made magicians.
                            </h4>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ariahidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

              

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" 
            crossOrigin="anonymous"></script>
        </div>
    );
}

export default Foodindex;
    