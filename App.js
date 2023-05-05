import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainMenu from "./pages/MainMenu/MainMenu";
import MessageBoard from "./pages/MessageBoard/MessageBoard";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SignupScreen from "./pages/SignupScreen/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main Menu"
          component={MainMenu}
          options={{ title: "התפריט הראשי" }}
        />
        <Stack.Screen name="Login Screen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
