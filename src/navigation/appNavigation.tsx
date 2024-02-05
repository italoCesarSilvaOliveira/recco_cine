import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home/Home";
import { Main } from "../screens/Main/Main";
import { Splash } from "../screens/Splash/Splash";
import { Question01 } from "../screens/Questions/index_question_1";
import { Question02 } from "../screens/Questions/index_question_2";
import { Question03 } from "../screens/Questions/index_question_3";
import { Question04 } from "../screens/Questions/index_question_4";
import { Question05 } from "../screens/Questions/index_question_5";
import { Question06 } from "../screens/Questions/index_question_6";
import { Question07 } from "../screens/Questions/index_question_7";
import { Question08 } from "../screens/Questions/index_question_8";
import { Question09 } from "../screens/Questions/index_question_9";
import { Question10 } from "../screens/Questions/index_question_10";
import { Question11 } from "../screens/Questions/index_question_11";
import { Question12 } from "../screens/Questions/index_question_12";
import { Question13 } from "../screens/Questions/index_question_13";
import { Film01 } from "../screens/Films/film01";
import { Film02 } from "../screens/Films/film02";
import { Film03 } from "../screens/Films/film03";
import { Film04 } from "../screens/Films/film04";
import { Film05 } from "../screens/Films/film05";
import { Film06 } from "../screens/Films/film06";
import { Film07 } from "../screens/Films/film07";
import { Film08 } from "../screens/Films/film08";
import { Film09 } from "../screens/Films/film09";
import { Film10 } from "../screens/Films/film10";
import { Film11 } from "../screens/Films/film11";
import { Film12 } from "../screens/Films/film12";
import { Film13 } from "../screens/Films/film13";
import { Film14 } from "../screens/Films/film14";


import React, { useState } from "react";
import { preventAutoHideAsync } from "expo-splash-screen";

import {
  useFonts as useFontsPoppins,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  useFonts as useFontsMontserrat,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";

// Induzir a splash screen a não sair automaticamente, vamos fazer isso
// de forma manual quando o vídeo acabar.
preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function appNavigation() {
  const [splashComplete, setSplashComplete] = useState(false);
  const [poppinsLoaded] = useFontsPoppins({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [montserratLoaded] = useFontsMontserrat({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_400Regular,
  });

  if (!poppinsLoaded || !montserratLoaded) {
    return null; // ou qualquer lógica de carregamento que você desejar
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashComplete ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question01"
              component={Question01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question02"
              component={Question02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question03"
              component={Question03}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question04"
              component={Question04}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question05"
              component={Question05}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question06"
              component={Question06}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question07"
              component={Question07}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question08"
              component={Question08}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question09"
              component={Question09}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question10"
              component={Question10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question11"
              component={Question11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question12"
              component={Question12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Question13"
              component={Question13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film01"
              component={Film01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film02"
              component={Film02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film03"
              component={Film03}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film04"
              component={Film04}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film05"
              component={Film05}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film06"
              component={Film06}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film07"
              component={Film07}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film08"
              component={Film08}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film09"
              component={Film09}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film10"
              component={Film10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film11"
              component={Film11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film12"
              component={Film12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film13"
              component={Film13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Film14"
              component={Film14}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen name="Splash" options={{ headerShown: false }}>
            {(props) => <Splash {...props} onComplete={setSplashComplete} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
