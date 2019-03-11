import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

const API_KEY = "4a24eaf7d6b1819b838bceb8a300d953";

export default class App extends Component {
  state = {
    isLoaded: false, //api를 불러오면 true됨
    error: null,
    temperature:null,
    name:null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        // this.setState({
        //   //위치정보를 불러오면 isLoded가 true가 되면서 날씨화면이 뜸
        //   isLoaded: true
        //   //error:"error"
        // });
        this.getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  getWeather = (lat, lon) => {
    //네비게이터로 받아온 위도, 경도정보 매개변수를 보내 api받아옴
    fetch(
      `http://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}` 
    )
      .then(Response => Response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature:json.main.temp,
          name:json.weather[0].main,
          isLoaded:true
        })
      });
  };

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {//로딩 되면 정보 보여주고, 로딩안되면 로딩스크린보여줌
        isLoaded ? (
          <Weather weatherName={name} temp={Math.floor(temperature - 273.15)}/> //소수점버림, 
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingtext}>
              날씨정보를 불러오는 중입니다!!!
            </Text>
            {error ? <Text style={styles.errText}>{error}</Text> : null}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    //alignItems: 'center',
    paddingLeft: 25
  },
  loadingtext: {
    fontSize: 38,
    marginBottom: 100
  }
});
