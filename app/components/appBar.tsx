import { theme } from "@/theme";
import { SimpleLineIcons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type AppBarProps = {
  title?: string;
  useBackButton?: boolean;
  backButtonPressed?: () => void;
};

export default function AppBar({
  title,
  useBackButton,
  backButtonPressed,
}: AppBarProps) {
  return (
    <View>
      <View style={styles.appBarStyle}>
        <View style={{}}>
          {useBackButton ? (
            <Pressable onPress={backButtonPressed}>
              <View
                style={{
                  backgroundColor: "#3B3B3B",
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  marginRight: 16,
                }}
              >
                <Ionicons name="chevron-back" size={24} color="#fff" />
              </View>
            </Pressable>
          ) : (
            <Text style={styles.appBarTitle}>{title}</Text>
          )}
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => console.log("serach pressed")}>
            <View
              style={{
                backgroundColor: "#3B3B3B",
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15,
                marginRight: 16,
              }}
            >
              <EvilIcons name="search" size={30} color="#fff" />
            </View>
          </Pressable>
          <View
            style={{
              backgroundColor: "#3B3B3B",
              height: 50,
              width: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              marginRight: 16,
            }}
          >
            <SimpleLineIcons name="info" size={24} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarStyle: {
    flexDirection: "row",
    paddingTop: 60,
    paddingLeft: 16,
    // paddingBottom: 30,
    backgroundColor: theme.appBackgroundColor,
    justifyContent: "space-between",
  },
  appBarTitle: {
    fontSize: 43,
    color: theme.colorWhite,
    fontFamily: "nunito",
  },
});
