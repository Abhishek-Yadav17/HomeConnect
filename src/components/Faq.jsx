import React, { useState } from 'react';
import '../styles/Faq.scss';
import faqs from '../data/faqData.json';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="faq">
            <p><div className="pilldot"></div>FAQ</p>
            <h2>Frequently <span>Asked Questions</span></h2>

            <div className="content">
                <div className="image-section">
                    <img src="/faq.webp" alt="FAQ" />
                </div>

                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-header" onClick={() => toggleFAQ(index)}>
                                <h4>{faq.question}</h4>
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
