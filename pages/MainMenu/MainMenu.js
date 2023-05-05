import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuSquare from "../../components/MenuGridSquare/MenuGridSquare";

const MainMenu = ({ navigation }) => {
  const optionsList = [
    "הודעות",
    "מערכת שעות",
    'ש"ב',
    "ציונים",
    "מבחנים",
    "דיווח נוכחות",
    "תאריכים מיוחדים",
    "פרטים אישיים",
    "התנהגות בשיעור",
  ];

  return (
    <View style={styles.page}>
      <Text style={styles.mainTitle}>לומדים ביחד</Text>
      <Text style={styles.goodMorning}>בוקר טוב יואל הרטמן</Text>
      <View style={styles.container}>
        <View style={styles.row}>
          {optionsList.slice(0, 3).map((item, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Login Screen")}
            >
              <MenuSquare key={item} content={item} />
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {optionsList.slice(3, 6).map((item, index) => (
            <MenuSquare key={item} content={item} />
          ))}
        </View>
        <View style={styles.row}>
          {optionsList.slice(6, 9).map((item, index) => (
            <MenuSquare key={item} content={item} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    
  },
  mainTitle: {
    fontSize: 25,
    textAlign: "center",
  },
  goodMorning: {
    textAlign: "center",
    fontSize: 25,
  },
  container: {
    // flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default MainMenu;
