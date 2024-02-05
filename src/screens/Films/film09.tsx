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

export function Film09({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/images/avatar_caminho.jpg")}
      >
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Avatar: O Caminho da Água</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              3,2 <StatsImage source={require("../../assets/icons/star.png")} />
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
            Duração: 3 horas e 12 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Em Avatar: O Caminho da Água, sequência de Avatar (2009), após dez
          anos da primeira batalha de Pandora entre os Na'vi e os humanos, Jake
          Sully (Sam Worthington) vive pacificamente com sua família e sua
          tribo. Ele e Ney'tiri formaram uma família e estão fazendo de tudo
          para ficarem juntos, devido a problemas conjugais e papéis que cada um
          tem que exercer dentro da tribo.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          <Image
            style={{ width: 80, height: 80, resizeMode: "cover" }}
            source={require("../../assets/icons/disney.png")}
          />
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
