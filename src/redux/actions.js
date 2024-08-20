import { ADD_TRANSACTION, RESET_STORE, SET_USER, UPDATE_NAME } from "./action_type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const addTransaction = (transaction) => ({
    type: ADD_TRANSACTION,
    payload: transaction,
});
export const updateName = (name) => ({
    type: UPDATE_NAME,
    payload: name,
});

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const logout = () => async (dispatch) => {
    try {
        // Clear AsyncStorage
        await AsyncStorage.clear();
        console.log("clear AsyncStorage: ");
        // Dispatch an action to reset the Redux store
        dispatch({ type: RESET_STORE });
    } catch (err) {
        console.error("Failed to clear AsyncStorage: ", err);
    }
};