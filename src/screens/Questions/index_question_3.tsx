import { Text } from "react-native";
import React, { ReactNode } from "react";
import {
  Container,
  LottieFiles,
  Answers,
  QuestionMain,
  QuestionText,
  ButtonChoice,
  TextButton,
  QuestionAnswers,
  LogoImage
} from "./style";

import LottieView from "lottie-react-native";

interface CustomButtonProps {
  backgroundColor?: string;
  onPress: () => void;
  children?: ReactNode;
}

interface CustomTextProps {
  color: string;
  children?: ReactNode;
}

const CustomText = ({color, children}:CustomTextProps) => {
  return (
    <TextButton color={color}>
      {children}
    </TextButton>
  )
}

const CustomButton = ({ backgroundColor, onPress, children}:CustomButtonProps) => {
  return (
    <ButtonChoice backgroundColor={backgroundColor} onPress={onPress}>
      {children}
    </ButtonChoice>
  );
};

type QuestionProps = {
  navigation: any;
}

export function Question03({navigation}:QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")}/>
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/vault_crazy.png")} />

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Que tal um bando de ricaços malucos? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton backgroundColor="rgb(0,0,205)" onPress={() => navigation.push("Question06")}>
            <TextButton color="#FFFFFF"> Parece Divertido </TextButton>
          </CustomButton>
          <CustomButton backgroundColor="	rgb(255,20,147)" onPress={() => navigation.push("Question07")}>
            <TextButton> Parece Chato </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
