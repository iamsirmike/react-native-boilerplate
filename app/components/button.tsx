import { theme } from "@/theme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

type FloatingProps = {
  onPress: () => void;
};

export default function FloatingButton({ onPress }: FloatingProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: theme.appBackgroundColor,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});

// export default FloatingButton;
