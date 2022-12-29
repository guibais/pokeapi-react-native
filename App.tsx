import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "~/hooks/useCachedResources";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { PokeScreen } from "./src/screens/PokeScreen";
import { QueryClientProvider, queryClient } from "./src/utils/ReactQueryHelper";
import Toast from "react-native-toast-message";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import translationEN from "~/languages/en.json";

const Stack = createNativeStackNavigator();

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en: {
      translation: translationEN,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const { t } = useTranslation();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name={t("pokeScreen.headerTitle")}
                component={PokeScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar />
        </SafeAreaProvider>
        <Toast />
      </QueryClientProvider>
    );
  }
}
