import { StyleSheet, Text, View } from "react-native";

const MenuSquare = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "green",
    width: 100,
    height: 100,
    borderWidth: 1,
    margin: 5,
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 24,
    textAlign: "center",
  },
});

export default MenuSquare;
