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

export function Question06({ navigation }: QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")} />
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/images/banc.png")} />
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText> E com assassinatos? </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton
            backgroundColor=" #544a7d"
            onPress={() => navigation.push("Film14")}
          >
            <TextButton color="#FFFFFF">
              {" "}
              Não. Apenas sexo, drogas e rock'n roll{" "}
            </TextButton>
          </CustomButton>
          <CustomButton
            backgroundColor="	#ffd452"
            onPress={() => navigation.push("Question13")}
          >
            <TextButton> Sim </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
