import React from 'react'
import { Text } from 'react-native'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput'

const RecentExpenses = () => {
    return (
        <ExpensesOutput periodName={'Last 7 days'} />
    )
}

export default RecentExpenses