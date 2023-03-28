import React, { useContext, useEffect } from 'react'
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expense-context'
import { fetchExpenses } from '../util/http'

const getDateMinusDays = (date = new Date(), days) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}

const RecentExpenses = () => {
    const { expenses, setExpenses } = useContext(ExpensesContext)

    const recentExpenses = expenses.filter(expense => {
        const date7DaysAgo = getDateMinusDays(new Date(), 7)
        return expense.date > date7DaysAgo;
    })

    console.log(recentExpenses.length);
    useEffect(() => {
        async function getExpenses() {
            const exp = await fetchExpenses()
            setExpenses(exp)
        }

        getExpenses();
    }, [])


    return (
        <ExpensesOutput periodName={'Last 7 days'} expenses={recentExpenses} fallbackText='No recent expenses found!' />
    )
}

export default RecentExpenses