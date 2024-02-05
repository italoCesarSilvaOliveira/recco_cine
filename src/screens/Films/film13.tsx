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

export function Film13({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage source={require("../../assets/images/tar.jpg")}>
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Tár</HeaderText>
        </HeaderLinearGradient>
      </BackgroundImage>

      <SectionStats>
        <StatsContainer>
          <StatsItem>
            <StatsValue>
              3,6 <StatsImage source={require("../../assets/icons/star.png")} />
            </StatsValue>
            <StatsLabel>USUÁRIOS</StatsLabel>
          </StatsItem>
          <StatsItem>
            <StatsValue>2023</StatsValue>
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
            Duração: 2 horas e 38 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Tendo alcançado uma carreira invejável com a qual poucos poderiam
          sonhar, a renomada maestrina/compositora Lydia Tár (Cate Blanchett), a
          primeira diretora musical feminina da Filarmônica de Berlim, está no
          topo do mundo. Como regente, Lydia não apenas orquestra, mas também
          manipula.
        </DescriptionContent>

        <LineDiviser></LineDiviser>

        <ActionContainer>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: "cover",
              borderRadius: 15,
            }}
            source={require("../../assets/icons/telecine.png")}
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
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
