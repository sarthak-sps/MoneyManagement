import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.profileImage} source={require('../../assets/images/applogo.png')} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.usernameText}>Username</Text>
          <Text style={styles.nameText}>Vishnu P V</Text>
        </View>
        <Image source={require('../../assets/images/edit.png')} />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Image source={require('../../assets/images/account.png')} />
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={require('../../assets/images/setting.png')} />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={require('../../assets/images/exportData.png')} />
          <Text style={styles.optionText}>Export Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Image source={require('../../assets/images/logout.png')} />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF6E5',
    flex: 1,
  },
  headerContainer: {
    marginVertical: 100,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    margin: 2,
  },
  userInfo: {
    alignSelf: 'center',
  },
  usernameText: {
    fontSize: 14,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  optionsContainer: {
    backgroundColor: 'white',
    flex: 0.9,
    marginHorizontal: 10,
    borderRadius: 24,
  },
  option: {
    margin: 20,
    flexDirection: 'row',
  },
  optionText: {
    textAlignVertical: 'center',
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
});
