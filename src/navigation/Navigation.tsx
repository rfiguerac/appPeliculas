import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movies } from '../interfaces/MovieInterface';
import { BiographyScreen } from '../screens/BiographyScreen';
import { ActorResponse } from '../interfaces/ActorInterface';
import { Cast } from '../interfaces/CreditsInterface';

export type RootStackParams={
  HomeScreen: undefined,
  DetailScreen: Movies,
  BiographyScreen: Cast,
}
const Stack = createStackNavigator<RootStackParams>();

    export const Navigation = () => {
      return (
        <Stack.Navigator 
          screenOptions={{
            headerShown:false,
            cardStyle:{
              //backgroundColor:'white',
            }
          }}
        >
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
          <Stack.Screen name="BiographyScreen" component={BiographyScreen} />        
        </Stack.Navigator>
      );
    }