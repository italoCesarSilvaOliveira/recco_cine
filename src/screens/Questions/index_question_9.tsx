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

export function Question09({navigation}:QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")}/>
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/solution.png")}/>

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Você encontra soluções para seus desafios? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton backgroundColor="#ED213A" onPress={() => navigation.push("Film08")}>
            <TextButton color="#FFFFFF"> Não Muito </TextButton>
          </CustomButton>
          <CustomButton backgroundColor="#93291E" onPress={() => navigation.push("Question12")}>
            <TextButton> Sim, Infelizmente </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
