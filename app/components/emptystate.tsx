import { theme } from "@/theme";
import { Image, StyleSheet, Text, View } from "react-native";

export default function EmptyState() {
  return (
    <View>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/images/rafiki.png")}
      />
      <Text
        style={{
          textAlign: "center",
          color: theme.colorWhite,
          fontSize: 20,
          fontFamily: "nunito",
          fontWeight: "300",
          marginTop: 20,
        }}
      >
        Create your first note !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    marginTop: 60,
  },
});
