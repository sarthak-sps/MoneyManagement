import { FlatList, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'

const Transaction = () => {

  return (
    <View style={{ backgroundColor: "#FFF6E5", flex: 1 }}>
      <FilterComponent />
      <Filterresult />
    </View>
  )
}

const FilterComponent = () => {
  const [selectedMonth, setMonth] = useState(null)
  const [selectedcategory, setSelectedCategory] = useState(false)
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
  const category = [
    { label: 'All', value: '1' },
    { label: 'Income', value: '2' },
    { label: 'Expense', value: '3' },]
  return (
    <View style={{ flexDirection: 'row', marginTop: 40, }}>
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
          borderWidth: 1,
          alignItems: 'center',
          width: 130,
          height: 40
        }}
      >
      </Dropdown>
      <Dropdown
        mode='default'
        data={category}
        labelField={"label"}
        placeholder='All'
        onChange={item => {
          setSelectedCategory(item.value);
        }}
        value={selectedcategory}
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
          borderWidth: 1,
          alignItems: 'center',
          width: 130,
          height: 40
        }}
      >
      </Dropdown>
    </View>
  )


}

const Filterresult = () => {
  const transactions = [
    {
      category: 'Food',
      description: 'Lunch at restaurant',
      amount: 25.00,
      time: '2024-08-06T12:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Transportation',
      description: 'Bus fare',
      amount: 2.50,
      time: '2024-08-06T08:30:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Entertainment',
      description: 'Movie ticket',
      amount: 15.00,
      time: '2024-08-05T19:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Groceries',
      description: 'Weekly groceries',
      amount: 60.00,
      time: '2024-08-05T17:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Utilities',
      description: 'Electricity bill',
      amount: 45.00,
      time: '2024-08-04T15:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Health',
      description: 'Pharmacy purchase',
      amount: 20.00,
      time: '2024-08-03T14:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Rent',
      description: 'Monthly rent payment',
      amount: 1200.00,
      time: '2024-08-01T10:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Fitness',
      description: 'Gym membership',
      amount: 50.00,
      time: '2024-08-01T09:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Insurance',
      description: 'Car insurance payment',
      amount: 100.00,
      time: '2024-07-30T11:00:00Z',
      transactionType: 'expense'
    },
    {
      category: 'Savings',
      description: 'Monthly savings deposit',
      amount: 200.00,
      time: '2024-07-30T08:00:00Z',
      transactionType: 'income'
    },
    {
      category: 'Salary',
      description: 'Monthly salary',
      amount: 3000.00,
      time: '2024-08-01T09:00:00Z',
      transactionType: 'income'
    },
    {
      category: 'Investment',
      description: 'Stock dividends',
      amount: 150.00,
      time: '2024-07-25T10:00:00Z',
      transactionType: 'income'
    }
  ];


  return (
    <View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', height: 90, backgroundColor: 'white', margin: 10, borderRadius: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' , width:'100%'}}>
              <Text>{item.category}</Text>
              <Text>{item.amount}</Text>
            </View>

          </View>
        )}
      >

      </FlatList>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({})