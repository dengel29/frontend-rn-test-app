import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo";
import { FontSource, useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { PortalProvider } from "@gorhom/portal";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync().catch(console.error);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf") as FontSource,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync().catch(console.error);
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <PortalProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </PortalProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
