import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const DashBoardScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <UpperComponent />
      <LowerComponent />
    </View>

  )
}

const UpperComponent = () => {
  return (
    <View style={{ flex: 0.5, backgroundColor: '#FFF6E5', borderBottomStartRadius: 50, borderBottomRightRadius: 50 }}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.headerLeftText}>MONDAY 9 </Text>
          <Text>NOVEMBER</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginEnd: 5 }}>
          <View style={styles.imageWrapper}>
            <Image style={styles.profileImage} source={require('../../assets/images/applogo.png')}></Image>
          </View>
          <Text style={{ fontSize: 14, verticalAlign: 'middle' }}>VISHNU</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginHorizontal: 10
        }}
      />
      <AccountBalance />
      < AccountStatus />
    </View>
  )
}

const LowerComponent = () => {
  return (
    <View style={{ flex: 0.5, backgroundColor: '#A89696' }}>
      <TabView />
      <View style={{ margin: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, color: 'black' }}>Recent Transaction</Text>
        <Text style={{ fontSize: 18, color: 'black' }}>View All</Text>
      </View>
      <RecentTransaction />
    </View>
  )
}

const AccountBalance = () => {
  return (
    <View style={styles.accountBalanceContainer}>
      <Text style={{ fontSize: 14 }}>Account Balance </Text>
      <Text style={{ fontSize: 40, fontWeight: '500', color: 'black' }}>9400.0</Text>
    </View>
  )
}

const AccountStatus = () => {
  return (
    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
      <AccountIncomeStatus />
      <AccountExpensesStatus />
    </View>

  )
}
const AccountIncomeStatus = () => {
  return (
    <View style={styles.accountIncomeContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ height: 48, width: 48, borderRadius: 17, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ marginBottom: 2 }} source={require('../../assets/images/incomeArrow.png')}></Image>
          <Image source={require('../../assets/images/camera.png')} ></Image>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ color: 'white' }}>Income</Text>
          <Text style={{ color: 'white', fontSize: 22 }}>25000</Text>
        </View>
      </View>
    </View>
  )
}

const AccountExpensesStatus = () => {
  return (
    <View style={styles.accountExpensesContainer}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ height: 48, width: 48, borderRadius: 17, backgroundColor: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ marginBottom: 2 }} source={require('../../assets/images/expense.png')}></Image>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ color: 'white' }}>Expenses</Text>
          <Text style={{ color: 'white', fontSize: 22 }}>11200</Text>
        </View>
      </View>
    </View>
  )
}


const TabView = () => {
  const tabdata = ["Today", "Week", "Month", "Year"];
  const [selectedTab, setSelectedTab] = useState(tabdata[0]);
  return (
    <View style={{ marginTop: 30, marginHorizontal: 10, borderRadius: 16, borderColor: 'white', borderWidth: 1 }}>
      <FlatList
        data={tabdata}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity style={[item === selectedTab && styles.selectedTabItem]}
              onPress={() => setSelectedTab(item)}
            >
              <Text style={item === selectedTab ? styles.selectedTabText : styles.tabText}>{item}</Text>
            </TouchableOpacity>
          </View>

        )}
        contentContainerStyle={{ width: '100%', justifyContent: "space-between" }}
        horizontal
      >
      </FlatList>
    </View>
  )
}

const RecentTransaction = () => {
  const data = [{
    id: 1,
    amount: 15000,
    category: 'Income'
  },
  {
    id: 2,
    amount: 6500,
    category: "Food",
  },
  {
    id: 3,
    amount: 2800,
    category: "Income"
  }
  ]
  const getCategoryImage = (category) => {
    switch (category) {
      case 'Income':
        return require('../../assets/images/incomeArrow.png');
      case 'Food':
        return require('../../assets/images/expense.png');
    }
  }
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', width: 350, height: 54, marginBottom: 10, borderRadius: 5, backgroundColor:'#D9D9D9',alignSelf:'center',justifyContent:'space-between',padding:10}}>
            <View style={{ flexDirection: 'row' , alignItems:'center',}}>
              <Image source={getCategoryImage(item.category)} style={{ width: 38, height: 41, marginRight: 10 }} />
              <Image source={require('../../assets/images/bi_currency-rupee.png')}></Image>
              <Text style={{fontSize:22}}>{`${item.amount}`}</Text>
            </View>
            <Text style={{verticalAlign:'middle',fontSize:15}}>{item.category}</Text>
          </View>

        )}
      >
      </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  headerLeftText: {
    fontSize: 14,
    fontWeight: '700',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
    margin: 2
  },
  imageWrapper: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#525252',
    marginVertical: 10
  },
  accountBalanceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  accountIncomeContainer: {
    backgroundColor: '#00A86B',
    width: 164,
    height: 64,
    margin: 20,
    borderRadius: 30,
    padding: 10
  },
  accountExpensesContainer: {
    backgroundColor: '#FD3C4A',
    width: 164,
    height: 64,
    margin: 20,
    borderRadius: 30,
    padding: 10
  },
  selectedTabItem: {
    paddingHorizontal: 15,
    backgroundColor: 'black',
    borderRadius: 10,
    color: 'white',
  },
  tabItem: {
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

})
export default DashBoardScreen;