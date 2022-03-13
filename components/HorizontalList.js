import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import React, { Component } from "react";
import { theme } from "../const";
import { Ionicons } from "@expo/vector-icons";

export default class HorizontalList extends Component {
  render() {
    return (
      <Animatable.View
        animation={this.props.animation}
        duration={1200}
        style={styles.card}
      >
        <ImageBackground
          source={this.props.background}
          style={styles.imageBackground}
        />
        <View style={styles.firstSection}>
          <Text style={styles.firstSectionText}>{this.props.title}</Text>
          <Text style={styles.firstSectionSubtext}>{this.props.subtitle}</Text>
        </View>
        <View style={styles.secondSection}>
          <TouchableOpacity style={styles.secondSectionContent}>
            <Ionicons
              name="ios-information-circle-outline"
              size={24}
              color={theme.bunker}
            />
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginVertical: 10,
    marginRight: 15,
    backgroundColor: theme.patternsBlue,
    borderRadius: 18,
    overflow: "hidden",
  },
  imageBackground: {
    width: "120%",
    height: "100%",
    position: "absolute",
    opacity: 0.5,
  },
  firstSection: {
    flex: 1,
    padding: 10,
  },
  firstSectionText: {
    fontSize: 20,
    color: theme.bunker,
    width: 200,
  },
  firstSectionSubtext: {
    fontSize: 14,
    color: theme.bunker,
    marginVertical: 5,
  },
  secondSection: {
    flex: 2,
  },
  secondSectionContent: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    margin: 10,
  },
});
