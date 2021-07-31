import React from 'react';
import { Text, StyleSheet, View, ScrollView, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function RnBScreen(props) {


  const data = [
    { id: '123', title: 'Lucy', avatar: 'avatar 1',},
    { id: '456', title: 'Mathias', avatar: 'avatar 2' },
    { id: '789', title: 'Adissa', avatar: 'avatar 3' },
    { id: '780', title: 'Clothilde', avatar: 'avatar 4' },
    { id: '781', title: 'Augustin', avatar: 'avatar 5' },
    { id: '782', title: 'Cyprien', avatar: 'avatar 6' },
    { id: '783', title: 'Antoine', avatar: 'avatar 7' },
    { id: '784', title: 'Elton', avatar: 'avatar 8' },
    { id: '785', title: 'Julie', avatar: 'avatar 9' },
    { id: '786', title: 'Yann', avatar: 'avatar 10' },
    { id: '787', title: 'Geoffroy', avatar: 'avatar 11' },
    { id: '788', title: 'Masinissa', avatar: 'avatar 12' },
    { id: '712', title: 'Thibault', avatar: 'avatar 13' },
    { id: '734', title: 'Pauline', avatar: 'avatar 14' },
    { id: '756', title: 'Amine', avatar: 'avatar 15' },
    { id: '736', title: 'Lucie', avatar: 'avatar 16' },
    { id: '765', title: 'Rémy', avatar: 'avatar 17' },
    { id: '719', title: 'Hugo', avatar: 'avatar 18' },
    { id: '732', title: 'Juliette', avatar: 'avatar 19' },
    { id: '720', title: 'Willem', avatar: 'avatar 20' },
  ];

  const Item = ({ title }) => (

    <View style={styles.item} >

      <TouchableOpacity onPress={() => { props.navigation.navigate('Chat') }} >

        <View>

          <Avatar
            rounded
            size="medium"
            // source= {{uri: "http://172.17.1.53:3000/avatar.jpg" }} TO GET IT FROM BACKEND
            source={require("./assets/fachry-zella-devandra-Lu35w8qGrQU-unsplash.jpg")}
          />

          <Text style={styles.title}>
            {title}
          </Text>

        </View>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item.title} />;

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
        <Ionicons style={styles.back} name='ios-arrow-back' onPress={() => { props.navigation.navigate('BottomNavigator',('Home') )}} />

        <Text style={styles.screenTitle}>
          RnB
        </Text>

        <ScrollView>

          <SafeAreaView style={styles.container}>

            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />

          </SafeAreaView>

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
    marginBottom: 1/25*windowHeight,
    marginLeft: 1 / 2.2 * windowWidth,
    fontSize: 20,
    fontWeight: "bold",
    color:"white",
  },

  item: {
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 0.5,
    padding: 1/100*windowHeight,
    marginVertical: 1 / 200 * windowHeight,
    marginHorizontal: 1 / 40 * windowWidth,
  },

  title: {
    fontSize: 20,
    fontStyle: "italic",
    marginLeft: 1 / 7 * windowWidth,
    marginHorizontal: 1 / 10 * windowHeight,
    color:'#FFFFFF',
  },

});