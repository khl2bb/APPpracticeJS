import React from 'react';
import LoadingScreen from "./Loading"
import * as Location from 'expo-location';
import { render } from 'react-dom';
import { Alert } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios";

const API_KEY = "102ba13c4b713a6ad4f11e93fd061f72";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    console.log(data);
    // this.setState({
    //   isLoading: false,
    //   condition: weather[0].main,
    //   temp
    // });
  };

  getLocation = async() => {
    try {
      // throw Error();
      await Location.requestPermissionsAsync();
      const { coords:{ latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("위치를 찾지 못 하겠습니다.", "슬프네요.");
      this.setState( { isLoading:true } );
    }
    
  };

  componentDidMount() {
    this.getLocation();
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? <LoadingScreen /> : <Text>찾았다!</Text>;
  };
  
}
