import { StyleSheet, Text, View } from "react-native";

const Message = ({ content }) => {
  return <Text style={styles.content}>{content}</Text>;
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: "aqua",
    textAlign: "left",
    fontSize: 20,
    minHeight: "15%",
    paddingRight: 10
    
  },
});

export default Message;
