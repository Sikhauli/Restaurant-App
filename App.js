import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/components/login';
import SignUp from './src/components/signup';
import Home from './src/components/Home';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Login' options={{title:'Login'}}>
          {(props) => <Login {...props} />}
        </Stack.Screen>

        <Stack.Screen name='SignUp' options={{title:'SignUp'}}>
          {(props) => <SignUp {...props} />}
        </Stack.Screen>

        <Stack.Screen name='Home' options={{title:'Home'}}>
          {(props) => <Home {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
