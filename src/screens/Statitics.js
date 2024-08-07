import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'

const Statitics = () => {
  const [selectedMonth, setMonth] = useState(null)
  const months = [
    { label: 'January', value: '1' },
    { label: 'Febuary', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ]
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  return (
    <View style={{ flexDirection: 'row', margin: 40, }}>
      <Dropdown
        mode='default'
        data={months}
        labelField={"label"}
        placeholder='Month'
        onChange={item => {
          setMonth(item.value);
        }}
        value={selectedMonth}
        valueField="value"
        renderLeftIcon={() => (
          <Image
            source={require('../../assets/images/arrow-down-2.png')}
          />
        )}
        renderRightIcon={() => null}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: 'row',
          marginHorizontal: 10,
          borderRadius: 40,
          borderWidth: 2,
          alignItems: 'center',
          width: 130,
          height: 40,
          borderColor: '#F1F1FA'
        }}
      >
      </Dropdown>
    </View>
  )
}

export default Statitics

const styles = StyleSheet.create({})