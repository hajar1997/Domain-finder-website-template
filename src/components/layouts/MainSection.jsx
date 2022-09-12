import React from 'react';
import SearchInput from '../SearchInput';

export const MainSection = () => {
return (
<div>
    <section className='mainSec vh-100 container'>
        <div className="w-75">
        <h1 className='main-h1'>Use Domain Finder to find unique domains!</h1>
        <p className='fs-6 main-p'>Millions of people are searching for companies, domains, meta tags, company names and etc., on <br /> Domain finder.
            Try today! <b>1 000 000</b> data for your search.</p>
        </div>
        <SearchInput />
    </section>
</div>
)
}