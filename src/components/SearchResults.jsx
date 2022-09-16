import { Card } from 'antd';
import React from 'react';
import adobe from '../assets/images/Base.png';
import aLogo from '../assets/images/Alexa_Internet_logo 1.png';

const SearchResults = () => (
<div>
    <div className='search-result-card'>
        <div className="search-result-wrapper">
            <div className="result-first-part">
                <div className="result-logo">
                    <img src={adobe} alt="logo" />
                    <h6>Adobe</h6>
                </div>
                <p>https://www.adobe.com</p>
            </div>
            <div className="result-second-part">
                <img src={aLogo} alt="" />
                <div className="local-rating">
                    <h1>3.5</h1>
                    <p>Local rating</p>
                </div>
                <div className="global-rating">
                    <h1>5.0</h1>
                    <p>Global rating</p>
                </div>
            </div>
        </div>
    </div>
</div>
);

export default SearchResults;