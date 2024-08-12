import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
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

const categories = [
  { label: 'All', value: '1' },
  { label: 'Income', value: '2' },
  { label: 'Expense', value: '3' },
];

const Transaction = () => {
  const transactions = useSelector(state => state.transactionsReducer.transactions);
  const selectedMonthValue = useSelector(state => state.transactionsReducer.selectedMonth);
  const selectedCategoryValue = useSelector(state => state.transactionsReducer.selectedCategory);

  // Map selected values to labels
  const selectedMonth = months.find(month => month.value === selectedMonthValue)?.label || 'Select Month';
  const selectedCategory = categories.find(category => category.value === selectedCategoryValue)?.label || 'Select Category';
  return (
    <View style={styles.container}>
      <FilterComponent
        selectedMonth={selectedMonth}
        selectedCategory={selectedCategory}
      />
      <Filterresult
        transactions={transactions}
        selectedMonth={selectedMonth}
        selectedCategory={selectedCategory}

      />
    </View>
  );
};

const FilterComponent = ({ selectedMonth, selectedCategory }) => {
  const dispatch = useDispatch();

  const handleMonthChange = (item) => {
    dispatch({ type: 'SELECTED_MONTH', payload: item.value });
  };

  const handleCategoryChange = (item) => {
    dispatch({ type: 'SELECTED_CATEGORY', payload: item.value });
  };

  return (
    <View style={styles.filterContainer}>
      <Dropdown
        mode='default'
        data={months}
        labelField="label"
        placeholder='Month'
        onChange={item => handleMonthChange(item)}
        value={months.find(month => month.label === selectedMonth)?.value}
        valueField="value"
        renderLeftIcon={() => (
          <Image source={require('../../assets/images/arrow-down-2.png')} />
        )}
        renderRightIcon={() => null}
        style={styles.dropdown}
      />
      <Dropdown
        mode='default'
        data={categories}
        labelField="label"
        placeholder='All'
        onChange={handleCategoryChange}
        value={categories.find(category => category.label === selectedCategory)?.value}
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
const Filterresult = ({ transactions, selectedMonth, selectedCategory }) => {
  // Convert selectedMonth label to corresponding number
  const selectedMonthValue = months.find(month => month.label === selectedMonth)?.value;

  // Filter transactions based on selectedMonth and selectedCategory
  const filteredTransactions = transactions.filter(transaction => {
    const transactionMonth = new Date(transaction.date).getMonth() + 1; // getMonth() returns 0-indexed month

    // Check if the transaction matches the selected month
    const isMonthMatch = transactionMonth.toString() === selectedMonthValue;

    // Check if the transaction matches the selected category
    const isCategoryMatch = selectedCategory === 'All' || transaction.transactionType === selectedCategory.toLowerCase();

    return isMonthMatch && isCategoryMatch;
  });

  console.log({ transactions });
  console.log({ selectedMonth });
  console.log({ selectedCategory });

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };

  return (
    <View>
      <FlatList
        data={filteredTransactions}
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
              <Text style={styles.time}>{formatTime(item.timestamp)}</Text>
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
