import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View, StyleSheet } from "react-native";

import DashBoardScreen from "../screens/DashBoardScreen";
import HomeScreen from "../../HomeScreen";
import Statitics from "../screens/Statitics";
import Profile from "../screens/Profile";
import Transaction from "../screens/Transaction";
import AddTransactionScreen from "../screens/AddTransactionScreen";

const Stack = createNativeStackNavigator();
const BottomStack = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const BottomTab = ({ navigation, route }) => {
    const routeName = route.state
        ? route.state.routes[route.state.index].name
        : route.params?.screen || 'DashBoard'; // Default route

    return (
        <BottomStack.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: routeName === 'AddTransaction' ? { display: 'none' } : {},
            })}
        >
            <BottomStack.Screen
                name="DashBoard"
                component={DashBoardScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image source={require('../../assets/images/home.png')} style={styles.icon} />
                    ),
                    tabBarLabel: 'Home',
                }}
            />
            <BottomStack.Screen
                name="Transaction"
                component={Transaction}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../../assets/images/transaction.png')} style={styles.icon} />
                    ),
                    tabBarLabel: 'Transaction',
                }}
            />
            <BottomStack.Screen
                name="AddTransaction"
                component={AddTransactionScreen}
                options={{
                    headerShown: true,
                    headerTitle: 'Add Transaction',
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.addTransactionOuter}>
                            <View style={styles.addTransactionInner}>
                                <Image
                                    source={require('../../assets/images/add.png')}
                                    style={[styles.addIcon, { tintColor: 'white' }]}
                                />
                            </View>
                        </View>
                    ),
                    tabBarLabel: '',
                }}
            />
            <BottomStack.Screen
                name="Stats"
                component={Statitics}
                options={{
                    headerShown: true,
                    headerTitle: 'Financial Report',
                    tabBarIcon: () => (
                        <Image source={require('../../assets/images/pie-chart.png')} style={styles.icon} />
                    ),
                    tabBarLabel: 'Statistics',
                }}
            />
            <BottomStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <Image source={require('../../assets/images/user.png')} style={styles.icon} />
                    ),
                    tabBarLabel: 'Profile',
                }}
            />
        </BottomStack.Navigator>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
    },
    addTransactionOuter: {
        backgroundColor: '#A89696',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addTransactionInner: {
        backgroundColor: '#7F3DFF',
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
    },
    addIcon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
    },
});

export default Navigation;
