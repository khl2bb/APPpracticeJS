import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#373B44", "#4286f4"],
		title: "Thunderstorm in the house",
		subtitle: "Actually, outside of the house",
	},
	Drizzle: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
		title: "보슬비",
		subtitle: "비가 보슬보슬 내립니다.",
	},
	Rain: {
		iconName: "weather-rainy",
		gradient: ["#00C6FB", "#005BEA"],
		title: "Raining like a MF",
		subtitle: "For more info look outside",
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#7DE2FC", "#B9B6E5"],
		title: "Cold as balls",
		subtitle: "Do you want to build a snowman? Fuck no.",
	},
	Atmosphere: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#FF7300", "#FEF253"],
		title: "해태양해",
		subtitle: "쨍쨍 맑음",
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#D7D2CC", "#304352"],
		title: "구름 때매 흐림",
		subtitle: "우중충",
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Mist!",
		subtitle: "It's like you have no glasses on.",
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Dusty",
		subtitle: "Thanks a lot China 🖕🏻",
	},
	Haze: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Haze",
		subtitle: "Just don't go outside.",
	},
};

export default function Weather({ 온도, 상태 }) {
	return (
		<LinearGradient
			colors={weatherOptions[상태].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					size={96}
					name={weatherOptions[상태].iconName}
					color="white"
				/>
				<Text style={styles.온도}>{온도}°</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{weatherOptions[상태].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[상태].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	온도: PropTypes.number.isRequired,
	상태: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Haze",
		"Mist",
		"Dust",
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3498db",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	text: {
		flex: 1,
		//   backgroundColor:"black",
		color: "white",
		fontSize: 50,
		fontWeight: "bold",
	},
	container: {
		flex: 1,
	},
	온도: {
		fontSize: 42,
		color: "white",
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "white",
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10,
		textAlign: "left",
	},
	subtitle: {
		fontWeight: "600",
		color: "white",
		fontSize: 24,
		textAlign: "left",
	},
	textContainer: {
		alignItems: "flex-start",
		paddingHorizontal: 40,
		justifyContent: "center",
		flex: 1,
	},
});
