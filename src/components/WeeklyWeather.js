import React from 'react';

class WeeklyWeather extends React.Component {
    render() {
        const dt = new Date(this.props.data.time * 1000);
        const temperature = { 
            high: Math.round(this.props.data.temperatureHigh),
            low: Math.round(this.props.data.temperatureLow)
        };
        const selectedStyle = { border: '2px solid #fff', borderTop: '0px' };
        let weekday;
        switch (dt.getDay() + 1) {
            case 1:
                weekday = 'Monday';
                break;
            case 2:
                weekday = 'Tuesday';
                break;
            case 3:
                weekday = 'Wednesday';
                break;
            case 4:
                weekday = 'Thursday';
                break;
            case 5:
                weekday = 'Friday';
                break;
            case 6:
                weekday = 'Saturday';
                break;
            case 7:
                weekday = 'Sunday';
                break;
            default: 
                weekday = 'Error Occured';
                break;
        }

        return (
            <div 
                className="WeeklyWeatherList__oneDay" 
                onClick={() => this.props.clickHandler(this.props.id)} 
                style={this.props.selected ? selectedStyle : {}}
            >
                <span>{weekday}</span>
                <img src={'./images/' + this.props.data.icon + '.png'} alt={this.props.data.icon} />
                <span>{temperature.high} &deg;C</span>
                <span>{temperature.low} &deg;C</span>
            </div>
        );
    }
}

export default WeeklyWeather;