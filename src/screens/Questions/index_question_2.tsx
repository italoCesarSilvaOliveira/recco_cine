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

export function Question02({navigation}:QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")}/>
      <LottieFiles source={require("../../assets/images/discussion.png")}></LottieFiles>

      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Qual relacionamento é mais complicado para você? </QuestionText>
        </QuestionMain>

        <Answers>
          <CustomButton backgroundColor="rgb(255,215,0)" onPress={() => navigation.push('Question04')}>
            <TextButton color="#FFFFFF"> Familia </TextButton>
          </CustomButton>
          <CustomButton backgroundColor="rgb(255,69,0)" onPress={() => navigation.push('Question05')}>
            <TextButton> Amizade </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
