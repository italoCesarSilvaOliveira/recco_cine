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

export function Film07({ navigation }: FilmProps) {
  return (
    <Container>
      <BackgroundImage
        source={require("../../assets/images/entre_mulheres.jpg")}
      >
        <Header>
          <HeaderImageTouchable onPress={() => navigation.push("Home")}>
            <HeaderImage source={require("../../assets/icons/back.png")} />
          </HeaderImageTouchable>
        </Header>

        <HeaderLinearGradient colors={["rgba(36, 19, 50, 1)", "transparent"]}>
          <HeaderText>Entre Mulheres</HeaderText>
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
            Duração: 1 hora e 44 de filme
          </DescriptionDuration>
        </DescriptionHeader>

        <DescriptionContent>
          Baseado no livro homônimo de Miriam Toews e inspirado em eventos reais
          ocorridos na colônia de Manitoba, na Bolívia, Entre Mulheres segue as
          mulheres da comunidade religiosa que lutam para conciliar sua fé com a
          realidade. Em 2010, as mulheres da comunidade isolada seguem a
          religião da igreja Menonita, e acabam descobrindo um segredo chocante
          sobre os homens da comunidade que controlaram suas vidas e fé.
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
          
        </ActionContainer>
      </DescriptionContainer>
    </Container>
  );
}
