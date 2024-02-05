// Film01.tsx
import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  BackgroundImage,
  Header,
  HeaderImage,
  HeaderLinearGradient,
  HeaderText,
  StatsContainer,
  StatsItem,
  StatsValue,
  StatsLabel,
  DescriptionContainer,
  DescriptionHeader,
  DescriptionText,
  DescriptionDuration,
  DescriptionContent,
  ActionContainer,
  ActionText,
  ActionImage,
  HeaderImageTouchable,
  LineDiviser,
  StatsTextTitle,
  StatsTitle,
  SectionStats,
  StatsHeaderImage,
  StatsImage,
  ClasificationsImage
} from "../Films/style";

interface FilmProps {
  navigation: any; // substitua "any" pelo tipo correto, se possível
}

export function Film01({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/TETLAMT.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Tudo em Todo Lugar Ao Mesmo Tempo</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              3,4 <StatsImage source={require("../../assets/icons/star.png")} />
            </StatsValue>
            <StatsLabel>USUÁRIOS</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsValue>2022</StatsValue>
            <StatsLabel>LANÇAMENTO</StatsLabel>
          </StatsItem>
          <StatsItem>
            <ClasificationsImage source={require("../../assets/icons/class-14-years.png")} />
          </StatsItem>
        </StatsContainer>
      </SectionStats>

      <DescriptionContainer>
        <DescriptionHeader>
          <TouchableOpacity>
            <DescriptionText>Descrição</DescriptionText>
          </TouchableOpacity>
          <DescriptionDuration>Duração: 3 horas de filme</DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Em Tudo em Todo o Lugar ao Mesmo Tempo, acompanhamos uma
          sobrecarregada imigrante chinesa, Evelyn Wang (Michelle Yeoh) que com
          sua lavanderia à beira do fracasso e seu casamento com o marido
          covarde em ruínas, ela luta para lidar com tudo, incluindo um
          relacionamento ruim com seu pai crítico e sua filha (Stephanie Hsu).
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          {/* <ActionText>256</ActionText> */}
          <ActionImage source={require("../../assets/icons/prime-video.png")} />
          {/* <ActionText>256</ActionText> */}
          {/* <ActionImage source={require("../../assets/icons/back.png")} /> */}
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
