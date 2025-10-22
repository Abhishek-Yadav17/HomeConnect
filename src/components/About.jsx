import React from 'react';
import '../styles/About.scss';

const About = () => {
    return (
        <div className="about">
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
            <div className="about-details">
                <p><div className="pilldot"></div>Why Us?</p>
                <h4>
                    At Zobiit <span>HomeConnect</span>, we believe your dream home deserves a complete solution — from finding the right property to designing it beautifully within your budget.
                    We connect you directly with <span>verified local builders</span> and <span>trusted interior designers</span> , so you can explore, choose, and finalize with confidence. Whether it's a <span>residential</span> flat, <span>commercial</span> space, or a <span>custom interior</span> project, <span>Zobiit</span> helps you get the best options — transparent, affordable, and hassle-free.
                    <span className='tagline'>Our goal is simple — to make your property and interior journey <span>smooth, reliable, and perfectly</span> designed for you.</span>
                </h4>
            </div>
        </div>
    );
};

export default About;
