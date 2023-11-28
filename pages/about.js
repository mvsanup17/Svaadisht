import React from 'react';
import { Link } from 'react-router-dom';
import cookie from '../mpimg/1.png';
import video from '../mpimg/video.mp4';
import axios from 'axios';
import { useState } from 'react';

// const styling = {
//   textDecoration: 'none',
//   color: 'black',
// };

const formStyle = {
  backgroundColor: '#f7f7f7',
  padding: '20px',
  borderRadius: '5px',
};

const Reviewform = () => {
  const [reviewForm, setReviewForm] = useState({
      'name':'',
      'email':'',
      'comments':''
  })

  const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(reviewForm)
      axios.post("http://localhost:5000/addsubmit", {reviewForm})
      .then((res)=>alert(res.data.msg))
  }
  return(
      <div>
          <h1>Review Form</h1>
          <br/>
          <form onSubmit={handleSubmit} action="post" className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control" id="name" onChange={(e)=> setReviewForm({...reviewForm,name:e.target.value})} required />
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" className="form-control" id="email" onChange={(e)=> setReviewForm({...reviewForm,email:e.target.value})} required />
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="comments">Review</label>
                <textarea type="text" rows={8} cols={70} name="comments" className="form-control" id="comments" onChange={(e)=> setReviewForm({...reviewForm,comments:e.target.value})} required />
                <div className="invalid-feedback">
                  Please provide a valid review.
                </div>
              </div>
              <button className="btn btn-primary" type="submit">Submit</button>
          </form>
      </div>
  )
}

function Aboutus() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bar fixed-top sticky-top">
        <Link to="/"  className="navbar-brand ms-3 fs-3">
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
              <Link to="/home"  className="nav-link mx-3 fs-5">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cuisines"  className="nav-link mx-3 fs-5">
                Cuisines
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chefs"  className="nav-link mx-3 fs-5">
                Chefs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutus"  className="nav-link mx-3 fs-5">
                About us
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <br />
      <br />

      <h1 className="text-center">ABOUT US</h1>

      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>About Svaadisht</h2>
            <br />
            <p>
              Svaadisht is your gateway to the world of culinary delights. We are passionate about food, cooking, and sharing the joy of exploring different flavors and cuisines. Our mission is to bring the art of cooking to your home and inspire you to create delicious meals.
              <br />
              <br />
              Whether you're an experienced chef or just starting your culinary journey, Svaadisht has something for everyone. From mouthwatering recipes to insights from renowned chefs, you'll find a treasure trove of food-related content here.
            </p>
          </div>
          <div className="col-lg-4">
            <img src={cookie} className="img-fluid" alt="Taco" />
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Reviewform />
          </div>

          <div className="col-lg-6">
            <h3>Watch Our Story</h3>
            <video loop autoPlay width="100%" height="40%" controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Aboutus;
