import React from 'react';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div className= "hero">
            <div className="card bg-dark text-white">
                <img src="images/img-home.jpg" className="card-img" alt="Background" height = "550px"/>
                <div className = "Container">

                    <div className="card-img-overlay">
                        <h5 className="card-title">Jewelery Collection</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                    </div>
                    </div>
            </div>
        </div>
    );
};


export default Home;