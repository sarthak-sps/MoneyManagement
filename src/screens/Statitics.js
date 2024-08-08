import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import PieChart from 'react-native-pie-chart';
import ProgressBar from '../component/ProgressBar'
import * as Progress from 'react-native-progress';

const Statitics = () => {
  const [selectedMonth, setMonth] = useState(null);
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

  const data = [0.55, 0.30, 0.15];
  const totalAmount = 9400.0;

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          mode="default"
          data={months}
          labelField={"label"}
          placeholder="Month"
          onChange={(item) => setMonth(item.value)}
          value={selectedMonth}
          valueField="value"
          renderLeftIcon={() => (
            <Image
              source={require('../../assets/images/arrow-down-2.png')}
              style={styles.dropdownIcon}
            />
          )}
          renderRightIcon={() => null}
          style={styles.dropdown}
        />
      </View>
      <Chart data={data} totalAmount={totalAmount} />
      <View style={styles.toggleContainer}>
        <View style={styles.toggleButtonContainer}>
          <Text style={styles.expenseButton}>Expense</Text>
        </View>
        <Text style={styles.incomeButton}>Income</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <ProgressBar />
      </View>
    </View>
  );
};

const Chart = ({ data, totalAmount }) => {
  const colors = ['#FCAC12', '#7F3DFF', '#FD3C4A'];

  return (
    <View style={styles.pieContainer}>
      <PieChart
        widthAndHeight={190}
        series={data}
        sliceColor={colors}
        coverRadius={0.7}
        coverFill={'#FFF6E5'}
      />
      <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
    </View>
  );
};


export default Statitics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF6E5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dropdown: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    borderRadius: 40,
    borderWidth: 2,
    alignItems: 'center',
    width: 130,
    height: 40,
    borderColor: '#F1F1FA',
    backgroundColor: '#FFF',
  },
  dropdownIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  pieContainer: {
    height: 190,
    width: 190,
    borderRadius: 95,
    marginVertical: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  totalAmount: {
    fontSize: 25,
    fontWeight: '700',
    position: 'absolute',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  toggleButtonContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 5,
    marginRight: 5,
  },
  expenseButton: {
    backgroundColor: '#FD3C4A',
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
  incomeButton: {
    backgroundColor: '#FFF',
    color: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    textAlign: 'center',
  },
  categoriesContainer: {
    marginTop: 20,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  categoryLabel: {
    flex: 1,
    fontSize: 16,
  },
  categoryAmount: {
    fontSize: 16,
    color: '#FD3C4A',
  },
});
