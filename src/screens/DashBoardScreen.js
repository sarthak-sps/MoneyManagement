import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const DashBoardScreen = () => {
  const transactions = useSelector(state => state.transactionsReducer.transactions)
  const totalIncome = transactions.filter(transaction => transaction.transactionType === 'income').reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);
  const totalExpense = transactions.filter(transaction => transaction.transactionType === 'expense').reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  // const filterTransactions = transactions.filter(transaction => {
  //   const transactionDate = new Date(transaction.date);
  //   const transactionMonth = transactionDate.getMonth() + 1;
  //   const transactionYear = transactionDate.getFullYear();
  //   return transactionMonth === currentMonth && transactionYear === currentYear;
  // });

  return (
    <View style={styles.container}>
      <UpperComponent totalIncome={totalIncome} totalExpense={totalExpense} />
      <LowerComponent transactions={transactions} />
    </View>
  )
}

const UpperComponent = ({ totalIncome, totalExpense }) => {
  // Get the current date
  const currentDate = new Date();

  // Get the day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[currentDate.getDay()];

  // Get the date and month
  const currentDateNumber = currentDate.getDate();
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = monthsOfYear[currentDate.getMonth()];
  return (
    <View style={styles.upperContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerLeftText}>{currentDay} {currentDateNumber} </Text>
          <Text>{currentMonth}</Text>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.profileImage} source={require('../../assets/images/applogo.png')} />
          </View>
          <Text style={styles.profileName}>Sarthak</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <AccountBalance totalIncome={totalIncome} totalExpense={totalExpense} />
      <AccountStatus totalIncome={totalIncome} totalExpense={totalExpense} />
    </View>
  )
}

const LowerComponent = ({ transactions }) => {
  return (
    <View style={styles.lowerContainer}>
      <TabView transactions={transactions} />
      {/* <RecentTransaction /> */}
    </View>
  )
}

const AccountBalance = ({ totalIncome, totalExpense }) => {
  return (
    <View style={styles.accountBalanceContainer}>
      <Text style={styles.accountBalanceText}>Account Balance </Text>
      <Text style={styles.accountBalanceAmount}>{totalIncome - totalExpense}</Text>
    </View>
  )
}

const AccountStatus = ({ totalIncome, totalExpense }) => {
  return (
    <View style={styles.accountStatusContainer}>
      <AccountIncomeStatus totalIncome={totalIncome} />
      <AccountExpensesStatus totalExpense={totalExpense} />
    </View>
  )
}

const AccountIncomeStatus = ({ totalIncome }) => {
  return (
    <View style={styles.accountIncomeContainer}>
      <View style={styles.accountStatusRow}>
        <View style={styles.statusIconContainer}>
          <Image style={styles.statusIcon} source={require('../../assets/images/incomeArrow.png')} />
          <Image source={require('../../assets/images/camera.png')} />
        </View>
        <View style={styles.statusTextContainer}>
          <Text style={styles.statusLabelText}>Income</Text>
          <Text style={styles.statusAmountText}>{totalIncome}</Text>
        </View>
      </View>
    </View>
  )
}

const AccountExpensesStatus = ({ totalExpense }) => {
  return (
    <View style={styles.accountExpensesContainer}>
      <View style={styles.accountStatusRow}>
        <View style={styles.statusIconContainer}>
          <Image style={styles.statusIcon} source={require('../../assets/images/expense.png')} />
        </View>
        <View style={styles.statusTextContainer}>
          <Text style={styles.statusLabelText}>Expenses</Text>
          <Text style={styles.statusAmountText}>{totalExpense}</Text>
        </View>
      </View>
    </View>
  )
}

