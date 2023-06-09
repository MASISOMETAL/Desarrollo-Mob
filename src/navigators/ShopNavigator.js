import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BreadDetailScreen from '../screens/BreadDetailScreen'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryBreadScreen from '../screens/CategoryBreadScreen'

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
            <Stack.Screen name="Inicio" component={CategoriesScreen} />
            <Stack.Screen name="Mas productos" component={CategoryBreadScreen} />
            <Stack.Screen name="Detalle" component={BreadDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ShopNavigator

