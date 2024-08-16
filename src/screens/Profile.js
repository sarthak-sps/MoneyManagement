import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { accountImage, appLogo, editSymbol, exportDataImage, logoutImage, settingImage } from '../utils/images';
import styles from '../styles/ProfileStyle';
import { useDispatch, useSelector } from 'react-redux';
import { updateName } from '../redux/actions';

const Profile = () => {
  // create new object of useDispacth hook
  const dispatch = useDispatch();
  // Access the name from Redux store
  const name = useSelector(state => state.transactionsReducer.name);
  // Track edit mode
  const [isEditing, setIsEditing] = useState(false);
  // state for the new name
  const [newName, setNewName] = useState(name);
  const handleEdit = () => {
    if (isEditing) {
      // Dispatch the new name to Redux
      dispatch(updateName(newName));
    }
    // Toggle edit mode
    setIsEditing(!isEditing);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.profileImage} source={appLogo} />
        </View>
        <View style={styles.userInfo}>
          {isEditing ? (
            <TextInput
              style={styles.nameText}
              value={newName}
              onChangeText={setNewName}
            />
          ) : (
            <Text style={styles.nameText}>{name}</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleEdit}>
          <Image source={editSymbol} />
        </TouchableOpacity>
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


