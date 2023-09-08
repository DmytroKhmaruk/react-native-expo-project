
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function EyeToggle({ onPress, isSecure, isFocused }) {
	return (
		<Pressable style={styles.eyeContainer} onPress={onPress}>
			{isSecure === true && (
				<MaterialIcons
					name="visibility-off"
					size={24}
					color={isFocused ? '#FF6C00' : '#BDBDBD'}
				/>
			)}
			{isSecure === false && (
				<MaterialIcons
					name="visibility"
					size={24}
					color={isFocused ? '#FF6C00' : '#BDBDBD'}
				/>
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	eyeContainer: {
		position: "absolute",
		top: 16,
		right: 16,
	},
});
