import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Splash } from "../screens/Splash";
import React, { useState } from "react";
import { preventAutoHideAsync } from "expo-splash-screen";

// Induzir a splash screen a não sair automaticamente, vamos fazer isso
// de forma manual quando o vídeo acabar.
preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashComplete ? (
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        ) : (
          <Stack.Screen name="Splash" options={{headerShown: false}}>
            {(props) => <Splash {...props} onComplete={setSplashComplete} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
