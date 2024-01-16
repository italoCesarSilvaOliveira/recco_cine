import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #151f42;
  font-size: 40px;
`;

export const Lottie = styled.View`
  width: 350px;
  height: 350px;
  margin-bottom: 50px;
`;

export const Main = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TitleArea = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 40px;
  color: #FFFFFF;
  text-align: center;
  font-family: 'Poppins_700Bold';
  font-size: 40px;
  margin-bottom: -27px;
`;

export const SubTitle = styled.Text`
  font-size: 32px;
  color: rgba(255, 255, 255, 0.2);
  font-family: 'Poppins_300Light';
`;

export const Text = styled.Text`
  font-size: 17px;
  color: #FFFFFF;
  font-weight: 300;
  align-self: center;
  font-family: "Poppins_300Light";
  text-align: center;
  padding: 1px 10px 30px;
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 17px;
  border-radius: 3px;
  background-color: black;
  margin: 25px 70px 0px;
  border-radius: 15px;
  top: 2px;
  background-color: #841584;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
  font-family: 'Poppins_400Regular';
`