import { useState } from "react";
import { StyleSheet } from "react-native";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { hideAsync } from "expo-splash-screen";

/*
   Links úteis para criação da splash screen:
    - https://docs.expo.dev/versions/latest/sdk/splash-screen/
        - O expo-splash-screen nos permite desabilitar a splash de forma
        automatica.
    
    - https://docs.expo.dev/versions/latest/sdk/av/
        - O expo-av é necessário para exibir o vídeo na nossa aplicação.
*/

type Props = {
  onComplete: (status: boolean) => void;
};

export function Splash({ onComplete }: Props) {
  const [lastStatus, setStatus] = useState<AVPlaybackStatus>(
    {} as AVPlaybackStatus
  );

  function onPlaybackStatusUpdate(status: AVPlaybackStatus) {
    if (status.isLoaded) {
      // Se o video parou isso significa que os status não são mais iguais, 
      // nesse caso, será ocultado a tela de splash.
      if (lastStatus.isLoaded !== status.isLoaded) {
        hideAsync();
      }

      // Se o video parou ele passara para dentro do onComplete true 
      if (status.didJustFinish) {
        onComplete(true);
      }
    }

    // Verifica a última atualização do vídeo
    setStatus(() => status);
  } 

  return (
    <Video
      source={require("../assets/videos/splash.mp4")}
      style={StyleSheet.absoluteFill} // Video ocupa toda tela
      resizeMode={ResizeMode.COVER}
      isLooping={false} // Não repetir o video
      onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      shouldPlay={true} // Já começar o vídeo
    />
  );
}
