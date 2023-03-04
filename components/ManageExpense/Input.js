import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { GlobalStyles } from '../../constants/styles';

const Input = ({ label, textConfig, style, hasError = false }) => {
    const inputStyles = [styles.input];

    if (textConfig && textConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    if (hasError) {
        inputStyles.push(styles.inputError)
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={[styles.label, hasError && styles.errorLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textConfig} />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: {
        color: GlobalStyles.colors.primary100,
        marginBottom: 2,
        fontSize: 12
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    errorLabel: {
        color: GlobalStyles.colors.error500
    },
    inputError: {
        backgroundColor: GlobalStyles.colors.error50
    }
})