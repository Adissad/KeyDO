import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, ListItem, Input, Button } from 'react-native-elements';
import Modal from "react-native-modal";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function RnBScreen(props) {

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [usersList, setUsersList] = useState([]);

  const usersData = [
    { id: '0', name: 'Jack', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '35 ans', city: 'Paris', desc: '#Sport #Cuisine #Dance' },
    { id: '1', name: 'Carol', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png", gender: 'Femme', age: '27 ans', city: 'Paris', desc: '#Photographie #Yoga #Cuisine' },
    { id: '2', name: 'Christophe', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png", gender: 'Homme', age: '29 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
    { id: '3', name: 'Adissa', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png", gender: 'Femme', age: '30 ans', city: 'Paris', desc: '#Musées #Voyages #Dance' },
    { id: '4', name: 'Rémy', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png", gender: 'Homme', age: '40 ans', city: 'Paris', desc: '#Voyages #Photographie #Art' },
    { id: '5', name: 'Jay', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png", gender: 'Homme', age: '19 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
    { id: '6', name: 'Jean', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png", gender: 'Homme', age: '25 ans', city: 'Paris', desc: '#Voyages #Dance #Photographie' },
    { id: '7', name: 'Jonathan', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png", gender: 'Homme', age: '32 ans', city: 'Paris', desc: '#Photographie #Voyages #Dance' },
    { id: '8', name: 'Cyprien', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '29 ans', city: 'Paris', desc: '#Photographie #Théâtre #Cuisine' },
    { id: '9', name: 'Antoine', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '24 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
    { id: '10', name: 'Arnaud', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/pinguin_sdhh33.png", gender: 'Homme', age: '32 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
    { id: '11', name: 'John', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '38 ans', city: 'Paris', desc: '#Dance #Voyages #Photographie' },
    { id: '12', name: 'Kyle', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '27 ans', city: 'Paris', desc: '#Voyages #Photographie #Dance' },
    { id: '13', name: 'Juliette', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/cat_g0h6co.png", gender: 'Femme', age: '26 ans', city: 'Paris', desc: '#Sport #Voyages #Photographie' },
    { id: '14', name: 'Yann', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png", gender: 'Homme', age: '33 ans', city: 'Paris', desc: '#Yoga #Photographie #Voyages' },
    { id: '15', name: 'Méwen', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '25 ans', city: 'Paris', desc: '#Voyages #Photographie #Sport' },
    { id: '16', name: 'Lorenzo', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png", gender: 'Homme', age: '40 ans', city: 'Paris', desc: '#Voyages #Sport #Cuisine' },
    { id: '17', name: 'Elton', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '35 ans', city: 'Paris', desc: '#Activité manuelles #Photographie #Art' },
    { id: '18', name: 'Anaïs', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/woman_qcdude.png", gender: 'Femme', age: '27 ans', city: 'Paris', desc: '#Littérature #Voyages #Dance' },
    { id: '19', name: 'Julie', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/rabbit_agqvgi.png", gender: 'Femme', age: '25 ans', city: 'Paris', desc: '#Voyages #Photographie #Cuisine' },
    { id: '20', name: 'Willem', avatar: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/man_hsazsc.png", gender: 'Homme', age: '34 ans', city: 'Paris', desc: '#Cuisine #Art #Dance' },
  ];

  // .map() to display conversation's list
  let conversationsList = usersData.map((element, i) => {
    return (
      <View key={i}>
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.item} bottomDivider>
            <ListItem.Content style={styles.itemContent} >
              <Avatar rounded size="medium" source={{ uri: element.avatar }} />
              <ListItem.Title style={styles.title}> {element.name} </ListItem.Title>
              <ListItem.Subtitle style={styles.gender}> {element.gender} </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.age}> {element.age} </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.city}> {element.city} </ListItem.Subtitle>
              <ListItem.Subtitle style={styles.desc}> {element.desc} </ListItem.Subtitle>
            </ListItem.Content>
          </View>
        </TouchableOpacity>
      </View>
    );
  });

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
        <Ionicons style={styles.back} name='ios-arrow-back' onPress={() => { props.navigation.navigate('BottomNavigator', ('Home')) }} />

        <Text style={styles.screenTitle}>
          RnB
        </Text>


        <ScrollView>
          <Modal style={styles.modal} isVisible={isModalVisible} animationIn='fadeIn'>
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

              locations={[0, 0.5]}
              style={styles.gradient}
            >
              <Ionicons style={styles.exit} name="close-circle-outline" onPress={toggleModal} />
              <View>
                <Text style={{ color: '#FFFFFF', marginLeft: 1 / 2 * windowWidth, fontWeight: 'bold' }}>Demande d'annulation</Text>
                
                <View style={{ marginBottom: 1 / 20 * windowHeight }}>
                  <Avatar rounded size="medium" style={{ backgroundColor: "white", borderRadius: 50, borderWidth: 8, borderColor: "white", height: 100, width: 100, marginLeft: 1 / 10 * windowWidth, marginTop: 1 / 30 * windowHeight }} source={{ uri: "https://res.cloudinary.com/kiyomira/image/upload/v1627979668/dog_bj575p.png" }} ></Avatar>
                </View>
                
                <Text style={{ color: '#FFFFFF', marginLeft: 1 / 30 * windowWidth, fontWeight: 'bold' }}>Ajoutez une note pour personnaliser votre demande.</Text>
                
                <View>
                  <Input placeholder="Ajouter une note personnalisée ..." placeholderTextColor="#FFFFFF" color="#FFFFFF" style={styles.input} marginTop={1 / 10 * windowHeight} fontSize={15}></Input>
                </View>
            
                <Button style={{ color: '#FFFFFF', marginLeft: 5 / 50 * windowWidth, marginRight: 5 / 60 * windowWidth, marginTop: 1 / 15 * windowHeight, }} title="Envoyer une demande de connexion" type="clear" />
            
              </View>
            </LinearGradient>
          </Modal>
          {conversationsList}

        </ScrollView>

      </LinearGradient>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  box: {
    flex: 1,
    justifyContent: "flex-start",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  back: {
    color: '#FFFFFF',
    fontSize: 28,
    marginLeft: 1 / 15 * windowWidth,
    paddingTop: 1 / 15 * windowHeight,

  },

  screenTitle: {
    marginTop: 1 / 100 * windowHeight,
    marginBottom: 1 / 25 * windowHeight,
    marginLeft: 1 / 2.2 * windowWidth,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  item: {
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
    padding: 1 / 100 * windowHeight,
    marginVertical: 1 / 50 * windowHeight,
    marginHorizontal: 1 / 40 * windowWidth,
  },

  title: {
    flex: 1,
    marginTop: 1 / 200 * windowHeight,
    fontSize: 19,
    color: "white",
    fontStyle: "italic",
  },

  age: {
    fontSize: 15,
    color: "#FFFFFF",
    // margin: 1/30* windowHeight,
    // marginLeft: 2/6* windowWidth,
    // flexDirection: "row",
    // alignItems: "center",
    padding: 4,
    // height: 1/4*windowHeight,
  },

  desc: {
    fontSize: 15,
    color: "#FFFFFF",
    // marginBottom: 1/500* windowHeight,
    // marginLeft: 2/10* windowWidth,
    padding: 4,
  },

  city: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 4,
  },

  gender: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 4,
    // marginTop: 1/4*windowHeight
  },

  itemContent: {
    // flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    padding: 4,
    height: 1 / 4.5 * windowHeight,
  },

  modal: {
    backgroundColor: '#000000',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 1 / 5 * windowHeight,
    marginTop: 1 / 5 * windowHeight,
  },

  exit: {
    color: '#FFFFFF',
    fontSize: 28,
    marginLeft: 4 / 5 * windowWidth,
    marginTop: 1 / 50 * windowHeight,
  },

  gradient: {
    borderRadius: 50,
    height: 2 / 3.3 * windowHeight,
    width: 2 / 4.8 * windowHeight,
  },

  input: {


  },

});