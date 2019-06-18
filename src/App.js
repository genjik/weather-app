import React, { Component } from 'react';

import WeeklyWeather from './components/WeeklyWeather';
import CurrentWeather from './components/CurrentWeather';
import './App.css';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = 'https://api.darksky.net/forecast/adfe7f9dd5dfc51e6509de05be99e07a/41.31,69.28?exclude=currently,hourly,flags&units=si';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {},
      selected: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(proxy + api)
    .then(response => response.json())
    .then(data => this.setState({ weather: data }));
  }

  handleClick(id) {
    this.setState({ selected: id});
  }

  render() {
    let currentDay;
    let days;
    if (this.state.weather.daily != null) {
      days = this.state.weather.daily.data.map((day, index) => {
        return this.state.selected === index ? 
        <WeeklyWeather clickHandler={() => void(0)} key={index} id={index} data={day} selected={true}/> :
        <WeeklyWeather clickHandler={this.handleClick} key={index} id={index} data={day} /> 
      });
      currentDay = this.state.weather.daily.data.map((day, index) => {
        return index === this.state.selected && <CurrentWeather key={index} data={day} timezone={this.state.weather.timezone}/>;
      });
    }

    return (
      <div className="App">
        <div className="WeeklyWeatherList">
          {currentDay}
          {days}
        </div>
      </div>
    );
  }
}

export default App;
