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

export function Question04({navigation}:QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")}/>
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/question.png")}></LottieFiles>

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Porque é complicado? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton backgroundColor="rgb(47,79,79)" onPress={() => navigation.push("Question08")}>
            <TextButton color="#FFFFFF"> Tenho que resolver tudo </TextButton>
          </CustomButton>
          <CustomButton backgroundColor="	rgb(147,112,219)" onPress={() => navigation.push("Question09")}>
            <TextButton> Me sinto diferente </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
