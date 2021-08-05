import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { Input, Button } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Badge, Icon, withBadge, Divider } from 'react-native-elements';
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HomeScreen(props) {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#2464A2', '#693192']}
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


                <View>
                    <TouchableOpacity>
                        <View >
                            <Ionicons style={styles.notif} onPress={toggleModal} name='ios-notifications-outline' />
                        </View>
                    </TouchableOpacity>
                    <Modal isVisible={isModalVisible}>
                        <ScrollView style={styles.scrollView}>
                            <LinearGradient
                                colors={['#2464A2', '#693192']}
                                start={{
                                    x: 0.25,
                                    y: 0.25
                                }}
                                end={{
                                    x: 0.8,
                                    y: 0.8
                                }}
                                locations={[0, 0.7]}>
                                <Text style={{ color: "#FFFFFF", alignItems: "center" }}> Notifications </Text>
                                <Text style={{ color: "#FFFFFF" }}> Vous avez un nouveau message </Text>
                                <Divider style={{ color: "#FFFFFF" }} orientation="vertical" width={50} />
                                <Text style={{ color: "#FFFFFF" }}> Vous avez un nouveau match</Text>
                                <Divider style={{ color: "#FFFFFF" }} orientation="vertical" width={50} />
                                <Text style={{ color: "#FFFFFF" }}> Vous avez un nouveau message</Text>
                                <Divider style={{ color: "#FFFFFF" }} orientation="vertical" width={50} />
                                <Button buttonStyle={{ backgroundColor: "#693192" }} title="Terminé" onPress={toggleModal} />
                            </LinearGradient>
                        </ScrollView>
                    </Modal>
                </View>

                <Text h4 style={styles.title}>Home</Text>

                <ScrollView>

                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

                        <TouchableOpacity onPress={() => { props.navigation.navigate('Dance') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight, }}>
                            <ImageBackground source={require('../assets/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 17 * windowWidth, }}>Dance/Électro</Text>
                            </ImageBackground>
                        </TouchableOpacity>



                        <TouchableOpacity onPress={() => { props.navigation.navigate('RnB') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight, }}>
                            <ImageBackground source={require('../assets/fachry-zella-devandra-Lu35w8qGrQU-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 18 * windowWidth, }}>RnB</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('HipHop') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/kaysha-Kj4o6jCPulI-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 8 * windowWidth }}>Hip-Hop</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Latino') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/ban-yido--rP8CP8usWc-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 8 * windowWidth, }}>Latino</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Jazz') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/janine-robinson-uZisL-EGGxQ-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 7 * windowWidth, }}>Jazz</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Soul') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/mike-von-X4d6DUMappU-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 7 * windowWidth, }}>Soul</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Rock') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/ana-grave-gHcWaeldgtQ-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 7 * windowWidth, }}>Rock</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('RnB') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/stefany-andrade-GbSCAAsU2Fo-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 10 * windowWidth, }}>Classique</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Reggae/Dancehall') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/antoine-julien-V2Bxlfg1WHc-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 14.5 * windowHeight, paddingLeft: 1 / 9 * windowWidth, }}>Reggae/Dancehall</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Pop') }} style={{ marginLeft: 1 / 17 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/clem-onojeghuo-Jv3QGa_gVTI-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 12.5 * windowHeight, paddingLeft: 1 / 6.5 * windowWidth, }}>Pop</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('French') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/IMG_0429.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 7 * windowWidth }}>Variété française</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Kpop') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/bundo-kim-VrznpTr_lg0-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 7 * windowWidth, }}>K-pop</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Métal') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/yohann-libot-UqEF_gZVddk-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 8 * windowWidth }}>Métal</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Funk') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/tikieva_event-_e15F3ZU-G4-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 6.5 * windowWidth, }}>Funk</Text>
                            </ImageBackground>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Folk') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/priscilla-du-preez-de-HbaYzZqA-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 14 * windowHeight, paddingLeft: 1 / 9 * windowWidth }}>Folk & Acoustique</Text>
                            </ImageBackground>
                        </TouchableOpacity >


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Blues') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/kobe-subramaniam-QcM7_gq95_Y-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 7 * windowWidth, }}>Blues</Text>
                            </ImageBackground>
                        </TouchableOpacity >

                        <TouchableOpacity onPress={() => { props.navigation.navigate('Country') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/raul-najera-OsTJNX83lC0-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 8 * windowWidth }}>Country</Text>
                            </ImageBackground>
                        </TouchableOpacity >


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Afro') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/ben-masora-Hsu3j-Bs3Uo-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 9 * windowWidth, }}>Afro Beat</Text>
                            </ImageBackground>
                        </TouchableOpacity >

                        <TouchableOpacity onPress={() => { props.navigation.navigate('Décennies') }} style={{ marginLeft: 1 / 20 * windowWidth, marginRight: 1 / 25 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/oleg-sergeichik-Ebhh_t6tjo0-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 9 * windowWidth }}>Décennies</Text>
                            </ImageBackground>
                        </TouchableOpacity >


                        <TouchableOpacity onPress={() => { props.navigation.navigate('Gospel') }} style={{ marginLeft: 1 / 17 * windowWidth, marginBottom: 1 / 40 * windowHeight }}>
                            <ImageBackground source={require('../assets/mateus-campos-felipe-yZu0dWSplXM-unsplash.jpg')} style={styles.genres}>
                                <Text style={{ fontFamily: 'Arial', color: '#FFFFFF', fontSize: 20, paddingTop: 1 / 13 * windowHeight, paddingLeft: 1 / 8 * windowWidth, }}>Gospel</Text>
                            </ImageBackground>
                        </TouchableOpacity >

                    </View>

                </ScrollView>
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
        paddingTop: 1 / 800 * windowHeight,
        paddingBottom: 1 / 50 * windowHeight,
        color: '#FFFFFF',
        fontSize: 40,
        fontFamily: 'Arial',
    },

    notif: {
        color: '#FFFFFF',
        fontSize: 28,
        marginLeft: 7 / 8 * windowWidth,
        paddingTop: 1 / 15 * windowHeight,

    },

    box: {
        flex: 1,
        justifyContent: "flex-start",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },

    genres: {
        width: 1 / 2.5 * windowWidth,
        height: 1 / 5.5 * windowHeight,
        alignContent: 'space-around',
        borderRadius: 50,
        overflow: 'hidden',
    },

    scrollView: {
        borderRadius: 20,
        marginTop: 1 / 4 * windowHeight,
        backgroundColor: "#693192",
        marginBottom: 1 / 2 * windowHeight,
        alignContent: "center",
        // marginHorizontal: 20,
    },

});
