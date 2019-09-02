import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import { Icon, Left, Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
export default class App extends Component {
  state = {
    isReady: false
  };
  win = Dimensions.get("window");
  componentDidMount() {
    this.setState({ isReady: true });
  }
  render() {
    return (
      <Container>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            padding: 20,
            backgroundColor: "#fff000"
          }}
        >
          <Left>
            <Image
              source={require("./assets/snatchr.png")}
              style={{
                resizeMode: "contain",
                width: 100,
                height: 100,
                marginTop: 30
              }}
            />
          </Left>
          <Icon style={{ marginTop: 30 }} name="menu" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
            borderWidth: 1
          }}
        >
          <Image
            source={require("./assets/close-up-colorful-colors-2529148.jpg")}
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: this.win.width,
              height: this.win.height
            }}
          />
          <Ionicons style={styles.close} name="ios-add-circle" size={30} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
            borderWidth: 1
          }}
        >
          <Image
            source={require("./assets/market-shirts-shop-2294342.jpg")}
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: this.win.width,
              height: this.win.height
            }}
          />
          <Ionicons style={styles.close} name="ios-add-circle" size={30} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
            borderWidth: 1
          }}
        >
          <Image
            source={require("./assets/colorful-colourful-design-374117.jpg")}
            style={{
              flex: 1,
              alignSelf: "stretch",
              width: this.win.width,
              height: this.win.height
            }}
          />
          <Ionicons style={styles.close} name="ios-add-circle" size={30} />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 0,
    left: 0,
    width: 30,
    height: 30,
    color: "black"
  }
});
