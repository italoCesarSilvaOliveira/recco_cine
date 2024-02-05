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

export function Question13({ navigation }: QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")} />
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/sentiment.png")} />

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Quem você quer ridicularizar? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton
            backgroundColor="#1E9600"
            onPress={() => navigation.push("Film06")}
          >
            <TextButton color="#FFFFFF"> Barões da Técnologia </TextButton>
          </CustomButton>
          <CustomButton
            backgroundColor="#FFF200"
            onPress={() => navigation.push("Film05")}
          >
            <TextButton> Influencers </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
