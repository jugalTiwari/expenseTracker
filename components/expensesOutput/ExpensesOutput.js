import React from 'react'
import { StyleSheet, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DATA = [
    {
        id: 'e1',
        item: 'A book', amount: 34.3454, date: new Date('2023-01-01')
    },
    {
        id: 'e2',
        item: 'A book', amount: 34.34, date: new Date('2023-01-01')
    },
    {
        id: 'e3',
        item: 'A book', amount: 134.34, date: new Date('2023-02-02')
    },
    {
        id: 'e4',
        item: 'A book', amount: 3224.34, date: new Date('2023-02-05')
    },
]

const ExpensesOutput = ({ expenses, periodName }) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DATA} periodName={periodName} />
            <ExpensesList expenses={DATA} />
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700
    }
})