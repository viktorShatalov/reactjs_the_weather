import React from 'react';

class Weather extends React.Component {
    render() {
        return <div>
            <div>
                {this.props.city &&
                    <div>
                        <p>City:{this.props.city}</p>
                        <p>Country:{this.props.country}</p>
                        <p>Temperature:{this.props.temp}</p>
                    </div>
                }
            </div>
        </div>
    }
}

export default Weather;