import styled from "styled-components/native";

interface ButtonChoiceProps {
  backgroundColor?: string;
}

interface CustomTextProps {
  color?: string
}

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #151f42;
  align-items: center;
  gap: 50px;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  width: 300px;
  height: 50px;
  z-index: 1;
  position: absolute;
  top: 80px;
`;

export const LottieFiles = styled.Image`
  background-color: #111111;
  width: 250px;
  height: 250px;
  margin-top: 50px;
  border-radius: 50px;
`;

export const QuestionMain = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
`;

export const Answers = styled.View`
  width: 350px;
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

export const QuestionAnswers = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

export const QuestionText = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  text-align: center;
  font-family: Montserrat_600SemiBold;
`;

export const ButtonChoice = styled.TouchableOpacity<ButtonChoiceProps>`
  background-color: ${(props) => props.backgroundColor || "#841584"};
  width: 270px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;



export const TextButton = styled.Text<CustomTextProps>`
  color: ${(props) => props.color || "#FFFFFF"};
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  font-family: Poppins_400Regular;
  padding: 5px;
  text-shadow: 2px 1px 5px rgba(0,0,0,0.3)
`;  
