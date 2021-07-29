import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions, Button, Image, ScrollView, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import Modal from "react-native-modal";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Input } from "react-native-elements/dist/input/Input";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ProfileScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

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
        <View style={{
            marginTop: (1 /10) * windowHeight}}>
          <Avatar
          rounded
          onPress={toggleModal}
          source={require('../assets/woman.png')}
          width={20}
          height={20}
          />
          </View>
        </TouchableOpacity>

        
        <View
          style={{
            marginTop: (1 / 8) * windowHeight,
            paddingRight: (1 / 2) * windowWidth,
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            height: "auto",
          }}
        >
          <Button buttonStyle={{backgroundColor:"#693192"}} title="Choose your avatar" onPress={toggleModal} />

          <Modal isVisible={isModalVisible}>
          <ScrollView style={styles.scrollView}>

            <TouchableOpacity>
            <Image
            rounded
            source={require('../assets/woman.png')}
            onPress={() => console.log("Works1!")}
            activeOpacity={0.7}
            width={20}
            height={20}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            rounded
            source={require('../assets/man.png')}
            onPress={() => console.log("Works2!")}
            activeOpacity={0.7}
            width={20}
            height={20}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            rounded
            source={require('../assets/pinguin.png')}
            onPress={() => console.log("Works3!")}
            activeOpacity={0.7}
            width={20}
            height={20}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            rounded
            source={require('../assets/dog.png')}
            onPress={() => console.log("Works4!")}
            activeOpacity={0.7}
            width={20}
            height={20}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            rounded
            source={require('../assets/rabbit.png')}
            onPress={() => console.log("Works6!")}
            activeOpacity={0.7}
            width={20}
            height={20}
            />
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            rounded
            source={require('../assets/pinguin.png')}
            onPress={() => console.log("Works6!")}
            activeOpacity={0.7}
            width={5}
            height={5}
            />      
            </TouchableOpacity>

              <Button title="Done" onPress={toggleModal} />
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
              <Input
            //   style={{ paddingLeft: 20 }}
              placeholder="Age"
              placeholderTextColor="white"
              color="white"
              />
              <Input
            //   style={{ paddingLeft: 20 }}
              placeholder="Gender"
              placeholderTextColor="white"
              color="white"
              />
              <Input
            //   style={{ paddingLeft: 20 }}
              placeholder="City"
              placeholderTextColor="white"
              color="white"
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
    backgroundColor: '#693192',
    marginHorizontal: 20,
  },
});
