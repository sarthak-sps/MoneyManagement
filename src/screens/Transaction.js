import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles/TransactionStyle';
import { months, categories } from '../constant';

const Transaction = () => {
  const transactions = useSelector(state => state.transactions.transactions);
  const selectedMonthValue = useSelector(state => state.transactions.selectedMonth);
  const selectedCategoryValue = useSelector(state => state.transactions.selectedCategory);

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
    const transactionMonth = new Date(transaction.date).getMonth() + 1;

    // Check if the transaction matches the selected month
    const isMonthMatch = transactionMonth.toString() === selectedMonthValue;

    // Check if the transaction matches the selected category
    const isCategoryMatch = selectedCategory === 'All' || transaction.transactionType === selectedCategory.toLowerCase();

    return isMonthMatch && isCategoryMatch;
  });

  const formatTime = (selectedDate) => {
    const date = new Date(selectedDate);
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
              <Text style={styles.time}>{formatTime(item.date)}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Transaction;
