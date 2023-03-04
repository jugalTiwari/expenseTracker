import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'
import ManageExpenses from './screens/ManageExpenses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expense-context';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator();

const ExpenseOverview = () => {
  return <BottomTabs.Navigator
    screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: '#fff',
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerRight: ({ tintColor }) => <IconButton icon='add' size={24} color={tintColor} onPress={() => navigation.navigate('ManageExpenses')} />
    })}
  >
    <BottomTabs.Screen
      name='RecentExpenses' component={RecentExpenses}
      options={{
        title: 'Recent Expenses',
        tabBarIcon: ({ size, color }) => <Ionicons name='hourglass' size={size} color={color} />
      }} />
    <BottomTabs.Screen name='AllExpenses'
      component={AllExpenses}
      options={{
        title: 'All Expenses',
        tabBarIcon: ({ size, color }) => <Ionicons name='calendar' size={size} color={color} />
      }} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='ExpensesOverview'
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white'
            }}
          >
            <Stack.Screen name='ManageExpenses' component={ManageExpenses}
              options={{
                title: 'Manage Expense',
                presentation: 'modal'
              }}
            />
            <Stack.Screen name='ExpensesOverview' component={ExpenseOverview} options={{
              headerShown: false
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
