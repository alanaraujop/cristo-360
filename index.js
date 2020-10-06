import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

export default class cristo_360 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Bem Vindo ao Cristo Redentor</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    // backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#fff5",
    borderColor: "#fff9",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 40,
  },
});

AppRegistry.registerComponent("cristo_360", () => cristo_360);
