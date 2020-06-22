import React from 'react';
import './SeasonDisplay.css';

const Spinner = (props) => {
    return (<div className="ui">
        <div className="ui active dimmer">
            <div className="ui text loader">{props.messages}</div>
        </div>
        <p>Click allow location..</p>
    </div>);
};

Spinner.defaultProps = {
    message: 'Loading...',
};

export default Spinner;
