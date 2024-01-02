import { Text, View } from "react-native";

export function Home() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#151F42",
      }}
    >
      <Text style={{ fontSize: 40, color: "#FFF" }}> Home </Text>
    </View>
  );
}
