import React from 'react';
import { Text, StyleSheet, View, Dimensions, Image,} from 'react-native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function StartScreen(props) {

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#FF8ABD', '#EF7365']}
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={styles.box}>
                    
                <Text h4 style={styles.text}>KeyDO</Text>
                
                <Button style={{paddingTop : 3 / 4.5 * windowWidth,}} icon={
                    <Ionicons
                        name="play-circle-outline"
                        size={45}
                        color="#FFFFFF"
                    />
                }
                    type='clear'
                    title="Let's Begin"
                    onPress={() => { props.navigation.navigate('Connexion') }}
                />
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

    text: {
        paddingLeft: 1/10.5*windowHeight,
        paddingTop: 1/3*windowHeight,
        color: '#FFFFFF',
        fontSize: 78,
        fontFamily: 'Arial',
    },

    box: {
        flex: 1,
        justifyContent: "flex-start",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
