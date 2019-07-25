import React from 'react';
import Info from './component/Info';
import Form from './component/Form';
import Weather from './component/Weather';

const API_KEY = '07a96ddb246a28358efd12b34db1a795'

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_URL = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_URL.json()
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        error: "Введите название города"
      });
    }
  }

  render() {
    return (
      <div className = 'wrapper'>
        <Info />
        <Form gettingWeather={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;