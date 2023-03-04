import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const ExpensesOutput = ({ expenses, periodName, fallbackText }) => {
    let content = <ExpensesList expenses={expenses} />

    if (expenses.length <= 0) {
        content = <Text style={styles.fallbackText}>{fallbackText}</Text>;
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={periodName} />
            {content}
        </View>
    )
}

export default ExpensesOutput

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary700
    },
    fallbackText: {
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        marginTop: 32
    }
})