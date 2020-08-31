import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function LoadingScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>로딩 중</Text>
			<StatusBar style="dark" />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#3498db",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	text: {
		flex: 0.55,
		//   backgroundColor:"black",
		color: "white",
		fontSize: 50,
		fontWeight: "bold",
	},
});
