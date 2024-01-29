import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab6bai1 from './src/Lab/Lab6/Lab6bai1';
import Detail from './src/Lab/Lab6/Detail';
import Lab6bai2 from './src/Lab/Lab6/Lab6bai2';
import Lab7 from './src/Lab/Lab7/Lab7';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab6bai1'>
        <Stack.Screen name="Lab6bai1" component={Lab6bai1} options={{ headerShown: false}} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false}} />
        <Stack.Screen name="Lab6bai2" component={Lab6bai2}  options={{ headerShown: false}}/>
        <Stack.Screen name="Lab7" component={Lab7} options={{ headerShown: false}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;