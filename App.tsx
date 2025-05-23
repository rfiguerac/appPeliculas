import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { FaceScreen } from './src/screens/FaceScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({children}: any) =>{

  return(
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation/>
      </AppState>
        {/* <FaceScreen/> */}
    </NavigationContainer>
  )
}

export default App;
