import React, { useState } from 'react';
import listingsData from '../data/interiorListingsData.json';
import '../styles/InteriorListings.scss';

const InteriorListings = () => {
  const [filter, setFilter] = useState('all');

  const filteredListings = filter === 'all'
    ? listingsData
    : listingsData.filter(item => item.type === filter);

  return (
    <>
      <div className="interior-listings">
        <p><div className="pilldot"></div>Interior Design</p>
        <h2>All Properties <span>Find Your Dream Home Today</span></h2>
        <h4>
          Browse through a wide selection of beautiful homes available for rent or purchase. Use filters to refine your search.
        </h4>

        <div className="filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
            All
          </button>
          <button className={filter === 'modern' ? 'active' : ''} onClick={() => setFilter('modern')}>
            Modern
          </button>
          <button className={filter === 'classic' ? 'active' : ''} onClick={() => setFilter('classic')}>
            Classic
          </button>
          <button className={filter === 'minimalist' ? 'active' : ''} onClick={() => setFilter('minimalist')}>
            Minimalist
          </button>
          <button className={filter === 'luxury' ? 'active' : ''} onClick={() => setFilter('luxury')}>
            Luxury
          </button>
          <button className={filter === 'bohemian' ? 'active' : ''} onClick={() => setFilter('bohemian')}>
            Bohemian
          </button>
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
      </div>
    </>
  );
};

export default InteriorListings;
