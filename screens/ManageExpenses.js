import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button'
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expense-context';
import Form from '../components/ManageExpense/Form';
import { storeExpense } from '../util/http';

const ManageExpenses = ({ route, navigation }) => {
    const { expenseId } = route.params || {};
    const { deleteExpense, updateExpense, addExpense, expenses } = useContext(ExpensesContext);
    const selectedExpense = expenses.find(expense => expense.id === expenseId)

    useEffect(() => {
        navigation.setOptions({
            title: expenseId ? 'Edit Expense' : 'Add Expense'
        })
    }, [expenseId, navigation])

    function deleteExpenseHandler(id) {
        deleteExpense(id)
        navigation.goBack()
    }

    function onCancel() {
        navigation.goBack()
    }

    function confirmHandler(expenseData) {
        if (expenseId) {
            updateExpense(expenseId, expenseData)
        } else {
            storeExpense(expenseData)
            // addExpense(expenseData)
        }
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Form expenseId={expenseId} onCancel={onCancel} onSubmit={confirmHandler} defaultValues={selectedExpense} />

            {expenseId && <View style={styles.deleteButton}>
                <IconButton icon='trash' size={36} color={GlobalStyles.colors.error500} onPress={deleteExpenseHandler.bind(null, expenseId)} />
            </View>}
        </View>
    )
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    deleteButton: {
        marginTop: 16,
        paddingTop: 8,
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: GlobalStyles.colors.primary200
    },
})