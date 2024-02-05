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
  ActionViewImage,
} from "../Films/style";

interface FilmProps {
  navigation: any; // substitua "any" pelo tipo correto, se possível
}

export function Film03({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/pinocchio.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Pinóquio por Guillermo del Toro</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              4,2 <StatsImage source={require("../../assets/icons/star.png")} />
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
            Duração: 1 horas e 57 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          A nova versão do diretor Guillermo del Toro é uma releitura sombria e
          distorcida do famoso conto de fadas de Carlo Collodi sobre o boneco de
          madeira que sonha em se tornar um menino de verdade. Situado em 1950
          na Itália comandada pelo fascismo, Pinóquio ganha a vida quando seu
          criador talha a forma de um menino em madeira.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          <ActionViewImage>
            <ActionImage
              source={require("../../assets/icons/netflix.png")}
            />
          </ActionViewImage>
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
