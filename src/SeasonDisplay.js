import React from 'react';
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};


const seasonConfig = {
    summer: {
        iconName: 'sun',
        text: 'Lets hit to the bitch',
    },
    winter: { iconName: 'snowflake', text: 'Burr, its chilly and cold....'}
};


const SeasonDisplay = (props) => {

    const season = getSeason(props.latitude, new Date().getMonth());

    const {text, iconName} = seasonConfig[season];



    return (<div className={`season-display-position ${season}`}>
        <i className={`left-top-icon massive ${iconName} icon`} />

        <h1>{text}</h1>
        <br/>
        <h2 className={'timer'}>{props.time}</h2>
        <i className={`right-bottom-icon massive ${iconName} icon`} />
    </div>);
};

export default SeasonDisplay;
