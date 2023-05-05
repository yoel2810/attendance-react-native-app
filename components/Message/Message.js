import { StyleSheet, Text, View } from "react-native";

const Message = ({ content }) => {
  return (
    <View>
      <Text style={styles.title}>הודעות</Text>
      <View style={styles.container}>
        <Text>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {},
  title: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30,
  },
  container: {
    backgroundColor: "aqua",
    marginLeft: 20,
    marginRight: 20,
    height: 100,
  },
});

export default Message;
