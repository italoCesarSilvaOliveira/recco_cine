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
  ActionViewImage
} from "../Films/style";

interface FilmProps {
  navigation: any; // substitua "any" pelo tipo correto, se possível
}

export function Film02({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/a_baleia.jpeg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>A Baleia</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              3,8 <StatsImage source={require("../../assets/icons/star.png")} />
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
            Duração: 1 horas e 57 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Em A Baleia, seguimos um professor de inglês e seu relacionamento
          fragilizado com sua filha, Ellie. Charlie (Brendan Fraser) é um
          professor de inglês recluso, que vive com obesidade severa e luta
          contra um transtorno de compulsão alimentar.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          <ActionViewImage>
            <ActionImage
              source={require("../../assets/icons/prime-video.png")}
            />
          </ActionViewImage>
          <ActionViewImage>
            <ActionImage source={require("../../assets/icons/claro_tv.png")} />
          </ActionViewImage>
          <ActionViewImage>
            <ActionImage source={require("../../assets/icons/apple_tv.png")} />
          </ActionViewImage>
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
