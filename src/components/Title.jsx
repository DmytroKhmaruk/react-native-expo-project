import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Title({ children, style }) {
	return <Text style={[styles.title, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		marginRight: "auto",
		marginLeft: "auto",
		fontSize: 30,
		fontFamily: "Roboto-Medium",
		color: '#212121',
	},
});
