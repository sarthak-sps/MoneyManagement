import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={{ backgoundColor: '#FFF6E5', flex:1 }}>
      <View style={{ marginVertical:100,marginHorizontal:20,flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'blue',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
      }}>
        <Image style={{
          width: 80,
          height:80,
          borderRadius: 40,
          alignSelf: 'center',
          margin: 2
        }} source={require('../../assets/images/applogo.png')}></Image>
      </View>
      <View style={{alignSelf:'center'}}>
        <Text style={{fontSize:14}}>Username</Text>
        <Text style={{fontSize:24,fontWeight:600,color:'black'}}>Vishnu P V</Text>
      </View>
      <Image source={require('../../assets/images/edit.png')}></Image>
      </View>

      <View style={{backgroundColor:'white',flex:0.9,marginHorizontal:10,borderRadius:24}}>
        <TouchableOpacity style={{margin:20, flexDirection:'row'}}>
        <Image source={require('../../assets/images/account.png')}></Image>
        <Text style={{textAlignVertical:'center',marginLeft:10,fontSize:16,color:'black',fontWeight:500}}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:20, flexDirection:'row'}}>
        <Image source={require('../../assets/images/setting.png')}></Image>
        <Text style={{textAlignVertical:'center',marginLeft:10,fontSize:16,color:'black',fontWeight:500}}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:20, flexDirection:'row'}}>
        <Image source={require('../../assets/images/exportData.png')}></Image>
        <Text style={{textAlignVertical:'center',marginLeft:10,fontSize:16,color:'black',fontWeight:500}}>Export Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin:20, flexDirection:'row'}}>
        <Image source={require('../../assets/images/logout.png')}></Image>
        <Text style={{textAlignVertical:'center',marginLeft:10,fontSize:16,color:'black',fontWeight:500}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})