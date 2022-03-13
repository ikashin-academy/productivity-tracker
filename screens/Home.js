import { Text, StyleSheet, View, ImageBackground } from "react-native";
import React, { Component } from "react";
import Chart from "../assets/chart.png";
import { ChallengeCard, Day } from "../components";
import { theme } from "../const";

class Home extends Component {
  state = {
    activeState: "rgba(255, 255, 255, 0.291821)",
  };
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.firstContainer}>
          <View style={styles.firstSection}></View>
          <View style={styles.secondSection}>
            <Text style={styles.name}>Hi John...</Text>
            <Text style={styles.subtitle}>Here's your progress</Text>
          </View>
          <View style={styles.thirdSection}>
            <ImageBackground source={Chart} style={styles.chart} />
          </View>
          <View style={styles.fourthSection}>
            <Day dayName="Mon" />
            <Day dayName="Tue" />
            <Day dayName="Wen" />
            <Day dayName="Thu" />
            <Day dayName="Fri" />
            <Day dayName="Sat" />
            <Day dayName="Sun" active={this.state.activeState} />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.line}></View>
          <View style={styles.progress}>
            <Text style={styles.progressText}>My Progress</Text>
          </View>
          <View style={styles.cards}>
            <ChallengeCard />
            <ChallengeCard />
          </View>
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#fc8210",
  },
  firstContainer: {
    flex: 1.5,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  firstSection: {
    flex: 1,
  },
  secondSection: {
    flex: 0.8,
    marginLeft: 35,
  },
  thirdSection: {
    flex: 2.5,
    justifyContent: "center",
  },
  fourthSection: {
    flex: 0.5,
    flexDirection: "row",
  },
  name: {
    fontSize: 38,
    color: "#f7f7f7",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 20,
    color: "#f7f7f7",
  },
  chart: { width: "100%", height: 250 },
  line: {
    width: "20%",
    height: 8,
    backgroundColor: theme.bunker,
    marginVertical: "4%",
    left: "40%",
    borderRadius: 4,
  },
  progress: {
    left: 50,
  },
  progressText: {
    fontSize: 20,
    color: theme.bunker,
    letterSpacing: 0.5,
  },
  cards: {
    flex: 1,
    width: "90%",
    marginTop: 10,
    marginHorizontal: 30,
  },
});
