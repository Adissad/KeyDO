import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Dimensions, Button, Image, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, ListItem, Input } from "react-native-elements";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function ProfileScreen(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userExists, setUserExists] = useState(false)
  const [signUpUsername, setSignUpUsername] = useState('')
  // props.route.params.name
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [myAvatar, setMyAvatar] = useState('');
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [userCity, setUserCity] = useState('')
  const [selected, setSelected] = useState([]);

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
    { label: "Folk Acoustique", value: "folk acoustique" },
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

    const musicToBack = JSON.stringify(valueMusic)
    const interestToBack = JSON.stringify(valueInterest)
    const data = await fetch('http://172.17.1.106:3000/users/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `token=${token}&avatar=${myAvatar}&name=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}&age=${selectedAge}&gender=${selectedGender}&city=${userCity}&music=${musicToBack}&interest=${interestToBack}`
    })

    const body = await data.json()
    // if(body.result == true){
    //   props.addToken(body.token)
    //   setUserExists(true)}

    // var dataParse = JSON.parse(data.body)
  }


  // useEffect( () => 
  //   console.log("coucou", myAvatar), (myAvatar)
  // )

  // const avatarData = [
  //   { id: '0',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png" },
  //   { id: '1', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png" },
  //   { id: '2', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png" },
  //   { id: '3', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png"},
  //   { id: '4', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png"},
  //   { id: '5', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png" },
  //   { id: '6',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png"},
  //   { id: '7',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png" },
  //   { id: '8',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png" },
  //   { id: '9',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png" },
  //   { id: '10',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png" },
  //   { id: '11',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png" },
  //   { id: '12',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
  //   { id: '13', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png" },
  //   { id: '14', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png" },
  //   { id: '15',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png" },
  //   { id: '16',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png" },
  //   { id: '17',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png" },
  //   { id: '18',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png"},
  //   { id: '19',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png"},
  //   { id: '20',  avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png"},
  // ];


  // console.log("coucou quentin",props.route.params.name)
  // console.log("re", signUpUsername)
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
          <Ionicons name="ios-settings-outline" onPress={() => { props.navigation.navigate('Settings') }} size={24} color="#FFFFFF" style={{ marginTop: (1 / 16) * windowHeight, marginLeft: (7 / 8) * windowWidth, }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              marginTop: (1 / 22) * windowHeight,
            }}
          >
            <Image
              rounded
              source={({ myAvatar })}
              width={20}
              height={20}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginTop: (2 / 100) * windowHeight,
            marginRight: (1 / 2) * windowWidth,
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            height: "auto",
          }}
        >
          <Image
            rounded
            source={require("../assets/dog.png")}
            activeOpacity={0.7}
            width={20}
            height={20}
            value={myAvatar}
            setValue={setMyAvatar}
          />

          <Button
            buttonStyle={{ backgroundColor: "#693192" }}
            title="Choisis ton avatar"
            onPress={toggleModal}
          />

          <Modal isVisible={isModalVisible}>
            <ScrollView style={styles.scrollView}>
              <TouchableOpacity onPress={item => {
                setMyAvatar("../assets/woman.png");
                // console.log('selected', item);
              }}>
                <Image
                  rounded
                  source={require("../assets/woman.png")}
                  activeOpacity={0.7}
                  width={20}
                  height={20}
                  value={myAvatar}
                  setValue={setMyAvatar}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  rounded
                  source={require("../assets/man.png")}
                  onPress={() => console.log('wesh', myAvatar)}
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


              {/* <View>
        <TouchableOpacity>
          <View style={styles.item} bottomDivider>
            <ListItem.Content >
              <Avatar rounded size="medium" source={{ uri: avatarData.avatar }} />
            </ListItem.Content>
          </View>
        </TouchableOpacity>
      </View> */}


              <Button title="Terminé" onPress={toggleModal} />
            </ScrollView>
          </Modal>
        </View>

        <View>
          <Input
            //   style={{ paddingLeft: 20 }}
            // placeholder={props.route.params.name}
            placeholder="Mathias"
            onChangeText={(value) => setSignUpUsername(value)}
            value={signUpUsername}
            placeholderTextColor="white"
            color="white"
          />
          <Input
            //   style={{ paddingLeft: 20 }}
            placeholder="Paris"
            placeholderTextColor="white"
            color="white"
            onChangeText={(value) => setUserCity(value)}
            value={userCity}
          />

          <View style={{flexDirection:"row", }}>

            <Picker
              selectedValue={selectedAge}
              style={{ marginLeft:30 ,width: 150, color: "#FFFFFF", backgroundColor:"#FFFFFF11", borderRadius:8}}
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
              style={{marginLeft:60 ,width: 150, color: "#FFFFFF", backgroundColor:"#FFFFFF11", borderRadius:8}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedGender(itemValue)
              }
            >
              <Picker.Item label="Genre" value="genre" />
              <Picker.Item label="Femme" value="femme" />
              <Picker.Item label="Homme" value="homme" />
            </Picker>

          </View>


        </View>

        <View
          style={{
            marginTop: (1 / 20) * windowHeight,
            flexDirection: "row",
            // justifyContent: "space-around",
            // alignItems: "center",
            width: "80%",
            height: "auto",
            zIndex:1,
            marginLeft:40,
          }}
        >
          <DropDownPicker
            placeholder="Choisis tes 5 genres de musiques favoris"
            selected_items_count_text="{count} genre(s) ont été sélectionnés"
            multiple={true}
            min={0}
            max={5}
            open={openMusic}
            value={valueMusic}
            items={selectMusic}
            setOpen={() => setOpenMusic(!openMusic)}
            setValue={setValueMusic}
            setItems={setSelectMusic}
            onChange={item => {
              setValueMusic(item);
              console.log('selected', item);
            }}
            renderItem={item => _renderItem(item)}
          />
        </View>

        <View
          style={{
            marginTop: (1 / 40) * windowHeight,
            flexDirection: "row",
            justifyContent: "space-around",
            // alignItems: "center",
            width: "80%",
            height: "auto",
            marginLeft:40,
          }}
        >
          <DropDownPicker
            placeholder="Choisis tes 3 centres d'intérêts"
            multiple={true}
            min={0}
            max={3}
            open={openInterest}
            value={valueInterest}
            items={selectInterest}
            setOpen={() => setOpenInterest(!openInterest)}
            setValue={setValueInterest}
            setItems={setselectInterest}
            onChange={item => {
              setValueInterest(item);
              console.log('selected', item);
            }}
            renderItem={item => _renderItem(item)}
          />
        </View>

        <View style={{ marginTop: 1 / 35 * windowHeight, flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
          <Button onPress={() => { selection(props.token), props.navigation.navigate('Home') }} buttonStyle={{ backgroundColor: "#CF779E" }} title="Valider" />
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
    justifyContent: "center"
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
  return { token: state.token }
}

function mapDispatchToProps(dispatch) {
  return {
    addToken: function (token) {
      dispatch({
        type: 'addToken',
        addToken: token
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
