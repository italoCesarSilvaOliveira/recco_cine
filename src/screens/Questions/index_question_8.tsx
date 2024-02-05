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
  LogoImage,
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

const CustomText = ({ color, children }: CustomTextProps) => {
  return <TextButton color={color}>{children}</TextButton>;
};

const CustomButton = ({
  backgroundColor,
  onPress,
  children,
}: CustomButtonProps) => {
  return (
    <ButtonChoice backgroundColor={backgroundColor} onPress={onPress}>
      {children}
    </ButtonChoice>
  );
};

type QuestionProps = {
  navigation: any;
};

export function Question08({ navigation }: QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")} />
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/danger.png")}/>

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Qual é a ameaça que você enfrenta? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton
            backgroundColor="#ffd452"
            onPress={() => navigation.push("Question11")}
          >
            <TextButton color="#FFFFFF"> Distância dos Filhos </TextButton>
          </CustomButton>
          <CustomButton
            backgroundColor="#2ebf91"
            onPress={() => navigation.push("Film07")}
          >
            <TextButton> Opressão Religiosa </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
