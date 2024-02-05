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

export function Film08({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/elvis_max.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Elvis</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              2,9 <StatsImage source={require("../../assets/icons/star.png")} />
            </StatsValue>
            <StatsLabel>USUÁRIOS</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsValue>2022</StatsValue>
            <StatsLabel>LANÇAMENTO</StatsLabel>
          </StatsItem>
          <StatsItem>
            <ClasificationsImage
              source={require("../../assets/icons/class-14-years.png")}
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
            Duração: 2 horas e 39 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          A cinebiografia de Elvis Presley acompanhará décadas da vida do
          artista (Austin Butler) e sua ascensão à fama, a partir do
          relacionamento do cantor com seu controlador empresário "Coronel" Tom
          Parker (Tom Hanks). A história mergulha na dinâmica entre o cantor e
          seu empresário por mais de 20 anos em parceria, usando a paisagem dos
          EUA em constante evolução e a perda da inocência de Elvis ao longo dos
          anos como cantor.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          {/* <ActionImage style={{ width: 60, height: 60, resizeMode: 'cover' }} source={require("../../assets/icons/telecine.png")} />
            <ActionImage style={{ width: 53, height: 53, resizeMode: 'cover' }} source={require("../../assets/icons/apple_tv.png")} />
            <ActionImage style={{ width: 80, height: 80, resizeMode: 'cover' }} source={require("../../assets/icons/claro_tv.png")} /> */}
          <Image
            style={{ width: 80, height: 80, resizeMode: "cover" }}
            source={require("../../assets/icons/prime-video.png")}
          />
          <Image
            style={{ width: 57, height: 57, resizeMode: "cover", borderRadius: 13 }}
            source={require("../../assets/icons/hbo.png")}
          />
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
