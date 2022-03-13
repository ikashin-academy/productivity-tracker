import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import { theme } from "../const";
import { Ionicons } from "@expo/vector-icons";

export default class ReferencesList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image source={this.props.image} style={styles.image} />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>{this.props.title}</Text>
          <Text style={styles.sectionSubtext}>{this.props.subtitle}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity>
            <Ionicons name="ios-arrow-forward" size={24} color={theme.bunker} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    flex: 5,
    margin: 15,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: theme.bunker,
  },
  sectionSubtext: {
    fontSize: 12,
    color: theme.grey,
  },
  image: {
    width: 50,
    height: 50,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
