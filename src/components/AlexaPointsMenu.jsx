import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faSearch} from '@fortawesome/free-solid-svg-icons';
import AlexaPointsCheckboxes from './AlexaPointsCheckboxes';

const AlexaPointsMenu = () => {
return (
<div>
    <div className="container">
        <div className="company-side-menu-style mt-3">
            <div className="company-menu-header">
                <h6>Alexa points</h6>
                <FontAwesomeIcon className='chevron-up' icon={faChevronUp} />
            </div>
            <AlexaPointsCheckboxes />
        </div>
    </div>
</div>
)
}

export default AlexaPointsMenu