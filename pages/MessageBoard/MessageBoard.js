import { StyleSheet, Text, View } from "react-native";
import Message from "../../components/Message/Message";

const MessageBoard = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>הודעות</Text>
      <View style={styles.messagesContainer}>
        <Message content={" הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעה הודעההודעה הודעה הודעה"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    alignSelf: "center",
    fontSize: 35,
    color: "blue",
    fontWeight: "bold",
    marginBottom: 20,
  },
  messagesContainer: {
    flex: 1,
    width: "80%",
  },
});

export default MessageBoard;
