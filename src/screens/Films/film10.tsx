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
  ClasificationsImage,
} from "../Films/style";

interface FilmProps {
  navigation: any; // substitua "any" pelo tipo correto, se possível
}

export function Film10({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/nada_front.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Nada de Novo no Front</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              4,3 <StatsImage source={require("../../assets/icons/star.png")} />
            </StatsValue>
            <StatsLabel>USUÁRIOS</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsValue>2022</StatsValue>
            <StatsLabel>LANÇAMENTO</StatsLabel>
          </StatsItem>
          <StatsItem>
            <ClasificationsImage
              source={require("../../assets/icons/class-16-years.png")}
            />
          </StatsItem>
        </StatsContainer>
      </SectionStats>

      <DescriptionContainer>
        <DescriptionHeader>
          <TouchableOpacity>
            <DescriptionText>Descrição</DescriptionText>
          </TouchableOpacity>
          <DescriptionDuration>
            Duração: 2 horas e 28 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Em uma adaptação do romance homônimo de Erich Maria Remarque, Nada de
          Novo no Front é uma história que segue o adolescente Paul Baumer e
          seus amigos Albert e Muller, que se alistam voluntariamente no
          exército alemão, movidos por uma onda de fervor patriótico.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          <Image
            style={{ width: 80, height: 80, resizeMode: "cover" }}
            source={require("../../assets/icons/netflix.png")}
          />
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
