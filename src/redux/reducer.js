const initialState = {
    transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            };
        default:
            return state;
    }
};

export default transactionsReducer;