const TabView = ({ transactions }) => {
  const tabdata = ["Today", "Week", "Month", "Year"];
  const [selectedTab, setSelectedTab] = useState(tabdata[0]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const currentDate = new Date();
  const todayDate = currentDate.toISOString().split('T')[0];

  const filterListByTab = (tab) => {
    switch (tab) {
      case 'Today':
        return transactions.filter(transaction => transaction.date === todayDate);
      case 'Week':
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return transactions.filter(transaction => new Date(transaction.date) >= startOfWeek && new Date(transaction.date) <= endOfWeek);
      case 'Month':
        return transactions.filter(transaction => new Date(transaction.date).getMonth() === currentDate.getMonth() && new Date(transaction.date).getFullYear() === currentDate.getFullYear());
      case 'Year':
        return transactions.filter(transaction => new Date(transaction.date).getFullYear() === currentDate.getFullYear());
      default:
        return transactions;
    }
  }

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    const filtered = filterListByTab(tab);
    console.log(filtered);

    setFilteredTransactions(filtered);
  }
  console.log(filteredTransactions);

  return (
    <View>
      <View style={styles.tabViewContainer}>
        <FlatList
          data={tabdata}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={[item === selectedTab && styles.selectedTabItem]}
                onPress={() => handleTabPress(item)}
              >
                <Text style={item === selectedTab ? styles.selectedTabText : styles.tabText}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
          contentContainerStyle={styles.tabContentContainer}
          horizontal
        />
      </View>
      <View style={styles.recentTransactionHeader}>
          <Text style={styles.recentTransactionText}>Recent Transaction</Text>
          <Text style={styles.recentTransactionText}>View All</Text>
        </View>
        <RecentTransaction filteredTransactions={filteredTransactions} />
    </View>

  )
}

const RecentTransaction = ({ filteredTransactions }) => {
  console.log(filteredTransactions);

  const getCategoryImage = (category) => {
    switch (category) {
      case 'income':
        return require('../../assets/images/incomeArrow.png');
      case 'expense':
        return require('../../assets/images/expense.png');
    }
  }

  return (
    <View>
      <FlatList
        data={filteredTransactions}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.transactionItemLeft}>
              <Image source={getCategoryImage(item.transactionType)} style={styles.transactionCategoryIcon} />
              <Image source={require('../../assets/images/bi_currency-rupee.png')} />
              <Text style={styles.transactionAmountText}>{`${item.amount}`}</Text>
            </View>
            <Text style={styles.transactionCategoryText}>{item.category}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    flex: 0.5,
    backgroundColor: '#FFF6E5',
    borderBottomStartRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  headerLeftText: {
    fontSize: 14,
    fontWeight: '700',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    margin: 2,
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  profileName: {
    fontSize: 14,
    verticalAlign: 'middle',
    alignSelf: 'center',
  },
  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  accountBalanceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  accountBalanceText: {
    fontSize: 14,
  },
  accountBalanceAmount: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
  },
  accountStatusContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  accountIncomeContainer: {
    backgroundColor: '#00A86B',
    width: 164,
    height: 64,
    margin: 20,
    borderRadius: 30,
    padding: 10,
  },
  accountExpensesContainer: {
    backgroundColor: '#FD3C4A',
    width: 164,
    height: 64,
    margin: 20,
    borderRadius: 30,
    padding: 10,
  },
  accountStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statusIconContainer: {
    height: 48,
    width: 48,
    borderRadius: 17,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusIcon: {
    marginBottom: 2,
  },
  statusTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statusLabelText: {
    color: 'white',
  },
  statusAmountText: {
    color: 'white',
    fontSize: 22,
  },
  lowerContainer: {
    flex: 0.5,
    backgroundColor: '#A89696',
  },
  tabViewContainer: {
    marginTop: 30,
    marginHorizontal: 10,
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 1,
  },
  tabContentContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  selectedTabItem: {
    paddingHorizontal: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
  },
  selectedTabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabText: {
    color: 'white',
    fontSize: 20,
  },
  recentTransactionHeader: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentTransactionText: {
    fontSize: 18,
    color: 'black',
  },
  transactionItem: {
    flexDirection: 'row',
    width: 350,
    height: 54,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  transactionItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionCategoryIcon: {
    width: 38,
    height: 41,
    marginRight: 10,
  },
  transactionAmountText: {
    fontSize: 22,
    color: 'black',
  },
  transactionCategoryText: {
    verticalAlign: 'middle',
    fontSize: 15,
  },
});

export default DashBoardScreen;
