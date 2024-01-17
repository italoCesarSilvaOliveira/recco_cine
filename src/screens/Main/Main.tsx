import { DoubleDropdownComponent } from "../../components/DropdownComponent";
import { useState } from "react";
import LottieView from "lottie-react-native";
import {
  Container,
  Lottie,
  Title,
  DropDownInput,
  InputText,
  Label,
  InputComponent,
  Button,
  TextButton,
} from "../Main/style";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export function Main() {
  const [idade, setIdade] = useState<string>("");
  const [fontLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }
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
        <DoubleDropdownComponent />
      </DropDownInput>
      <InputComponent>
        <Label> Idade: </Label>
        <InputText
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
        <Button>
          <TextButton> {"Avançar >"}</TextButton>
        </Button>
      </InputComponent>
    </Container>
  );
}
