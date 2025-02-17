import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screen/SplashScreen";
import CarouselScreen from "../screen/CarouselScreen";

export type RootStackParamList = {
  SplashScreen: undefined;
  CarouselScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* ❌ REMOVE the `id` PROP */}
      <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
