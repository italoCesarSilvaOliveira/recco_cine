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

export function Film04({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/fabelmans.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Os Fabelmans</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              4,1 <StatsImage source={require("../../assets/icons/star.png")} />
            </StatsValue>
            <StatsLabel>USUÁRIOS</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsValue>2023</StatsValue>
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
            Duração: 2 horas e 31 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Em Os Fabelmans, o jovem Sammy Fabelman crescendo no Arizona
          pós-Segunda Guerra Mundial, se apaixona por filmes depois que seus
          pais o levam para ver "O Maior Espetáculo da Terra". Armado com uma
          câmera, Sammy começa a fazer seus próprios filmes em casa, para o
          deleite de sua mãe solidária.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
            {/* <ActionImage style={{ width: 60, height: 60, resizeMode: 'cover' }} source={require("../../assets/icons/telecine.png")} />
            <ActionImage style={{ width: 53, height: 53, resizeMode: 'cover' }} source={require("../../assets/icons/apple_tv.png")} />
            <ActionImage style={{ width: 80, height: 80, resizeMode: 'cover' }} source={require("../../assets/icons/claro_tv.png")} /> */}
            <Image style={{ width: 60, height: 60, resizeMode: 'cover' }} source={require("../../assets/icons/apple_tv.png")}></Image>
            <Image style={{ width: 67, height: 67, resizeMode: 'cover' }} source={require("../../assets/icons/telecine.png")}></Image>
            <Image style={{ width: 80, height: 80, resizeMode: 'cover' }} source={require("../../assets/icons/claro_tv.png")}></Image>
            
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
