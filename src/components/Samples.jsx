import React, { useState } from 'react';
import '../styles/Samples.scss';
import samples from '../data/samplesData.json';

const Samples = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="samples">
      <h2>Our <span>Samples</span></h2>
      <div className="samples-container">
        {samples.map((sample, index) => (
          <div
            key={sample.id}
            className={`sample-card ${activeIndex === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${sample.image})` }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="overlay">
              <h4>{sample.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Samples;
