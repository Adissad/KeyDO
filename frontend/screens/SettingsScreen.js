import React, {useState} from 'react';
import { Text, StyleSheet, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Input, Button } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SettingsScreen(props) {

    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#FF8ABD', '#EF7365']}
                start={{
                    x: 0,
                    y: 0.25
                }}
                end={{
                    x: 0.5,
                    y: 1
                }}
                locations={[0, 0.7]}
                style={styles.box}>

                        <Text h4 style={styles.title}>Settings</Text>

                        <TouchableOpacity>
                        <Text style={styles.settings}>
                        Compte
                        </Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity>
                        <Text style={styles.settings}>
                        Sécurité
                        </Text>
                        </TouchableOpacity>
                            
                        <TouchableOpacity>
                        <Text style={styles.settings}>
                        Aide
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Text style={styles.settings}>
                        Confidentialité
                        </Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                        <Button onPress={() => {props.navigation.navigate('Connexion')}} buttonStyle={{backgroundColor:"transparent", borderRadius: 50, borderWidth: 0.5}} title="Déconnexion"/>
                        </TouchableOpacity>

            </LinearGradient>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        paddingLeft: 1 / 2.6 * windowWidth,
        marginTop: 1 / 12 * windowHeight,
        // paddingBottom: 1 / 50 * windowHeight,
        color: '#FFFFFF',
        fontSize: 30,
        fontFamily: 'Arial',
    },

    box: {
        flex: 1,
        justifyContent: "flex-start",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    settings: {
        marginLeft: 1 / 20 * windowWidth, 
        marginRight: 1 / 25 * windowWidth, 
        marginBottom: 1 / 12 * windowHeight,
        marginTop: 1 / 26 * windowHeight,
        fontFamily: 'Arial', 
        color: '#FFFFFF', 
        fontSize: 20, 
        padding: 10,
        paddingLeft: 1 / 17 * windowWidth, 
        textAlign:"center", 
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: "#FFFFFF",
    },
});