import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchRequest } from "./actions";
import { store } from "./index";

class App extends Component {
  // state = {
  //   loading: true,
  //   error: null,
  //   weather: null
  // };

  async componentDidMount() {
    let coords;

    try {
      coords = await getCords();
    } catch (err) {
      if (err.code === 1) {
        this.setState({
          error:
            "We need your location to provide relevant temperature information.",
          loading: false
        });
      } else {
        this.setState({ error: "Unknown error.", loading: false });
      }
    }

    if (coords) {
      const {
        coords: { latitude, longitude }
      } = coords;
      await getWeather(latitude, longitude);
      // this.setState({ weather, loading: false });
    }
  }

  render() {
    const { weather, loading, error } = this.props;

    return (
      <div className="App">
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {weather && <Temp temp={weather.currently.apparentTemperature} />}
      </div>
    );
  }
}

const Temp = ({ temp }) => {
  return <div>Current Temperature is: {temp}°C</div>;
};

const getCords = options => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

const getWeather = async (lat, long) => {
  // const weatherResp = await fetch(
  //   `https://dci-fbw12-darksky.now.sh/?${lat},${long}`
  // );
  // const weather = await weatherResp.json();

  // return weather;
  await store.dispatch(fetchRequest(lat, long));
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    weather: state.weather,
    error: state.error
  };
}

export default connect(mapStateToProps)(App);
