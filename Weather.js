import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo";
import { Ionicons } from "@expo/vector-icons";
import propTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비가 내려요",
    subtitle: "우산을 챙기세요",
    icon: "ios-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "날씨가 맑아요",
    subtitle: "나가놀아요",
    icon: "ios-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "천둥이 쳐요",
    subtitle: "도망가요",
    icon: "ios-thunderstorm"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름이 있어요",
    subtitle: "우울해하지말아요",
    icon: "ios-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈이와요",
    subtitle: "나랑 눈사람만들래?",
    icon: "ios-snow"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비가 내려요",
    subtitle: "운전 조심해요",
      icon: "ios-rainy"
  },
    Haze: {
        colors: ["#89F7FE", "gray"],
        title: "안개가 꼈어요",
        subtitle: "보고싶어요",
        icon: "ios-cloud-outline"
    }
};

function Weather({ temp, weatherName }) {
  console.log(weatherName);
  return (
    <LinearGradient
    colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
              <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}</Text>
      </View>

      <View style={styles.lower}>
              <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
              <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent", //배경색없음
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
