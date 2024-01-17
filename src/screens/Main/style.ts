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
  width: 300px;
  height: 120px;
  margin-top: -33px;
  flex-direction: row;
  background-color: black;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`


export const Label = styled.Text`
  background-color: white;
  height: 20px;
  left: 55px;
  z-index: 999;
`;

export const InputText = styled.TextInput`
  background-color: blue;
  height: 50px;
  width: 200px;
`;

export const Button = styled.TouchableOpacity`
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  background-color: orange;
  width: 200px;
  height: 50px;
  border-radius: 20px;
`;