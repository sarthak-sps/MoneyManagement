import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useSelector } from 'react-redux';

const Transaction = () => {
  const transactions = useSelector(state => state.transactionsReducer.transactions);
  return (
    <View style={styles.container}>
      <FilterComponent />
      <Filterresult transactions={transactions} />
    </View>
  );
};

const FilterComponent = () => {
  const [selectedMonth, setMonth] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(false);

  const months = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
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
  ];

  const category = [
    { label: 'All', value: '1' },
    { label: 'Income', value: '2' },
    { label: 'Expense', value: '3' },
  ];

  return (
    <View style={styles.filterContainer}>
      <Dropdown
        mode='default'
        data={months}
        labelField="label"
        placeholder='Month'
        onChange={item => setMonth(item.value)}
        value={selectedMonth}
        valueField="value"
        renderLeftIcon={() => (
          <Image source={require('../../assets/images/arrow-down-2.png')} />
        )}
        renderRightIcon={() => null}
        style={styles.dropdown}
      />
      <Dropdown
        mode='default'
        data={category}
        labelField="label"
        placeholder='All'
        onChange={item => setSelectedCategory(item.value)}
        value={selectedCategory}
        valueField="value"
        renderLeftIcon={() => (
          <Image source={require('../../assets/images/arrow-down-2.png')} />
        )}
        renderRightIcon={() => null}
        style={styles.dropdown}
      />
    </View>
  );
};

const Filterresult = ({ transactions }) => {
  // const transactions = [
  //   {
  //     category: 'Shopping',
  //     description: 'Lunch at restaurant',
  //     amount: 5120,
  //     time: '2024-08-06T12:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Transportation',
  //     description: 'Bus fare',
  //     amount: 250,
  //     time: '2024-08-06T08:30:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Entertainment',
  //     description: 'Movie ticket',
  //     amount: 1500,
  //     time: '2024-08-05T19:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Groceries',
  //     description: 'Weekly groceries',
  //     amount: 6000,
  //     time: '2024-08-05T17:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Utilities',
  //     description: 'Electricity bill',
  //     amount: 4500,
  //     time: '2024-08-04T15:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Health',
  //     description: 'Pharmacy purchase',
  //     amount: 2000,
  //     time: '2024-08-03T14:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Rent',
  //     description: 'Monthly rent payment',
  //     amount: 120000,
  //     time: '2024-08-01T10:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Fitness',
  //     description: 'Gym membership',
  //     amount: 5000,
  //     time: '2024-08-01T09:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Insurance',
  //     description: 'Car insurance payment',
  //     amount: 10000,
  //     time: '2024-07-30T11:00:00Z',
  //     transactionType: 'expense',
  //   },
  //   {
  //     category: 'Savings',
  //     description: 'Monthly savings deposit',
  //     amount: 20000,
  //     time: '2024-07-30T08:00:00Z',
  //     transactionType: 'income',
  //   },
  //   {
  //     category: 'Salary',
  //     description: 'Monthly salary',
  //     amount: 300000,
  //     time: '2024-08-01T09:00:00Z',
  //     transactionType: 'income',
  //   },
  //   {
  //     category: 'Investment',
  //     description: 'Stock dividends',
  //     amount: 15000,
  //     time: '2024-07-25T10:00:00Z',
  //     transactionType: 'income',
  //   },
  // ];
  console.log({transactions})
  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <View>
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <View style={styles.transactionContainer}>
            <View style={styles.transactionDetails}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.transactionAmount}>
              <Text
                style={[
                  styles.amount,
                  { color: item.transactionType === 'expense' ? 'red' : 'green' },
                ]}
              >
                {item.transactionType === 'expense' ? '-' : '+'}
                {item.amount}
              </Text>
              <Text style={styles.time}>{formatTime(item.date)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF6E5',
    flex: 1,
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  dropdown: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: 'center',
    width: 130,
    height: 40,
  },
  flatListContent: {
    paddingBottom: 50,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 90,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 24,
  },
  transactionDetails: {
    flexDirection: 'column',
    margin: 20,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 22,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
  },
  transactionAmount: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
  },
  amount: {
    fontSize: 20,
    fontWeight: '600',
  },
  time: {
    fontSize: 13,
    fontWeight: '600',
  },
});
