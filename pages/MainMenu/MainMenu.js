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
      <View style={styles.table}>
        <View style={styles.row}>
          {optionsList.slice(0, 3).map((item, index) => (
            <TouchableOpacity
              key={item}
              onPress={() => navigation.navigate("Login Screen")}
            >
              <MenuSquare content={item} />
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
    flex: 1,
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 25,
    textAlign: "center",
    borderColor: "aqua",
    borderWidth: 3,
    width: 330,
    paddingTop: 10,
    paddingBottom: 10,
    color: "blue",
    marginTop: 40,
  },
  goodMorning: {
    fontSize: 25,
    color: "orange",
    marginTop: 20,
    marginBottom: 20,
    width: 330,
  },
  table: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    
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
