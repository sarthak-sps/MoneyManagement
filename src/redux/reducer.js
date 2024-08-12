const initialState = {
    transactions: [],
    selectedMonth: "month",
    selectedCategory: "All"

};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        case 'SELECTED_MONTH':
            return {
                ...state,
                selectedMonth: action.payload
            }
        case 'SELECTED_CATEGORY':
            return {
                ...state,
                selectedCategory: action.payload
            }
        default:
            return state;
    }
};

export default transactionsReducer;