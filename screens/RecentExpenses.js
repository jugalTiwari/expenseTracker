import React, { useContext } from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expense-context'

const getDateMinusDays = (date = new Date(), days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

const RecentExpenses = () => {
    const { expenses } = useContext(ExpensesContext)

    const recentExpenses = expenses.filter(expense => {
        const date7DaysAgo = getDateMinusDays(new Date(), 7)
        return expense.date > date7DaysAgo;
    })

    return (
        <ExpensesOutput periodName={'Last 7 days'} expenses={recentExpenses} fallbackText='No recent expenses found!' />
    )
}

export default RecentExpenses