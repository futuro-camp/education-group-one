import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import WeatherPage from "./redux/components/weather-page";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <WeatherPage />
      </Provider>
    </div>
  );
}

export default App;
