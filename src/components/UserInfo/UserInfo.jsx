import { ImageBackground, StyleSheet, Text, View } from "react-native";

const UserInfo = ({
        login= 'Dmytro Khmaruk',
        email,
        uri = "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FMyApp-4131bc3f-d962-4fcb-b707-650a1d72e688/ImagePicker/b0660409-0694-4fc6-86dc-6c39f42cd969.jpeg",
    }) => {
    return (
       <>
			<View style={styles.container}>
				<View style={styles.avatar}>
					<ImageBackground
						source={{ uri: uri }}
						resizeMode="cover"
						style={styles.image}
					/>
				</View>
				<View>
					<Text style={styles.login}>{login}</Text>
					<Text style={styles.email}>{email}</Text>
				</View>
			</View>
		</>
    )
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,

		height: 60,
	},
	login: {
		fontSize: 13,
		fontFamily: "Roboto-Bold",
		color: '#212121',
	},
	email: {
		fontSize: 11,
		fontFamily: "Roboto-Regular",
		color: '#212121',
	},
	avatar: {
		height: 60,
		width: 60,
		borderRadius: 16,
		overflow: "hidden",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});


export default UserInfo;