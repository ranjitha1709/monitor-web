import React, { useRef, useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import CardOne from "../components/CardOne";
import CardTwo from "../components/CardTwo";
import CardThree from "../components/CardThree";

const { width, height } = Dimensions.get("window");

const CarouselScreen = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { id: 1, component: <CardOne /> },
    { id: 2, component: <CardTwo /> },
    { id: 3, component: <CardThree /> },
  ];

  return (
    <View style={styles.container}>
      <Carousel
     
        
        width={width}
        height={height}
        autoPlay={true}
        data={slides}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => (
          <View style={styles.slideContainer}>{item.component}</View>
        )}
      />

      {/* Pagination */}
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default CarouselScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0033",
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#ff2b4b",
  },
  inactiveDot: {
    backgroundColor: "#888888",
  },
});
