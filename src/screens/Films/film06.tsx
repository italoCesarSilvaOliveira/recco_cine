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

export function Film06({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/glass_union.png")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Triângulo da Tristeza</HeaderText>
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
            <StatsValue>2023</StatsValue>
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
            Duração: 2 horas e 29 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Triangle of Sadness é o filme vencedor da Palma de Ouro no Festival de
          Cannes 2022. A história começa acompanhando os jovens modelos Carl
          (Harris Dickinson) e Yaya (Charlbi Dean), que estão navegando pelo
          mundo fashionista enquanto tentam se tornar influencers.
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
            style={{ width: 60, height: 60, resizeMode: "cover" }}
            source={require("../../assets/icons/apple_tv.png")}
          />
          <Image
            style={{ width: 80, height: 80, resizeMode: "cover" }}
            source={require("../../assets/icons/claro_tv.png")}
          />
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
