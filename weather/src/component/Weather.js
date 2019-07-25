import React from 'react';

const Weather = props => (<div>
    <div>
        {props.city &&
            <div>
                <p>City:{props.city}</p>
                <p>Country:{props.country}</p>
                <p>Temperature:{props.temp}</p>
            </div>
        }
        <p>{props.error}</p>
    </div>
</div>)

export default Weather;