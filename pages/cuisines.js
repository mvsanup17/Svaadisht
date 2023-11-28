import React from 'react';
import { Link } from 'react-router-dom';
import cuis_1 from '../mpimg/indian.jpg';
import cuis_2 from '../mpimg/2.webp';
import cuis_3 from '../mpimg/Mexican.jpg';
import cuis_4 from '../mpimg/italiancuisine.jpg';
import cuis_5 from '../mpimg/usa.webp';
import cuis_6 from '../mpimg/French.jpg';
import cuis_7 from '../mpimg/spanish-foods.jpg';
import cuis_8 from '../mpimg/sush.jpg';
import './cuisines.css'; // CSS 



function Cuisines() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bar fixed-top sticky-top ">
        <Link to="/"  className="navbar-brand ms-3 fs-3">Svaadisht</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
          <i className='bx bx-menu '></i>
        </button>
        <div className="collapse navbar-collapse bgcol" id="btn">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/home"  className="nav-link mx-3 fs-5">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/cuisines"  className="nav-link mx-3 fs-5">Cuisines</Link>
            </li>
            <li className="nav-item">
              <Link to="/chefs"  className="nav-link mx-3 fs-5">Chefs</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus"  className="nav-link mx-3 fs-5">About us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <br /><br />

      <h1 className="text-center">CUISINES</h1>

      <br /><br />
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_1} className="card-img-top" alt="..." />
              {/* <img src={`http://localhost:5000/imgs/file_1699801953571.jpg`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">Indian</h5>
                <p className="card-text">
                  {/* Some quick example text to build on the card title and make up the bulk of the card's content. */}
                  Indian food is a diverse and rich culinary tradition that reflects the culture, history, and geography
                </p>
                <Link to="/indian"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_2} className="card-img-top" alt="..." /> 
              {/* <img src={`http://localhost:5000/imgs/file_1699802124146.webp`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">Chinese</h5>
                <p className="card-text">
                  Chinese cuisine encompasses a wide array of flavors, techniques, and regional specialties
                </p>
                <Link to="/chinese"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_3} className="card-img-top" alt="..."  />
              {/* <img src={`http://localhost:5000/imgs/file_1699802429416.jpg`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">Mexican</h5>
                <p className="card-text">
                Mexican cuisine delights with its bold and spicy flavors, from savory tacos to zesty salsas.
                </p>
                <Link to="/mexican"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_4} className="card-img-top" alt="..." />
              {/* <img src={`http://localhost:5000/imgs/file_1699802559682.jpg`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">Italian</h5>
                <p className="card-text">
                Italian cuisine enchants with its pasta, pizza, and gelato, a symphony of flavors from North to South
                  </p>
                <Link to="/italian"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br /><br />
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_5} className="card-img-top" alt="..." />
              {/* <img src={`http://localhost:5000/imgs/file_1699802683166.webp`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">American</h5>
                <p className="card-text">
                American cuisine is a diverse medley of regional tastes, from hearty Southern barbecue to classic 
                </p>
                <Link to="/american"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_6} className="card-img-top" alt="..." />
              {/* <img src={`http://localhost:5000/imgs/file_1699802843517.jpg`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">French</h5>
                <p className="card-text">
                  French cuisine is renowned for its culinary artistry, blending exquisite flavors gastronomic masterpieces.
                </p>
                <Link to="/french"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_7} className="card-img-top" alt="..." />
              {/* <img src={`http://localhost:5000/imgs/file_1699803020918.jpg`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">Spanish</h5>
                <p className="card-text">
                Spanish food is a vibrant tapestry of flavors, from paella's saffron-infused rice blending exquisite flavors
                </p>
                <Link to="/spanish"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="card car1">
              <img src={cuis_8} className="card-img-top" alt="..." />
              {/* <img src={`http://localhost:5000/imgs/file_1699803069616.jpg`} className="card-img-top" alt="image"/> */}
              <div className="card-body">
                <h5 className="card-title">Japanese</h5>
                <p className="card-text">
                Japanese cuisine is a harmonious blend of art and flavor, from delicate sushi to sizzling teppanyaki
                </p>
                <Link to="/japanese"  className="btn">Cook...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       <footer className="footer bg-dark text-white mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5>Contact Us</h5>
              <p>
                <strong>Phone:</strong> +91 45363638282
                <br />
                <strong>Email:</strong> svadisht@gmail.com
                <br/>
                <strong>address:</strong> raja ram nagar,Mumbai
                <br />
                <strong>customer service no:</strong>999 229 1234
                <br />
              </p>
            </div>
            <div className="col-lg-6">
              <h5>Follow Us</h5>
              <div className="social-icons">
                <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.facebook.com/YourFacebookPage" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/YourInstagramHandle" target="_blank" rel="noopener noreferrer">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Cuisines;
