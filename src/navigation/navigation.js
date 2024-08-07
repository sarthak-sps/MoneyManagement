import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from "../screens/DashBoardScreen";
import HomeScreen from "../../HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import Statitics from "../screens/Statitics";
import Profile from "../screens/Profile";
import Transaction from "../screens/Transaction";
import AddTransactionScreen from "../screens/AddTransactionScreen";

const Stack = createNativeStackNavigator()
const BottomStack = createBottomTabNavigator()
const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const BottomTab = ({ navigation, route }) => {
    // Get the current route name
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'DashBoard'; // Default route
    return (
        <BottomStack.Navigator screenOptions={({ route }) => ({
            tabBarStyle: ((routeName === 'AddTransaction') ? { display: 'none' } : {})
        })}>
            <BottomStack.Screen name="DashBoard" component={DashBoardScreen} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require('../../assets/images/home.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Home'
            }} />
            <BottomStack.Screen name="Transaction" component={Transaction} options={{
                tabBarIcon: () => (
                    <Image source={require('../../assets/images/transaction.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Transaction'
            }} />
            <BottomStack.Screen name="AddTransaction" component={AddTransactionScreen} options={{
                headerShown: true,
                tabBarIcon: ({ focused }) => (
                    <View style={{ backgroundColor: '#A89696', width: 70, height: 70, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ backgroundColor: '#7F3DFF', width: 50, height: 50, borderRadius: 50, justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/add.png')} style={{ width: 25, height: 25, tintColor: focused ? 'white' : 'white', alignSelf: 'center' }}></Image>
                        </View>
                    </View>

                ), tabBarLabel: '',
                headerTitle: 'Add Transaction'
            }} />
            <BottomStack.Screen name="Stats" component={Statitics} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require('../../assets/images/pie-chart.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Statitics',
                headerTitle:'Financial Report',
                headerShown:true
            }} />
            <BottomStack.Screen name="Profile" component={Profile} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require('../../assets/images/user.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Profile'
            }} />
        </BottomStack.Navigator>
    )
}
export default Navigation;