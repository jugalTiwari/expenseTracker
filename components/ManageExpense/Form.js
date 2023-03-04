import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import Button from '../UI/Button'

import Input from './Input'

const Form = ({ expenseId, onCancel, onSubmit, defaultValues }) => {
    const [values, setValues] = useState({
        amount: defaultValues?.amount.toString(), date: defaultValues?.date.toISOString().slice(0, 10), description: defaultValues?.description
    })
    const [errors, setErrors] = useState({})
    const onChange = (name, value) => {
        setValues({ ...values, [name]: value })
        setErrors({ ...errors, [name]: false })
    }

    const submitHandler = () => {
        const expenseData = {
            amount: +values.amount,
            date: new Date(values.date),
            description: values.description || ''
        }
        const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const isDateValid = expenseData.date.toString() !== 'Invalid Date';
        const isDescriptionValid = expenseData.description.trim().length > 0;

        if (isAmountValid && isDateValid && isDescriptionValid) {
            onSubmit(expenseData)
        }
        else {
            setErrors({ amount: !isAmountValid, date: !isDateValid, description: !isDescriptionValid })
        }
    }

    return (
        <View>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.container}>
                <Input
                    label='Amount'
                    style={styles.flexInput}
                    hasError={errors['amount']}
                    textConfig={{
                        value: values['amount'],
                        keyboardType: 'decimal-pad',
                        onChangeText: (value) => onChange('amount', value),
                        name: 'amount'
                    }} />
                <Input
                    style={styles.flexInput}
                    label='Date'
                    hasError={errors['date']}
                    textConfig={{
                        value: values['date'],
                        onChangeText: (value) => onChange('date', value),
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10
                    }} />
            </View>
            <Input
                label='Description'
                hasError={errors['description']}
                textConfig={{
                    value: values['description'],
                    onChangeText: (value) => onChange('description', value),
                    multiline: true,
                    numberOfLines: 3,
                }} />
            <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>{expenseId ? 'Update' : 'Add'}</Button>
            </View>
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginVertical: 12
    },
    flexInput: {
        flex: 1
    },
    buttons: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginHorizontal: 4,
        minWidth: 120
    }
})