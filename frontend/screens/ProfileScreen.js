import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements/dist/input/Input";
import {connect} from 'react-redux';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ProfileScreen(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userExists, setUserExists] = useState(false)
  const [signUpUsername, setSignUpUsername] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [myAvatar, setMyAvatar] = useState(false);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [userCity, setUserCity] = useState('')

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [valueMusic, setValueMusic] = useState([]);
  const [openMusic, setOpenMusic] = useState(false);
  const [selectMusic, setSelectMusic] = useState([
    { label: "Dance", value: "dance" },
    { label: "RnB", value: "rnb" },
    { label: "Hip-hop", value: "hip-hop" },
    { label: "Latino", value: "latino" },
    { label: "Jazz", value: "jazz" },
    { label: "Soul", value: "soul" },
    { label: "Rock", value: "rock" },
    { label: "Classique", value: "classique" },
    { label: "Reggae/ Dancehall", value: "reggae/ dancehall" },
    { label: "Pop", value: "pop" },
    { label: "Variété française", value: "variété française" },
    { label: "Métal", value: "métal" },
    { label: "Funk", value: "funk" },
    { label: "Folk & Acoustique", value: "folk & acoustique" },
    { label: "Blues", value: "blues" },
    { label: "Country", value: "country" },
    { label: "Afro beat", value: "afro beat" },
    { label: "Décennies", value: "décennies" },
    { label: "Gospel", value: "gospel" },
  ]);

  const [valueInterest, setValueInterest] = useState([]);
  const [openInterest, setOpenInterest] = useState(false);
  const [selectInterest, setselectInterest] = useState([
    { label: "Voyages", value: "voyages" },
    { label: "Musées", value: "musées" },
    { label: "Sport", value: "Sport" },
    { label: "Yoga", value: "yoga" },
    { label: "Littérature", value: "littérature" },
    { label: "Activités manuelles", value: "activités manuelles" },
    { label: "Histoire", value: "histoire" },
    { label: "Art", value: "art" },
    { label: "Photographie", value: "photographie" },
    { label: "Théâtre", value: "théâtre" },
    { label: "Cuisine", value: "cuisine" },
    { label: "Danse", value: "danse" },
  ]);

  // console.log("token ok props",props.token);
  var selection = async (token) => {
    // console.log("funtion token", token)
    const data = await fetch('http://172.17.1.106:3000/users/profile', {
      method: 'PUT',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `token=${token}&name=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}&age=${selectedAge}&gender=${selectedGender}&city=${userCity}`
    })

  const body = await data.json()
  // if(body.result == true){
  //   props.addToken(body.token)
  //   setUserExists(true)}
  }


  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#2464A2", "#693192"]}
        start={{
          x: 0,
          y: 0.25,
        }}
        end={{
          x: 0.5,
          y: 1,
        }}
        locations={[0, 0.7]}
        style={styles.box}
      >
        <TouchableOpacity>
          <View
            style={{
              marginTop: (1 / 10) * windowHeight,
            }}
          >
            <Avatar
            onPress={() => {
              if (myAvatar) {
              setMyAvatar(true);
                }}}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginTop: (1 / 18) * windowHeight,
            paddingRight: (1 / 2) * windowWidth,
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            height: "auto",
          }}
        >
          <Button
            buttonStyle={{ backgroundColor: "#693192" }}
            title="Choisi ton avatar"
            onPress={toggleModal}
          />

          <Modal isVisible={isModalVisible}>
            <ScrollView style={styles.scrollView}>
              <TouchableOpacity>
              <Image
                  rounded
                  source={require("../assets/woman.png")}
                  activeOpacity={0.7}
                  width={20}
                  height={20}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  rounded
                  source={require("../assets/man.png")}
                  onPress={() => setMyAvatar(true)}
                  activeOpacity={0.7}
                  width={20}
                  height={20}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  rounded
                  source={require("../assets/pinguin.png")}
                  onPress={() => console.log("Works3!")}
                  activeOpacity={0.7}
                  width={20}
                  height={20}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  rounded
                  source={require("../assets/dog.png")}
                  onPress={() => console.log("Works4!")}
                  activeOpacity={0.7}
                  width={20}
                  height={20}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  rounded
                  source={require("../assets/rabbit.png")}
                  onPress={() => console.log("Works6!")}
                  activeOpacity={0.7}
                  width={20}
                  height={20}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  rounded
                  source={require("../assets/pinguin.png")}
                  onPress={() => console.log("Works6!")}
                  activeOpacity={0.7}
                  width={5}
                  height={5}
                />
              </TouchableOpacity>
              

              <Button title="Terminé" onPress={toggleModal} />
            </ScrollView>
          </Modal>
        </View>

        <View>
          <Input
            //   style={{ paddingLeft: 20 }}
            placeholder="Name"
            placeholderTextColor="white"
            color="white"
          />

          <Picker
            selectedValue={selectedAge}
            style={{ height: 50, width: 150, color:"#FFFFFF" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedAge(itemValue) 
            }
          >
            <Picker.Item label="Age" value="age" />
            <Picker.Item label="18 ans" value="18 ans" />
            <Picker.Item label="19 ans" value="19 ans" />
            <Picker.Item label="20 ans" value="20 ans" />
            <Picker.Item label="21 ans" value="21 ans" />
            <Picker.Item label="22 ans" value="22 ans" />
            <Picker.Item label="23 ans" value="23 ans" />
            <Picker.Item label="24 ans" value="24 ans" />
            <Picker.Item label="25 ans" value="25 ans" />
            <Picker.Item label="26 ans" value="26 ans" />
            <Picker.Item label="27 ans" value="27 ans" />
            <Picker.Item label="28 ans" value="28 ans" />
            <Picker.Item label="29 ans" value="29 ans" />
            <Picker.Item label="30 ans" value="30 ans" />
            <Picker.Item label="31 ans" value="31 ans" />
            <Picker.Item label="32 ans" value="32 ans" />
            <Picker.Item label="33 ans" value="33 ans" />
            <Picker.Item label="34 ans" value="34 ans" />
            <Picker.Item label="35 ans" value="35 ans" />
            <Picker.Item label="36 ans" value="36 ans" />
            <Picker.Item label="37 ans" value="37 ans" />
            <Picker.Item label="38 ans" value="38 ans" />
            <Picker.Item label="39 ans" value="39 ans" />
            <Picker.Item label="40 ans" value="40 ans" />
          </Picker>

          <Picker
            selectedValue={selectedGender}
            style={{ height: 50, width: 150, color:"#FFFFFF" }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGender(itemValue) 
            }
          >
            <Picker.Item label="Genre" value="genre" />
            <Picker.Item label="Femme" value="femme" />
            <Picker.Item label="Homme" value="homme" />
          </Picker>

          <Input
            //   style={{ paddingLeft: 20 }}
            placeholder="City"
            placeholderTextColor="white"
            color="white"
            onChangeText={(value) => setUserCity(value)}
            value={userCity}
          />
        </View>

        <View
          style={{
            marginTop: (1 / 12) * windowHeight,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "auto",
          }}
        >
          <DropDownPicker
            multiple={true}
            min={0}
            max={5}
            open={openMusic}
            value={valueMusic}
            items={selectMusic}
            setOpen={() => setOpenMusic(!openMusic)}
            setValue={setValueMusic}
            setItems={setSelectMusic}
          />
        </View>

        <View
          style={{
            marginTop: (1 / 10) * windowHeight,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "auto",
          }}
        >
          <DropDownPicker
            multiple={true}
            min={0}
            max={3}
            open={openInterest}
            value={valueInterest}
            items={selectInterest}
            setOpen={() => setOpenInterest(!openInterest)}
            setValue={setValueInterest}
            setItems={setselectInterest}
          />
        </View>

        <View style={{marginTop:1/35*windowHeight,flexDirection:"row", justifyContent: "space-around", alignItems:"center"}}>
        <Button onPress={() => {selection(props.token)}} buttonStyle={{backgroundColor:"#CF779E"}} title="Valider" />
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    letterSpacing: 0,
    lineHeight: 1.2,
    justifyContent: "center",

    // fontFamily: ,
  },

  box: {
    flex: 1,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  scrollView: {
    backgroundColor: "#693192",

    marginHorizontal: 20,
  },
});

function mapStateToProps(state) {
  //console.log('hi', state);
  return { token : state.token }
  }

function mapDispatchToProps(dispatch) {
  return {
    addToken: function(token) {
      dispatch( {type: 'addToken',
            addToken: token
                              })
    }
  }
 }

 export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
