import { theme } from "@/theme";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, View } from "react-native";

type AppBarProps = {
  useBackButton?: boolean;
  isEditing?: boolean;
  backButtonPressed?: () => void;
  saveButtonPressed?: () => void;
  editButtonPressed?: () => void;
};

export default function AppBar2({
  useBackButton,
  backButtonPressed,
  saveButtonPressed,
  isEditing,
  editButtonPressed,
}: AppBarProps) {
  return (
    <View>
      <View style={styles.appBarStyle}>
        <View style={{}}>
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
        </View>
        {!isEditing ? (
          <Pressable onPress={editButtonPressed}>
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
              <Entypo name="edit" size={24} color="#fff" />
            </View>
          </Pressable>
        ) : (
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
                <Feather name="eye" size={24} color="#fff" />
              </View>
            </Pressable>
            <Pressable onPress={saveButtonPressed}>
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
                <FontAwesome5 name="save" size={24} color="#fff" />
              </View>
            </Pressable>
          </View>
        )}
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
});
