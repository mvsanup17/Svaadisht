// import chef_1 from '../mpimg/sanjeev.webp'
// import chef_2 from '../mpimg/Chef_Vikas_Khanna.webp'
// import chef_3 from '../mpimg/jamie.webp'
// import chef_4 from '../mpimg/gordon-ramsay.webp'
// import chef_5 from '../mpimg/pooja.webp'
// import chef_6 from '../mpimg/rb.avif'
// import chef_7 from '../mpimg/freon.jpg'
// import chef_8 from '../mpimg/cs.webp'
import './chefs.css';  //CSS
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'






function Chefs(){
    const [image, setImage] = useState()
    useEffect(()=>{
        axios.get("http://localhost:5000/getimage")
        .then(res => setImage(res.data[0].image))
        .catch(err => console.log(err))
    },[])
    return(
        <div>
                <nav className="navbar navbar-expand-lg bar fixed-top sticky-top ">
                    {/* <a href="" > */}
                        <Link to="/"  className="navbar-brand ms-3 fs-3">Svaadisht</Link>
                    {/* </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#btn">
                        <i className='bx bx-menu '></i>
                    </button>
                    <div className="collapse navbar-collapse bgcol" id="btn">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                {/* <a href="assets/front/codes/home.html"  className="nav-link mx-3 fs-5"> */}
                                    <Link to="/home"  className="nav-link mx-3 fs-5">Home</Link>
                                {/* </a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a href="assets/front/codes/cuisines.html"  className="nav-link mx-3 fs-5"> */}
                                    <Link to="/cuisines"  className="nav-link mx-3 fs-5">Cuisines</Link>
                                {/* </a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a href="assets/front/codes/chefs.html"  className="nav-link mx-3 fs-5"> */}
                                    <Link to="/chefs"  className="nav-link mx-3 fs-5">Chefs</Link>
                                {/* </a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a href="assets/front/codes/about.html"  className="nav-link mx-3 fs-5"> */}
                                    <Link to="/aboutus"  className="nav-link mx-3 fs-5">About us</Link>
                                {/* </a> */}
                            </li>
                        </ul>
                    </div>
                </nav>

            <br/><br/>

            <h1 className="text-center">CHEFS</h1>

            <br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_1} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699790371696.webp`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Sanjeev Kapoor</h5>
                                <p className="card-text">
                                    Sanjeev Kapoor, an iconic chef, revolutionized Indian cooking with passion and innovation.
                                </p>
                                <a href="assets/front/codes/sanjeev.html" >
                                    <Link to="/sanjeev"  className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_2} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699791848905.webp`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Vikas Khanna</h5>
                                <p className="card-text">
                                    Vikas Khanna is Michelin-star chef, cookbook author, and humanitarian with passion and innovation
                                </p>
                                <a href="assets/front/codes/vikas.html">
                                    <Link to="/vikas"   className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_3} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699791967394.webp`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Jamie Oliver</h5>
                                <p className="card-text">
                                    Jamie Oliver is a renowned chef, author, and advocate for healthier eating worldwide with passion and innovation
                                </p>
                                <a href="assets/front/codes/jamie.html">
                                    <Link to="/jamie"   className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg"> 
                        <div className="card car2">
                            {/* <img src={chef_4} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699792086365.webp`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Gordon Ramsay</h5>
                                <p className="card-text">
                                    Gordon Ramsay, renowned chef and TV personality, elevates culinary excellence worldwide with innovation
                                </p>
                                <a href="assets/front/codes/gordon.html" >
                                    <Link to="/gordon"  className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_5} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699792242904.webp`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Pooja Dhingra</h5>
                                <p className="card-text">
                                    Pooja Dhingra, renowned chef and TV personality, elevates culinary excellence worldwide with innovation
                                </p>
                                <a href="assets/front/codes/pooja.html" >
                                    <Link to="/pooja"  className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_6} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699792491490.avif`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Ranveer Brar</h5>
                                <p className="card-text">
                                    Ranveer Brar Michelin-star chef, cookbook author, and humanitarian with passion and innovation
                                </p>
                                <a href="assets/front/codes/ranveer.html" >
                                    <Link to="/ranveer"  className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_7} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699792660266.jpg`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Yannick Alleno</h5>
                                <p className="card-text">
                                    Yannick Alleno, an iconic chef, revolutionized Indian cooking with passion and innovation. 
                                </p>
                                <a href="assets/front/codes/ya.html" >
                                    <Link to="/yannick"  className="btn">View...</Link>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">
                        <div className="card car2">
                            {/* <img src={chef_8} className="card-img-top" alt=""/> */}
                            <img src={`http://localhost:5000/imgs/file_1699793102003.webp`} className="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Clare Smyth</h5>
                                <p className="card-text">
                                    Clare Smyth, a exceptional cook with very vast knowledge of taste and traditional cooking
                                </p>
                                <a href="assets/front/codes/cs.html" >
                                    <Link to="/clare"  className="btn">View...</Link>
                                </a>
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

            

            
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        </div>
    )
}
export default Chefs