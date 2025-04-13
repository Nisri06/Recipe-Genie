import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import RecipeScreen from './src/screens/RecipeScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6B6B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Recipe Genie' }} 
        />
        <Stack.Screen 
          name="Recipe" 
          component={RecipeScreen} 
        />
        <Stack.Screen 
          name="Favorites" 
          component={FavoritesScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}