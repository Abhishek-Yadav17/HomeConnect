import React from 'react';
import '../styles/InteriorAbout.scss';

const InteriorAbout = () => {
    return (
        <div className="interior-about">
            {/* <div className="stats">
            <div className="stats-elem">
                <h2>500+</h2>
                <h4>Properties Listed</h4>
            </div>
            <div className="stats-elem">
                <h2>50+</h2>
                <h4>Design Platforms</h4>
            </div>
            <div className="stats-elem">
                <h2>25+</h2>
                <h4>Bank Reserved</h4>
            </div>
        </div> */}
            <div className="interior-about-details">
                <p><div className="pilldot"></div>Why Us?</p>
                <h4>
                    Zobiit <span>HomeConnect</span> partners with top-rated local interior designers and firms who bring creativity, quality, and affordability together. Whether you want a <span>modern</span> home setup, <span>office renovation </span>, or <span>complete design transformation</span> — our interiors are customized as per your taste, space, and budget.
                    <span className='tagline'>Tell us what you want, and we'll bring you 3-5 best interior options to compare and choose from — all <span>verified</span> and <span>experienced professionals.</span></span>
                </h4>
            </div>
        </div>
    );
};

export default InteriorAbout;
