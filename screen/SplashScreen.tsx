import React, { useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigator";
import { LinearGradient } from "expo-linear-gradient";


// Define type for navigation
type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SplashScreen">;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("CarouselScreen");
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup function
  }, [navigation]);

  return (
    <LinearGradient colors={["#0D021F", "#0D021F"]} style={styles.container}>
    <Image source={require("../assets/images/logo5.png")} style={styles.logo} />
  </LinearGradient>
  );
};

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0D021F",
    },
    logo: {
      width: 362,
      height: 244,
      resizeMode: "contain",
    },
  });
  
export default SplashScreen;


