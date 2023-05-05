import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.studyTogetherTitle}>לומדים ביחד</Text>
      <View style={styles.rolesContainer}>
        <Text style={{ ...styles.roleText, ...styles.studentsText }}>
          תלמידים
        </Text>
        <Text style={{ ...styles.roleText, ...styles.parentsText }}>הורים</Text>
        <Text style={{ ...styles.roleText, ...styles.teachersText }}>
          מורים
        </Text>
      </View>
      <Text style={styles.title}>מערכת הזדהות</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPasswordText}>שכחת סיסמא?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>התחברות</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  rolesContainer: {
    flexDirection: "row",
    backgroundColor: "aqua",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  roleText: {
    flex: 1,
    textAlign: "center",
    // color: "white",
    fontSize: 20,
    height: "100%",
    paddingBottom: 10,
    paddingTop: 10,
  },
  studentsText: {
    borderLeftColor: "blue",
    borderLeftWidth: 3,
  },
  parentsText: {
    borderLeftColor: "blue",
    borderLeftWidth: 3,
  },
  teachersText: {},
  studyTogetherTitle: {
    color: "blue",
    fontSize: 50,
    fontWeight: "bold",
  },
  title: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    color: "blue",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "blue",
    borderWidth: 1,
    // borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007aff",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "red",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right",
    alignSelf: "flex-start",
    marginBottom: 20
  },
});
