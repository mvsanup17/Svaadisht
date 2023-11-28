import React from 'react';
import { Link } from 'react-router-dom';
import freFood from '../mpimg/des.webp';

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

function French() {
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

            <h1 className="text-center">French</h1>

            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={freFood} className="img-fluid" alt="" />
                        {/* <img src={`http://localhost:5000/imgs/file_1699807721152.webp`} className="img-fluid" alt="image"/> */}
                    </div>
                    <div className="col-lg-8">
                        <h2>Crème Brûlée</h2>
                        <p>
                            Crème brûlée is a classic French dessert. It features a rich custard base topped with a contrasting layer of hard caramel. The dessert is traditionally served in a small, shallow ramekin. Enjoy the creamy custard with a satisfyingly sweet and crunchy caramelized topping.
                        </p>
                    </div>
                    <br />
                    <div className="col-lg-12">
                        <p>
                            <strong>How to Make Crème Brûlée:</strong>
                            <ol>
                                <li>Preheat your oven to 300°F (150°C). Place six ramekins in a deep baking pan.</li>
                                <li>In a saucepan, heat the heavy cream until it's hot but not boiling. Remove from heat and add the vanilla extract.</li>
                                <li>In a separate bowl, whisk together the egg yolks and 1/2 cup of sugar until well combined.</li>
                                <li>Gradually add the hot cream to the egg yolk mixture, stirring continuously.</li>
                                <li>Strain the custard mixture to ensure it's smooth and free from any curdled bits.</li>
                                <li>Pour the custard into the ramekins.</li>
                                <li>Fill the baking pan with boiling water until it reaches halfway up the sides of the ramekins. This creates a water bath for gentle, even cooking.</li>
                                <li>Bake in the preheated oven for about 40-45 minutes or until the custard is set but still slightly jiggly in the center.</li>
                                <li>Remove the ramekins from the water bath and let them cool to room temperature.</li>
                                <li>Refrigerate the custards for at least 2 hours or overnight.</li>
                                <li>When ready to serve, sprinkle a thin and even layer of granulated sugar over the custard.</li>
                                <li>Caramelize the sugar using a kitchen torch until it's golden and crunchy.</li>
                                <li>Allow the caramel to cool and harden, then serve your homemade crème brûlée.</li>
                            </ol>
                            Enjoy this exquisite French dessert that combines silky, creamy custard with a delightful caramelized sugar topping.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div style={videoContainerStyle}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/3vib5idIADs?si=E3J_a55U8fQYfj4S" title="YouTube video player"
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

export default French;
