import { View, StyleSheet, Image, Text } from "react-native";
import Profiles from "../../assets/Profiles";
import { Themes } from "../../assets/Themes";
import Icons from "../../assets/Icons";

const Body = () => {
  return (
    <View style={styles.screen}>
      {/* image card */}
      <View style={styles.cardShadow}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Me and my best friend</Text>
          </View>
          <Image source={Profiles.landay.image} style={styles.image} />
        </View>
      </View>

      {/* audio box */}
      <View style={styles.cardShadow}>
        <View style={styles.audioContainer}>
          <Text style={styles.title}>My hottest take</Text>
          <View style={styles.iconRow}>
            <Image source={Icons.player.light} style={styles.playIcon} />
            <Image source={Icons.audioWave.light} style={styles.waveIcon} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: "15%",
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
  container: {
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: Themes.light.bgSecondary,
    overflow: "hidden",
  },
  image: {
    height: 300, // feel free to adjust this!
    aspectRatio: 1,
  },
  header: {
    backgroundColor: Themes.light.bgSecondary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "flex-start",
  },
  title: {
    fontFamily: "Sydney-Bold",
    fontSize: 16,
    textAlign: "left",
  },
  audioContainer: {
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: Themes.light.bgSecondary,
    height: 120,
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  playIcon: {
    width: 40,
    height: 40,
  },
  waveIcon: {
    flex: 1,
    height: 40,
    resizeMode: "contain",
    alignContent: "flex-end",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  // add more styles for other components!
});

export default Body;
