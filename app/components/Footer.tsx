import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { Icons, Themes } from "../../assets/Themes";

const windowHeight = Dimensions.get("window").height;

const Footer = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.navItem}>
        <Image style={styles.icon} source={Icons.discover.light} />
        <Text style={styles.label}>Discover</Text>
      </View>
      <View style={styles.navItem}>
        <Image style={styles.icon} source={Icons.heart.light} />
        <Text style={styles.label}>Matches</Text>
      </View>
      <View style={styles.navItem}>
        <Image style={styles.icon} source={Icons.messages.light} />
        <Text style={styles.label}>DMs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    backgroundColor: Themes.light.navigation,
    height: 100,
    justifyContent: "space-around",
    width: "100%",
    flex: 1,
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingBottom: 10,
  },
  label: {
    fontFamily: "Sydney",
    fontSize: 16,
    color: Themes.light.textSecondary,
    // marginTop: 2,
  },
  navItem: {
    alignItems: "center",
    width: "33.33%",
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  // add more styles for other components!
});

export default Footer;
