import React from 'react';
import { Link } from 'react-router-dom';
import burger from '../mpimg/blue_burger.jpg';
import foodImage from '../mpimg/food.webp';
import pan from '../mpimg/pancake.webp';
import chikki from '../mpimg/chikki.jpg';
import cremy from '../mpimg/cremy.jpg';
import vegies from '../mpimg/vegies.jpg';
import rbur from '../mpimg/rbur.png';
import cb  from '../mpimg/cb.jpg';
import './home.css';

const divStyle = {
  backgroundImage: `url(${burger})`,
};

function Home() {
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

      <div className="container-fluid kon" style={divStyle}>
        <div className="row mt-3">
          <div className="col-lg-6 bg-content">
            <h1 className="ping">Welcome to My Kitchen</h1>
            <p className="ping">Let's Cook Some Meals</p>
            <Link to="/cuisines">
              <button className="btn btn-primary">Let's Cook</button>
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={rbur} alt="Biryani Image" className="img-fluid rotate" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">Origin of Food</h1>
          <br />
          <br />
          <div className="col-lg-12">
            <div className="food-content">
              <p>
                Food has been a central part of human life for centuries. It's not just a source of nourishment but also a cultural and social experience. The art of cooking and the variety of dishes available around the world are a testament to our creativity and culinary traditions.
              </p>
              <p>
                From traditional family recipes passed down through generations to modern fusion cuisine, food is an ever-evolving story. It connects people, transcends borders, and evokes powerful emotions.
              </p>
              <p>
                Join us on a culinary journey to explore the world of flavors, ingredients, and techniques. Whether you're an aspiring chef or a food enthusiast, there's always something new to discover in the world of food.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <p>
              <strong>Discover New Tastes</strong>
              <br />
              Food is more than just sustenance; it's a journey, an adventure, a cultural expression, and a universal language. The greatness of food lies in its ability to connect people, evoke memories, and transport us to distant lands through taste and aroma.
            </p>
            <p>
              From the sizzle of street food stalls in bustling markets to the elegance of fine dining, food offers an array of experiences. It's the heart of celebrations, the centerpiece of family gatherings, and the catalyst for friendships.
            </p>
            <p>
              At Svaadisht, we celebrate the greatness of food by exploring cuisines, sharing recipes, and showcasing talented chefs. Join us on this culinary journey to discover the rich tapestry of flavors, ingredients, and cultures that make food an extraordinary and essential part of our lives.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="card ho">
              <img src={foodImage} className="card-img-top" alt="Delicious Food" />
              <div className="card-body">
                <p className="card-text">Description of the image</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">Food as Art</h1>
          <br />
          <br />
          <div className="col-lg-12">
            <div className="food-content">
              <p>
                Not all arts are meant to be on a page; some are meant to be on your plates too. The concept of food as art has gained significant traction in recent years. Beyond its traditional role as sustenance, food has become a canvas for creativity, innovation, and self-expression. This exploration delves into the fascinating world of food as art, where culinary professionals and enthusiasts alike push the boundaries of taste, presentation, and imagination.
              </p>
              <p>
                Discuss the concept of molecular gastronomy, where science meets cuisine, leading to innovative dishes that challenge traditional norms.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card ho">
              <img src={pan} className="card-img-top" alt="Delicious Food" />
              <div className="card-body">
                <p className="card-text">The sweet that melts your tounge</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <p>
              <strong>Aesthetic Presentation:</strong>
              <br />
              Food as Art - Not all arts are meant to be on the page; some are meant to be on your plates too. The concept of food as art has gained significant traction in recent years. Beyond its traditional role as sustenance, food has become a canvas for creativity, innovation, and self-expression. This exploration delves into the fascinating world of food as art, where culinary professionals and enthusiasts alike push the boundaries of taste, presentation, and imagination. In the realm of food as art, chefs experiment with ingredients, flavors, and textures to create unique dining experiences.
              <br />
              <strong>Visual appeal is a crucial element of food as art. Presentation techniques and plating styles can elevate a meal from nourishment to an aesthetic masterpiece. Explore how chefs use colors, textures, and arrangement to make dishes visually stunning.</strong>
              <br />
              <strong>Food Pairing and Fusion:</strong>
              Chefs are experimenting with unusual food pairings and fusion cuisine, creating exciting and unexpected flavor combinations. Uncover how diverse culinary traditions are merging.
              <br />
              <strong>Food Artistry:</strong>
              Culinary artists are taking food presentation to new heights, crafting intricate and visually stunning dishes. Explore the intersection of food and art.
              <br />
              <strong>Ancient Grains and Heritage Ingredients:</strong>
              Ancient grains like quinoa and heritage ingredients are making a comeback, adding diversity and nutritional value to our diets. Delve into the revival of these traditional foods.
              <br />
              Food is a universal language that transcends borders, cultures, and languages. It has the remarkable ability to bring people together, to showcase the diversity of our world, and to serve as a symbol of identity, tradition, and heritage. In our globalized society, acknowledging the famous foods of different countries is not just an act of gastronomic appreciation; it is a celebration of the rich tapestry of human civilization and the myriad ways in which food reflects our shared history and unique individual cultures. It's a way to honor the world's culinary diversity and understand the profound impact that food has on our lives, our cultures, and our shared human experience. These acknowledgments not only tantalize our taste buds but also serve as a gateway to understanding the stories, traditions, and passions of people around the globe, uniting us in the joy of food.
              <br />
              <strong>Familiar and favorite dishes have the power to evoke deep emotions, connecting us to cherished memories and a sense of comfort. They provide solace during difficult times and a warm embrace from the past.</strong>
              Tasty food is often a cornerstone of cultural identity, carrying with it the traditions and heritage of a people. It serves as a living history book, preserving culinary traditions passed down through generations. Beyond pleasure, tasty food can contribute to our health and well-being. A well-balanced diet that includes a variety of delicious, nutritious foods can boost our immune systems and improve our overall quality of life.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">Delicious Creations</h1>
          <br />
          <br />
          <div className="col-lg-4">
            <div className="card ho">
              <img src={chikki} className="card-img-top" alt="Delicious Chikki" />
              <div className="card-body">
                <p className="card-text">The spice that makes you smile</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card ho">
              <img src={cremy} className="card-img-top" alt="Delicious Cremy" />
              <div className="card-body">
                <p className="card-text">The sweet that attacks your eyes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card ho">
              <img src={cb} className="card-img-top" alt="Delicious Veggies" />
              <div className="card-body">
                <p className="card-text">A fountain of tastes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">Food is Treasure</h1>
          <br />
          <br />
          <div className="col-lg-12">
          </div>

          <div className="col-lg-8">
            <p>
              <strong>Aesthetic Presentation:</strong>
              <br />
              Vegetables, often referred to as "veggies," are an indispensable part of our diet, known for their immense nutritional value and culinary versatility. These colorful and vibrant plant-based foods are a cornerstone of a healthy lifestyle, providing a rich source of essential vitamins, minerals, fiber, and antioxidants. From the crisp freshness of leafy greens like spinach and kale to the comforting warmth of roasted root vegetables, the world of veggies offers an array of tastes, textures, and flavors.
              <br />
              <strong>Visual appeal is a crucial element of food as art. Presentation techniques and plating styles can elevate a meal from nourishment to an aesthetic masterpiece. Explore how chefs use colors, textures, and arrangement to make dishes visually stunning.</strong>
              <br />
              <strong>Food Pairing and Fusion:</strong>
              Vegetables are not only celebrated for their health benefits but also for their role in adding depth and character to countless culinary creations. They serve as the canvas upon which skilled chefs and home cooks alike craft exquisite dishes, from garden-fresh salads to hearty stews and savory stir-fries. Whether you savor them raw, steamed, grilled, or sautéed, veggies add a burst of natural goodness to our plates, enhancing both the visual appeal and taste of our meals.
              <br />
              <strong>Food Artistry:</strong>
              Culinary artists are taking food presentation to new heights, crafting intricate and visually stunning dishes. Explore the intersection of food and art.
              <br />
              <strong>Ancient Grains and Heritage Ingredients:</strong>
              Ancient grains like quinoa and heritage ingredients are making a comeback, adding diversity and nutritional value to our diets. Delve into the revival of these traditional foods.
              <br />
              Food is a universal language that transcends borders, cultures, and languages. It has the remarkable ability to bring people together, to showcase the diversity of our world, and to serve as a symbol of identity, tradition, and heritage. In our globalized society, acknowledging the famous foods of different countries is not just an act of gastronomic appreciation; it is a celebration of the rich tapestry of human civilization and the myriad ways in which food reflects our shared history and unique individual cultures. It's a way to honor the world's culinary diversity and understand the profound impact that food has on our lives, our cultures, and our shared human experience. These acknowledgments not only tantalize our taste buds but also serve as a gateway to understanding the stories, traditions, and passions of people around the globe, uniting us in the joy of food.
              <br />
              This diverse group of edibles includes classic favorites like carrots, broccoli, and bell peppers, as well as more exotic choices such as eggplants, artichokes, and okra. Embracing veggies not only contributes to a balanced diet but also celebrates the diversity of nature's offerings. So, whether you're a dedicated vegetarian, a veggie enthusiast, or simply someone looking to incorporate more greens into your diet, the world of vegetables is a source of endless exploration, culinary inspiration, and vibrant, wholesome living.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="card ho">
              <img src={vegies} className="card-img-top" alt="Delicious Food" />
              <div className="card-body">
                <p className="card-text">The life without this is empty</p>
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
  );
}

export default Home;
