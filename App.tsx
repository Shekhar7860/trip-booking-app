
import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import {NavigationContainer, NavigatorScreenParams} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import database from '@react-native-firebase/database';
import OnBoarding from './src/screens/OnBoarding';
import Activity from './src/screens/Activity';
import PlanTrips from './src/screens/PlanTrips';
import SearchTrips from './src/screens/SearchTrips';
export type RootStackParams = {
  Home: undefined;
  Activity : undefined;
  PlanTrips : undefined;
  SearchTrips : undefined;
};
function HomeScreen() {
  useEffect(() => {
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const RootStack = createNativeStackNavigator<RootStackParams>();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={OnBoarding} />
        <RootStack.Screen name="Activity" component={Activity} />
        <RootStack.Screen name="PlanTrips" component={PlanTrips} />
        <RootStack.Screen name="SearchTrips" component={SearchTrips}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};


export default App;