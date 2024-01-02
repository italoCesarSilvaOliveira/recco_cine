import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #151f42;
  font-size: 40px;
  gap: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Poppins_700Bold';
  font-size: 40px;
`;

export const Lottie = styled.View`
  width: 350px;
  height: 350px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 3px;
  background-color: black;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
  font-family: 'Poppins_400Regular';
`

export const Text = styled.Text`
  font-size: 15px;
  color: #FFFFFF;
  font-weight: 300;
  align-self: center;
  font-family: "Poppins_300Light";
  letter-spacing: 1px;
`

