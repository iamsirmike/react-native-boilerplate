import { Pressable, StyleSheet, Text, View } from "react-native";

type NoteProps = {
  content: string;
  bgColor: string;
  onPress?: () => void;
};

export default function NoteCard({ content, bgColor, onPress }: NoteProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <Text style={styles.textStyle}>{content}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#FF9E9E",
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 400,
    color: "black",
    fontFamily: "nunito-italic",
  },
});
