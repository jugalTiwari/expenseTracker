import React, { useEffect } from 'react'
import { Text } from 'react-native'

const ManageExpenses = ({ route, navigation }) => {
    const { expenseId } = route.params || {};

    useEffect(() => {
        navigation.setOptions({
            title: expenseId ? 'Edit Expense' : 'Add Expense'
        })
    }, [expenseId, navigation])

    return (
        <Text>ManageExpenses</Text>
    )
}

export default ManageExpenses