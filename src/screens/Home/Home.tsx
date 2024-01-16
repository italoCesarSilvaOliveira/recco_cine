import * as React from 'react';

import {
  Container,
  Main,
  TitleArea,
  Title,
  SubTitle,
  Lottie,
  ButtonContainer,
  ButtonText,
  Text,
} from "../Home/style";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import LottieView from "lottie-react-native";
 
type HomeScreenProps = {
  navigation: any;
}

export function Home({ navigation }: HomeScreenProps) {
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
          source={require("../../../assets/animations/Welcome.json")}
          autoPlay
          loop
        />
      </Lottie>
      <Main>
        <TitleArea>
          <Title> Bem Vindo! </Title>
          <SubTitle> Recco cine </SubTitle>
        </TitleArea>
        <Text>
          Está tudo pronto para começar? Aperte o botão abaixo e divirta-se.
        </Text>
        <ButtonContainer onPress={() => {navigation.push('Main')}}>
          <ButtonText> Aperte Aqui </ButtonText>
        </ButtonContainer>
      </Main>
    </Container>
  );
}
