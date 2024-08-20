import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PieChart from 'react-native-pie-chart';
import ProgressBar from '../component/ProgressBar'
import styles from '../styles/StatiticsStyle';
import { arrowDown } from '../utils/images';
import { useDispatch, useSelector } from 'react-redux';
import { months } from '../constant';


const Statitics = () => {
  const [selectedType, setSelectedType] = useState('expense');
  const dispatch = useDispatch();
  const selectedMonth = useSelector(state => state.transactions.selectedMonth);
  const transactions = useSelector(state => state.transactions.transactions);
  const handleMonthChange = (item) => {
    dispatch({ type: 'SELECTED_MONTH', payload: item.value });
  };

  // Filter transactions based on the selected month
  const filteredTransactions = transactions.filter(transaction => {
    const transactionMonth = new Date(transaction.date).getMonth() + 1;
    return transactionMonth === parseInt(selectedMonth) && transaction.transactionType === selectedType;;
  });

  // Calculate total income and total expenses
  const totalIncome = transactions
    .filter(transaction => transaction.transactionType === 'income')
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  const totalExpense = transactions
    .filter(transaction => transaction.transactionType === 'expense')
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  const data = [totalIncome, totalExpense, totalIncome - totalExpense];
  const isDataEmpty = data.every(value => value === 0);
  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          mode="default"
          data={months}
          labelField={"label"}
          placeholder="Month"
          onChange={handleMonthChange}
          value={selectedMonth}
          valueField="value"
          renderLeftIcon={() => (
            <Image
              source={arrowDown}
              style={styles.dropdownIcon}
            />
          )}
          renderRightIcon={() => null}
          style={styles.dropdown}
        />
      </View>
      <Chart data={data} totalAmount={totalIncome - totalExpense} isDataEmpty={isDataEmpty} />
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButtonContainer,
            selectedType === 'expense' && { backgroundColor: '#FD3C4A' }, // Red background for Expense
          ]}
          onPress={() => setSelectedType('expense')}
        >
          <Text style={[styles.toggleButtonText, selectedType === 'expense' && styles.activeButtonText]}>
            Expense
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButtonContainer,
            selectedType === 'income' && { backgroundColor: '#00A86B' }, // Green background for Income
          ]}
          onPress={() => setSelectedType('income')}
        >
          <Text style={[styles.toggleButtonText, selectedType === 'income' && styles.activeButtonText]}>
            Income
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 20 }}>
        <ProgressBar transactions={filteredTransactions} selectedType={selectedType} />
      </View>
    </View>
  );
};

const Chart = ({ data, totalAmount, isDataEmpty }) => {
  const colors = ['#FCAC12', '#7F3DFF', '#FD3C4A'];

  return (
    <View style={styles.pieContainer}>
      {!isDataEmpty ? (
        <>
          <PieChart
            widthAndHeight={190}
            series={data}
            sliceColor={colors}
            coverRadius={0.7}
            coverFill={'#FFF6E5'}
          />
          <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
        </>
      ) : (
        <Text style={styles.noDataText}>No data available</Text>
      )}
    </View>
  );
};


export default Statitics;


