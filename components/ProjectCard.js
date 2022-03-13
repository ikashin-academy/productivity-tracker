import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../const";

export default class ProjectCard extends Component {
  render() {
    return (
      <Animatable.View
        animation={this.props.move}
        duration={1500}
        style={styles.cardOne}
      >
        <TouchableOpacity style={styles.boxOne}>
          <View style={styles.container}>
            <Entypo name="rocket" size={32} color={theme.bunker} />
          </View>
          <View style={styles.boxTwo}>
            <Text style={styles.boxTwoText}>{this.props.title}</Text>
            <Text style={styles.boxTwoSubtext}>{this.props.subtitle}</Text>
          </View>
          <View style={styles.boxThree}>
            <View style={styles.boxThreeContent}>
              <Text style={styles.boxThreeText}>{this.props.completed}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  cardOne: {
    flex: 1,
    marginBottom: 15,
  },
  boxOne: {
    paddingHorizontal: 15,
    flex: 1,
    flexDirection: "row",
  },
  boxTwo: {
    flex: 1.25,
    alignItems: "center",
    justifyContent: "center",
  },
  boxTwoText: {
    fontSize: 20,
    color: theme.bunker,
    fontWeight: "300",
  },
  boxTwoSubtext: {
    fontSize: 12,
    color: theme.grey,
    letterSpacing: 0.5,
    paddingVertical: 5,
  },
  boxThree: {
    flex: 1,
  },
  boxThreeContent: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  boxThreeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.sapphire,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
