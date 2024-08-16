import { SET_USER, UPDATE_NAME } from "./action_type";

export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
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