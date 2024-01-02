import { View } from "react-native";
import {
  Container,
  Title,
  Lottie,
  ButtonContainer,
  ButtonText,
  Text
} from "../screens/style";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import LottieView from "lottie-react-native";

export function Home() {
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
      <Title> Bem Vindo! </Title>
      <Lottie>
        <LottieView
          source={require("../assets/animations/Welcome.json")}
          autoPlay
          loop
        />
      </Lottie>
      <View>
        <Text>
          Está tudo pronto para começar? Aperte o botão abaixo e divirta-se.
        </Text>
      </View>
      <ButtonContainer>
        <ButtonText> Aperte Aqui </ButtonText>
      </ButtonContainer>
    </Container>
  );
}
