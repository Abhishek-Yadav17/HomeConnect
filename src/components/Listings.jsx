import React, { useState } from 'react';
import '../styles/Listings.scss';
import listingsData from '../data/listingsData.json';

const Listings = () => {

    const [filter, setFilter] = useState('all');

    const filteredListings = filter === 'all'
        ? listingsData
        : listingsData.filter(item => item.type === filter);

    return (
        <div className="listings">
            <p><div className="pilldot"></div>Our Listings</p>
            <h2>Explore Properties <span>That Match Your Lifestyle</span></h2>

            <div className="filters">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => setFilter('all')}
                >All</button>
                <button
                    className={filter === 'residential' ? 'active' : ''}
                    onClick={() => setFilter('residential')}
                >Residential</button>
                <button
                    className={filter === 'commercial' ? 'active' : ''}
                    onClick={() => setFilter('commercial')}
                >Commercial</button>
                <button
                    className={filter === 'land' ? 'active' : ''}
                    onClick={() => setFilter('land')}
                >Land</button>
            </div>

            <div className="cards">
                {filteredListings.map(item => (
                    <div className="card" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="overlay">
                            <div className="top">
                                <div><i className="ri-hotel-bed-line"></i> {item.beds}</div>
                                <div><i className="ri-shower-line"></i> {item.baths}</div>
                                <div><i className="ri-ruler-2-line"></i> {item.area}</div>
                            </div>
                            <div className="bottom">
                                <h4>{item.title}</h4>
                                <h4>{item.price}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="explore-btn" onClick={() => window.location.href = '/properties'}>
                Explore More <i className="ri-arrow-right-up-line"></i>
            </button>
        </div>
    );
};

export default Listings;
