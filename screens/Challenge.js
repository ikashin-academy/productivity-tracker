import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Component } from "react";
import * as Animatable from "react-native-animatable";
import { theme } from "../const";
import { HorizontalList, ReferencesList } from "../components";
import Vue from "../assets/vue.png";
import React from "../assets/react.png";
import Angular from "../assets/angular.png";

class Challenge extends Component {
  render() {
    return (
      <View style={styles.challengeContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View style={styles.header}>
            <Text style={styles.title}>My Challenges</Text>
          </View>
          <View style={styles.horizontalList}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.horizontalContainerStyle}
              showsHorizontalScrollIndicator={false}
            >
              <HorizontalList
                background={Vue}
                title="Vue"
                subtitle="Week 1"
                animation="bounceInLeft"
              />
              <HorizontalList
                background={React}
                title="React"
                subtitle="Week 2"
                animation="bounceInLeft"
              />
              <HorizontalList
                background={React}
                title="React Native"
                subtitle="Week 3"
                animation="bounceInLeft"
              />
              <HorizontalList
                background={Angular}
                title="Angular"
                subtitle="Week 4"
                animation="bounceInLeft"
              />
            </ScrollView>
          </View>
          <View style={styles.referenceView}>
            <Text style={styles.referenceText}>References</Text>
          </View>
          <TouchableOpacity>
            <Animatable.View
              animation={"fadeInLeft"}
              duration={1500}
              style={styles.referenceList}
            >
              <ReferencesList
                image={Vue}
                title="Vue"
                subtitle="The Progressive JavaScript framework"
              />
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Animatable.View
              animation={"fadeInLeft"}
              duration={1500}
              style={styles.referenceList}
            >
              <ReferencesList
                image={React}
                title="React"
                subtitle="A JavaScript library for building user interfaces"
              />
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity>
            <Animatable.View
              animation={"fadeInLeft"}
              duration={1500}
              style={styles.referenceList}
            >
              <ReferencesList
                image={Angular}
                title="Angular"
                subtitle="One framework. Mobile & desktop"
              />
            </Animatable.View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Challenge;

const styles = StyleSheet.create({
  challengeContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    width: "100%",
    height: "120%",
  },
  header: {},
  title: {
    fontSize: 30,
    letterSpacing: 0.5,
    fontWeight: "bold",
    color: theme.bunker,
  },
  horizontalList: {
    height: 250,
    width: "100%",
  },
  horizontalContainerStyle: {
    width: "200%",
  },
  referenceText: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: theme.bunker,
  },
  referenceList: {
    height: 95,
    width: "100%",
    alignSelf: "center",
    borderRadius: 18,
    marginBottom: 10,
    backgroundColor: theme.patternsBlue,
  },
});
