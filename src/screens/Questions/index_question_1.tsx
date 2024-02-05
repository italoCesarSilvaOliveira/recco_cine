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

export function Question01({navigation}:QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")}/>
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/cry.png")} />

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Pronto para chorar? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton backgroundColor="#3AE94E" onPress={() => navigation.push('Question02')}>
            <TextButton color="#FFFFFF"> Já peguei o lenço </TextButton>
          </CustomButton>
          <CustomButton backgroundColor="" onPress={() => navigation.push('Question03')}>
            <TextButton> Nada de filme muito meloso </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
