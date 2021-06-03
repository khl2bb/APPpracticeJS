import React from "react";
import LoadingScreen from "./Loading";
import * as Location from "expo-location";
import { render } from "react-dom";
import { Alert } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import Weather from "./Weather";
const API_KEY = "102ba13c4b713a6ad4f11e93fd061f72";
export default class extends React.Component {
	state = {
		isLoading: true,
		temp: 999,
		condition: "Clear",
	};

	getWeather = async (latitude, longitude) => {
		const {
			data: {
				main: { temp },
				weather,
			},
		} = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
		);
		this.setState({
			isLoading: false,
			temp,
			condition: weather[0].main,
		});
		// console.log(data.main);
		// this.setState({
		//   isLoading: false,
		//   condition: weather[0].main,
		//   temp
		// });
	};

	getLocation = async () => {
		try {
			// throw Error();
			await Location.requestPermissionsAsync();
			const {
				coords: { latitude, longitude },
			} = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
			this.setState({ isLoading: false });
		} catch (error) {
			Alert.alert("위치를 찾지 못 하겠습니다.", "슬프네요.");
			this.setState({ isLoading: true });
		}
	};

	componentDidMount() {
		this.getLocation();
	}

	render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? (
			<LoadingScreen />
		) : (
			<Weather 온도={temp} 상태={"Clear"} />
		);
	}
}
