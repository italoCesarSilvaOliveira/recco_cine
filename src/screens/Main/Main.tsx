import { View, Text, TextInput } from "react-native";
import { Container, Lottie, Title, DropDownInput } from "../Main/style";
import LottieView from "lottie-react-native";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useState } from "react";

export function Main() {
  const [fontLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const dataMembers = ["Aluno", "Servidor"];

  return (
    <Container>
      <Lottie>
        <LottieView
          source={require("../../../assets/animations/Main.json")}
          autoPlay
          loop
        />
      </Lottie>
      <Title> Insira algumas informações antes de começar: </Title>
      <DropDownInput>

      </DropDownInput>

      {/* Um espaço que irá depender do resultado escolhido na opção anterior */}
      {/* No caso de Aluno: Inserir o Curso */}
      {/* No caso de Servidor: Inserir o Setor */}
      {/* E nos dois casos inserir a idade */}
    </Container>
  );
}
