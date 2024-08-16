import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { accountImage, appLogo, editSymbol, exportDataImage, logoutImage, settingImage } from '../utils/images';
import styles from '../styles/ProfileStyle';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.profileImage} source={appLogo} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.usernameText}>Username</Text>
          <Text style={styles.nameText}>Sarthak Srivastava</Text>
        </View>
        <Image source={editSymbol} />
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Image source={accountImage} />
          <Text style={styles.optionText}>Account</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.option}>
          <Image source={settingImage} />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.option}>
          <Image source={exportDataImage} />
          <Text style={styles.optionText}>Export Data</Text>
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <TouchableOpacity style={styles.option}>
          <Image source={logoutImage} />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;


