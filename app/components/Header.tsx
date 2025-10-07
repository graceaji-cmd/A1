import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import Profiles from "../../assets/Profiles";

/* Files called index.js are treated specially by Node.js.
 * You can import them by giving the name of the folder the index.js
 * is located in! */
import Icons from "../../assets/Icons";
import { Themes } from "../../assets/Themes";

/* This handy trick grabs the width and height of the device's window,
 * which lets you set the sizes of your UI elements relative to the
 * dimensions of the device. */
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.name}>{Profiles.landay.name}</Text>
        <Text style={styles.pronouns}>{Profiles.landay.pronouns}</Text>
      </View>
      <Image
        source={Icons.sun /* For dark mode, use Icons.moon */}
        style={styles.headerIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  left: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontFamily: "Sydney-Bold",
    fontSize: 32,
  },
  pronouns: {
    fontFamily: "Sydney",
    fontSize: 16,
    marginTop: 2,
  },
  headerIcon: {
    height: Dimensions.get("window").width * 0.1,
    width: Dimensions.get("window").width * 0.1,
    marginLeft: "auto",
  },
});

export default Header;
