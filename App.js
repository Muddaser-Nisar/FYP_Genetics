import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import DNA from './src/screens/DNA';
import Heredity from './src/screens/Heredity';
import Genes from './src/screens/Genes';
import Adenine from './src/screens/Adenine';
import ChromosomeDetails from './src/screens/ChromosomeDetails';

// import AddStudentsScreen from './src/Screens/AddStudent';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2F4F4F',
            //height: 80
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            flex: 1,
            textAlign: 'center',
          },
        }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: '',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen
          name="DNA"
          component={DNA}
          options={{
            title: 'DNA',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Heredity"
          component={Heredity}
          options={{
            title: 'Heredity',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Genes"
          component={Genes}
          options={{
            title: 'Genes',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Adenine"
          component={Adenine}
          options={{
            title: 'Adenine',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
        <Stack.Screen
          name="ChromosomeDetails"
          component={ChromosomeDetails}
          options={{
            title: 'Chromosome Details',
            headerTitleStyle: {
              alignSelf: 'flex-start',
              justifyContent: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
