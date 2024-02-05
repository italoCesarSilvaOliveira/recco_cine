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

export function Film12({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/top_gun.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Top Gun: Maverick</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              4,0 <StatsImage source={require("../../assets/icons/star.png")} />
            </StatsValue>
            <StatsLabel>USUÁRIOS</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsValue>2022</StatsValue>
            <StatsLabel>LANÇAMENTO</StatsLabel>
          </StatsItem>
          <StatsItem>
            <ClasificationsImage
              source={require("../../assets/icons/class-12-years.png")}
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
            Duração: 2 horas e 11 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Na sequência de Top Gun: Ases Indomáveis, acompanhamos a história de
          Pete “Maverick” Mitchell (Tom Cruise), um piloto à moda antiga da
          Marinha que coleciona muitas condecorações, medalhas de combate e
          grande reconhecimento pela quantidade de aviões inimigos abatidos nos
          últimos 30 anos.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          <Image
            style={{
              width: 80,
              height: 80,
              resizeMode: "cover",
              borderRadius: 15,
            }}
            source={require("../../assets/icons/netflix.png")}
          />
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
              borderRadius: 15,
            }}
            source={require("../../assets/icons/apple_tv.png")}
          />
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
              borderRadius: 15,
              marginLeft: 10
            }}
            source={require("../../assets/icons/paramount.png")}
          />
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
