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
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import i18next from './services/i18next';
import { useTranslation } from 'react-i18next'
const HomeScreen = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={require('../MoneyManagement/assets/images/applogo.png')} >
      </Image>
      <HomeText />
    </View>
  )
}

const HomeText = () => {
  const navigation = useNavigation()
  const transactions = useSelector(state => state.transactions?.transactions || []);
  const handleOnPress = () => {
    // If there are transactions (user is logged in), navigate to Dashboard
    if (transactions.length > 0) {
      navigation.navigate('BottomTab');
    } else {
      // If no transactions (user is not logged in), navigate to Login
      navigation.navigate('Login');
    }
  };
  const { t } = useTranslation();
  return (
    <View style={styles.textContainer}>
      <View style={{ flexDirection: 'column', }}>
        <Text style={styles.mainText}>{t('simple-solution')}</Text>
        <Text style={styles.subtext}>{t('counter-income')}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={styles.buttonText}>{t('continue')}</Text>
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
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  textContainer: {
    flex: 0.5,
    flexDirection: 'column',
    marginHorizontal: 30,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Inter'
  },
  subtext: {
    fontSize: 16,
    marginVertical: 20,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    height: 42,
    width: "50%",
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: "400",
    fontSize: 15,
  }
})
export default HomeScreen;
