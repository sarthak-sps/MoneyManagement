/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../MoneyManagement/assets/images/applogo.png')} >
      </Image>
      <HomeText navigation={navigation} />
    </View>
  )
}

const HomeText = (props) => {
  return (
    <View style={styles.textContainer}>
      <View style={{ flexDirection: 'column', marginTop: 80 }}>
        <Text style={styles.mainText}>Simple solution for {'\n'}your budget.</Text>
        <Text style={styles.subtext}>Counter and distribute the income {'\n'}correctly...</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Login')}>
        <Text style={{ color: 'white' }}>Continue</Text>
      </TouchableOpacity>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  Image: {
    flex: 0.5,
    width: widthPercentageToDP('100%'),
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50
  },
  textContainer: {
    flex: 0.5,
    flexDirection: 'column',
    margin: 20,
    alignContent: 'center'

  },
  mainText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',


  },
  subtext: {
    fontSize: 16,
    marginVertical: 10,
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    height: 42,
    width: 194,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
  }
})
export default HomeScreen;
