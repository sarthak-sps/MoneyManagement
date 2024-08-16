import { saveTransactions } from '../function/asyncConfig';
import { ADD_TRANSACTION, SELECTED_MONTH, SELECTED_CATEGORY, UPDATE_NAME, SET_USER } from '../redux/action_type';

const initialState = {
    transactions: [],
    selectedMonth: "month",
    selectedCategory: "All",
    name: '',
    email: '',

};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            saveTransactions([...state.transactions, action.payload])
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        case SELECTED_MONTH:
            return {
                ...state,
                selectedMonth: action.payload
            }
        case SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SET_USER:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
            };
        default:
            return state;
    }
};

export default transactionsReducer;