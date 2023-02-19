import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles'

const ExpenseItem = ({ item, amount, date, id }) => {
    const navigation = useNavigation()
    const onExpensePress = () => {
        navigation.navigate('ManageExpenses', { expenseId: id });

    }
    return (
        <Pressable style={({ pressed }) => pressed && styles.pressed} android_ripple onPress={onExpensePress}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.description, styles.textBase]}>{item}</Text>
                    <Text style={styles.textBase}>{new Date(date).toDateString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpenseItem

const styles = StyleSheet.create({
    pressed: {
        opacity: .75
    },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6,
        elevation: 3
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})