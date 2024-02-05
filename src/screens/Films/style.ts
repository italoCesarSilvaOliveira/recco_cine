// styles.js
import styled from "styled-components/native";
import {
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.ScrollView`
  background-color: #241332;
`;

export const BackgroundImage = styled(ImageBackground)`
  height: ${Dimensions.get("window").height * 0.45}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  margin-top: 60px;
  align-items: center;
`;

export const HeaderImageTouchable = styled(TouchableOpacity)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
`;

export const HeaderImage = styled(Image)`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 50px;
`;

export const HeaderLinearGradient = styled(LinearGradient)`
  transform: rotate(180deg);
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  height: ${Dimensions.get("window").height * 0.16}px;
  width: ${Dimensions.get("window").width}px;
`;

export const HeaderText = styled.Text`
  transform: rotate(-180deg);
  color: #fff;
  font-size: 25px;
  margin: 0px 20px;
  text-align: center;
  align-self: center;
  font-family: Montserrat_700Bold;
  width: 400px;
`;

export const SectionStats = styled.View`
  align-items: center;
  justify-content: center;
`;

export const StatsTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const StatsTextTitle = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  font-family: Montserrat_700Bold;
`;

export const StatsHeaderImage = styled.View`
  width: 10px;
  height: 10px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px 0px;
`;

export const StatsItem = styled.View`
  align-items: center;
`;

export const StatsValue = styled.Text`
  font-size: 30px;
  font-family: Montserrat_700Bold;
  color: #fff;
`;

export const StatsImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ClasificationsImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const StatsLabel = styled.Text`
  font-size: 14px;
  font-family: Montserrat_600SemiBold;
  color: #918998;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  background-color: #352641;
  border-radius: 40px;
  margin-top: 10px;
  padding: 10px 15px;
`;

export const DescriptionHeader = styled.View`
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: 20px;
`;

export const DescriptionText = styled.Text`
  font-size: 20px;
  font-family: Montserrat_700Bold;
  color: #fff;
`;

export const DescriptionDuration = styled.Text`
  font-size: 11px;
  font-family: Montserrat_400Regular;
  color: #918998;
`;

export const DescriptionContent = styled.Text`
  font-size: 13px;
  font-family: Montserrat_400Regular;
  color: #918998;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px 15px;
  text-align: justify;
`;

export const ActionContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 14px;
`;

export const ActionText = styled.Text`
  font-size: 16px;
  font-family: Montserrat_400Regular;
  color: #fff;
  padding: 10px 0px;
`;

export const ActionImage = styled.Image`
`;

export const LineDiviser = styled.View`
  width: 300px;
  background-color: white;
  height: 1px;
  margin-bottom: 10px;
`;
