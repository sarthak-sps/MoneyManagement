
import { loadTransactions } from "./asyncConfig";
export const fetchData = async () => {
    const data = await loadTransactions();
    return data;
};

