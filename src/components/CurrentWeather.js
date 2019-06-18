import React from 'react';

function CurrentWeather(props) {
    const averageTemp = Math.round((props.data.temperatureLow + props.data.temperatureHigh) / 2);
    let sunRise = new Date(props.data.sunriseTime * 1000);
    let sunSet = new Date(props.data.sunsetTime * 1000);
    let sun = {
        sunRise: `${sunRise.getHours()} : ${sunRise.getMinutes()} : ${sunRise.getSeconds()}`,
        sunSet: `${sunSet.getHours()} : ${sunSet.getMinutes()} : ${sunSet.getSeconds()}`
    }
    return (
        <div className="CurrentWeather">
            <div>
                <span className='CurrentWeather__timezone'>{props.timezone}</span>
                <span className='CurrentWeather__temp'>{averageTemp} <span style={{ fontSize: '24px' }}>&deg;C</span></span>
            </div>
            <div className="CurrentWeather__additionInfo">
                <span className='CurrentWeather__summary'>{props.data.summary}</span>
                <span>Wind Speed: {props.data.windSpeed} km/h</span>
                <span>Cloudiness: {props.data.cloudCover} %</span>
                <span>Humidity: {props.data.humidity} %</span>
                <span>Precipitation probability: {`${props.data.precipType} ${props.data.precipProbability}`}%</span>
                <span>Sunrise: {sun.sunRise}</span>
                <span>Sunset: {sun.sunSet}</span>
            </div>
        </div>
    );
}

export default CurrentWeather;