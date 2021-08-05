import React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity} from "react-native";
import {Fontisto, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function AppleRedirectionScreen() {

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={["#FF8ABD", "#EF7365"]}
				start={{
					x: 0,
					y: 1,
				}}
				end={{
					x: 0.25,
					y: 0.25,
				}}
				style={styles.box}
			>

				<View style={{marginTop:1/8*windowHeight, flexDirection:"row", justifyContent: "space-around", alignItems:"center", width:"100%", height:"auto"}}>
					<Text style={{color:"#FFFFFF", fontSize:20}}>Redirecting to Apple Music</Text>
				</View>

				<View style={{marginTop:1/9*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center", height:"auto"}} >
					<Fontisto name="applemusic" size={50} color="#FC3C44" />
				</View>

				<View style={{marginTop:1/9*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center", height:"auto"}} >
					<FontAwesome name="spinner" size={50} color="#FFFFFF" />
				</View>

			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({

	container: {
		flex: 1,
		letterSpacing: 0,
		lineHeight: 1.2,
		justifyContent: "center"
	},

	box: {
		flex:1,
		justifyContent: "flex-start",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	}
});
