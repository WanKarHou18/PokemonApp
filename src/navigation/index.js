//third-party
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//this project
import Home from '../views/HomeScreen'
import { Detail } from '../views/DetailScreen';

import BackButton from '../components/BackButton';

export function RootNavigator() {
  const Stack = createStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="home" 
        component={Home} 
        options={{
          title :''
          // headerShown: false,
        }}
      />
      <Stack.Screen name="detail"
        headerShown = {false}
        component = {Detail}
        options = {{
          title: '',
          headerLeft: () => (
              <BackButton
                navigation={navigation}
                iconWidth={35}
                iconColor={"black"}
              />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
