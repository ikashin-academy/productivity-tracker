import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image } from "react-native";
import { Home, Challenge } from "./screens";
import UserImage from "./assets/user.png";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  userImage: { marginRight: 35, width: 75, height: 75 },
  burgerButton: {
    marginLeft: 35,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { height: 100 },
            headerTransparent: true,
            title: "",
            headerRight: () => (
              <Image source={UserImage} style={styles.userImage} />
            ),
            headerLeft: () => (
              <AntDesign
                name="menuunfold"
                size={32}
                color="white"
                style={styles.burgerButton}
              />
            ),
          }}
        />
        <Stack.Screen name="Challenge" component={Challenge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
