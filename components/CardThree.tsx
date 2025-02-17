import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Roboto_300Light } from "@expo-google-fonts/roboto";

const CardThree: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return null; // Prevent rendering until fonts load
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>
        <Text style={styles.monitor}>Monitor</Text>
        <Text style={styles.web}>web</Text>
        <Text style={styles.suffix}>24x7</Text>
      </Text>

      <Image
        source={require("../assets/images/illustration2.png")}
        style={styles.image}
      />

      <Text style={styles.mergeText}>
        <Text style={styles.highlightedText}>5X faster</Text>
        <Text style={styles.ecosystem}> Mdetection & SSL</Text>
      </Text>
      <Text style={styles.welcomeText}> monitoring.</Text>

      <Text style={styles.description}>
        Get 5X faster downtime detection with recuring notification, SSL &
        background job monitoring and much more.
      </Text>

      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={["#EF1133", "#5A00D1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradient}
        >
          {" "}
          <Text style={styles.buttonText}>Register for FREE!</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate("Login")}> */}
      <Text style={styles.loginText}>I already have an account</Text>
      {/* </TouchableOpacity> */}

      {/* <View style={styles.pagination}>
        <View style={[styles.dot, { backgroundColor: "#ffffff" }]} />
        <View style={[styles.dot, { backgroundColor: "#888888" }]} />
        <View style={[styles.dot, { backgroundColor: "#888888" }]} />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0033",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  monitor: {
    color: "#8A00D4",
  },
  web: {
    color: "#ff2b4b",
  },
  suffix: {
    color: "#ffffff",
  },
  image: {
    width: 260,
    height: 262,
    resizeMode: "contain",
    marginBottom: 20,
  },
  welcomeText: {
    fontFamily: "Roboto_300Light",
    fontSize: 24, // Adjust based on `Headline Medium`
    lineHeight: 32, // Adjust based on `Headline Medium/Line Height`
    letterSpacing: 0.15, // Adjust based on `Headline Small/Tracking`
    color: "#ffffff",
    textAlign: "left",
    marginLeft: 22,

    alignSelf: "flex-start",
  },
  ecosystem: {
    fontSize: 22,
    color: "#ffffff",
    marginBottom: 10,
    fontFamily: "Roboto_300Light",

    // textAlign: "left",
    // alignSelf: "flex-start",
    // marginLeft: 23,
  },
  mergeText: {
    fontFamily: "Roboto_300Light",
    fontSize: 24, // Adjust based on `Headline Medium`
    lineHeight: 32, // Adjust based on `Headline Medium/Line Height`
    letterSpacing: 0.15,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 23,
  },
  highlightedText: {
    fontSize: 22,
    color: "#ff2b4b",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "Roboto_300Light",

    // textAlign: "left",
    // alignSelf: "flex-start",
    // marginLeft: 23,
  },
  description: {
    marginTop: 12,

    color: "#CCCCCC",
    fontSize: 14,
    lineHeight: 20,
    // textAlign: "center",
    marginBottom: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 23,
    fontFamily: "Roboto", // Use the installed font
    fontWeight: "400",
  },
  button: {
    borderRadius: 32,
    overflow: "hidden",
    width: 342,
    height: 48,
    gap: "10px",
  },
  gradient: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Roboto", // Use the installed font
    fontWeight: "600",
  },
  loginText: {
    marginTop: 15,
    color: "#BBBBBB",
    fontSize: 14,
  },
  pagination: {
    flexDirection: "row",
    marginTop: 15,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
});

export default CardThree;
