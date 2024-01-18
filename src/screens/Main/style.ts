import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #151f42;
  align-items: center;
  gap: 10px;
`;

export const Lottie = styled.View`
  width: 200px;
  height: 200px;
  top: 50px;
  margin-top: 100px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-family: 'Poppins_400Regular';
  font-size: 20px;
  width: 80%;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 30px;
`;

export const DropDownInput = styled.View`
  margin-top: 10px;
`;

export const InputComponent = styled.View`
  display: flex;
  /* background-color: azure; */
  width: auto;
  height: auto;
  margin-top: -25px;
  flex-direction: row;
  /* background-color: black; */
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const InputTextComponent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  position: absolute;
  background-color: white;
  height: 20px;
  z-index: 999;
  bottom: 40px;
  background-color: #151f42;
  color: #FFFFFF;
  font-size: 14px;
  width: 50px;
  /* background-color: black; */
  padding-left: 3px;
`;

export const InputText = styled.TextInput`
  /* background-color: blue; */
  height: 50px;
  width: 70px;
  border-color: #FFFFFF;
  border-width: 0.5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #841584;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 209px;
  height: 50px;
  border-radius: 15px;
`;

export const TextButton = styled.Text`
 font-size: 16px;
  color: #FFFFFF;
  font-weight: bold;
  align-self: center;
  text-transform: uppercase;
  font-family: 'Poppins_400Regular';
`;