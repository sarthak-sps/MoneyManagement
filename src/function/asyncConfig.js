import AsyncStorage from "@react-native-async-storage/async-storage"

export const saveTransactions = async (transactions) => {
    try {
        await AsyncStorage.setItem('transactions', JSON.stringify(transactions));
    } catch (error) {
        console.error('Error saving transactions:', error);
    }
}

export const loadTransactions = async () => {
    try {
        const response = await AsyncStorage.getItem('transactions');
        const data = response ? JSON.parse(response) : [];
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Error loading transactions:', error);
        return [];
    }
};

