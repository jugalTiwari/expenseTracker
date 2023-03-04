import React, { useContext } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expense-context'

const AllExpenses = () => {
    const { expenses } = useContext(ExpensesContext);
    return (
        <ExpensesOutput periodName={'All Expenses'} expenses={expenses} fallbackText='No Expenses found!' />
    )
}

export default AllExpenses