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

export function Question11({ navigation }: QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")} />
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/food.png")} />

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> Qual comida te faz se sentir bem? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton
            backgroundColor="#654ea3"
            onPress={() => navigation.push("Film01")}
          >
            <TextButton color="#FFFFFF"> Bagel de Tudo</TextButton>
          </CustomButton>
          <CustomButton
            backgroundColor="#eaafc8"
            onPress={() => navigation.push("Film02")}
          >
            <TextButton> Pizza </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
