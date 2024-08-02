import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from "../screens/DashBoardScreen";
import HomeScreen from "../../HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Statitics from "../screens/Statitics";
import Profile from "../screens/Profile";
import Transaction from "../screens/Transaction";

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

const BottomTab = () => {
    return (
        <BottomStack.Navigator>
            <BottomStack.Screen name="DashBoard" component={DashBoardScreen} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require('../../assets/images/home.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Home'
            }} />
            <BottomStack.Screen name="Transaction" component={Transaction} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require('../../assets/images/transaction.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Transaction'
            }} />
            <BottomStack.Screen name="Stats" component={Statitics} options={{
                headerShown: false, tabBarIcon: () => (
                    <Image source={require('../../assets/images/pie-chart.png')} style={{ width: 20, height: 20 }}></Image>
                ), tabBarLabel: 'Statitics'
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