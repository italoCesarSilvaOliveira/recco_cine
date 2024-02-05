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

export function Question05({ navigation }: QuestionProps) {
  return (
    <Container>
      <LogoImage source={require("../../../assets/images/icon.png")} />
      {/* Lottie File */}
      <LottieFiles source={require("../../assets/icons/friend.png")} />

      {/* Pergunta Principal */}
      <QuestionAnswers>
        <QuestionMain>
          <QuestionText>
            {" "}
            Como você sabe quem é o seu melhor amigo?{" "}
          </QuestionText>
        </QuestionMain>

        {/* Botões */}
        <Answers>
          <CustomButton
            backgroundColor=" #8A2387"
            onPress={() => navigation.push("Film11")}
          >
            <TextButton color="#FFFFFF"> Bebendo todos os dias </TextButton>
          </CustomButton>
          <CustomButton
            backgroundColor="	#F27121"
            onPress={() => navigation.push("Film12")}
          >
            <TextButton> Situação de vida ou morte </TextButton>
          </CustomButton>
        </Answers>
      </QuestionAnswers>
    </Container>
  );
}
