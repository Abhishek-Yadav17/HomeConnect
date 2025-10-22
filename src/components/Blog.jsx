import React, { useState } from 'react';
import '../styles/Blog.scss';
import testimonials from '../data/testimonialsData.json';

const Blog = () => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const { text, avatar, name, profession } = testimonials[index];

    return (
        <div className="blog">

            <h2>What our <span>clients say</span></h2>

            <img
                src="https://cdn.prod.website-files.com/678f2530a3da34eb13862ce8/6859492362a4d2beefe32eaf_Group.svg"
                alt="Quote"
                className="quote-img"
            />

            <div className="testimonial">
                <h4>{text}</h4>
                <img src={avatar} alt={name} className="avatar" />
                <h5 className="name">{name}</h5>
                <p className="profession">{profession}</p>
            </div>

            <div className="nav-buttons">
                <button onClick={prev}>
                    <i className="ri-arrow-left-line"></i>
                </button>
                <button onClick={next}>
                    <i className="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
    );
};

export default Blog;
