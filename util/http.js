import axios from 'axios';

const url = 'https://react-native-expense-tra-4fae3-default-rtdb.asia-southeast1.firebasedatabase.app/'
const expensesUri = '/expenses.json';

export function storeExpense(expenseData) {
    axios.post(url + '/expenses.json', expenseData)
}

export async function fetchExpenses() {
    const response = await axios.get(url + expensesUri);
    const expenses = []
    for (let key in response.data) {
        expenses.push({
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        })
    }
    return expenses;
}