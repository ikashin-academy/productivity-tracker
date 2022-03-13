import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class Day extends Component {
  render() {
    return (
      <View style={styles.dayContainer}>
        <View
          style={{
            ...styles.inner,
            backgroundColor: this.props.active,
          }}
        >
          <Text style={{ color: "#f7f7f7" }}>{this.props.dayName}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
