import React from 'react';
import Products from '../Components/Products';

const Home = () => {
    return (
        <div className= "hero">
            <div className="card bg-dark text-white">
                <img src="images/img-home.jpg" className="card-img" alt="Background" height = "550px"/>
                    <div className="card-img-overlay">
                        <div className = "Container">
                        <h5 className="card-title" display-3 >Pearls</h5>
                        <p className="card-text font-size = h-50">
                        </p>
                    </div>
                    </div>
            </div>
            <Products/>
        </div>
    );
};

export default Home;