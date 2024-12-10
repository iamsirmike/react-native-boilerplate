import { theme } from "@/theme";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Formik } from "formik";
import { useContext, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Yup from "yup";
import AppBar2 from "./components/appBar2";
import { NoteContext, NoteType } from "./providers/notesProvider";

const AddNoteSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Title is required"),
  content: Yup.string()
    .min(2, "Too Short!")
    .max(500, "Too Long!")
    .required("Please provide some content"),
});

export default function NoteDetailsScreen() {
  const [shouldEdit, setShouldEit] = useState(false);
  // const [content, setContent] = useState("");
  const note: NoteType = useLocalSearchParams();

  const router = useRouter();

  const context = useContext(NoteContext);
  if (!context) {
    return null; // or handle the error appropriately
  }
  const { updateNote } = context;

  const saveNote = (save: () => void) =>
    Alert.alert("Save changes?", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: save },
    ]);

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: note.id,
          title: note.title,
          content: note.content,
        }}
        validationSchema={AddNoteSchema}
        onSubmit={(values) => {
          updateNote(values.id, values.title, values.content);
          router.dismiss(1);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ flex: 1 }}>
            <AppBar2
              useBackButton={true}
              backButtonPressed={() => router.dismiss(1)}
              saveButtonPressed={() => saveNote(handleSubmit)}
              isEditing={shouldEdit}
              editButtonPressed={() => setShouldEit(!shouldEdit)}
            />
            <KeyboardAwareScrollView
              style={{ flex: 1 }}
              // contentContainerStyle={styles.container}
              enableOnAndroid={true} // Ensures functionality on Android
              extraHeight={100} // Adjusts spacing above the keyboard
              keyboardShouldPersistTaps="handled"
              enableAutomaticScroll={true}
              // behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <TextInput
                placeholder="Title"
                placeholderTextColor="#9A9A9A"
                editable={shouldEdit}
                multiline
                numberOfLines={4}
                scrollEnabled={false}
                maxLength={40}
                onChangeText={handleChange("title")}
                value={values.title}
                style={styles.titleTextInput}
              />
              {errors.title && (
                <Text style={styles.errorStyle}>{errors.title}</Text>
              )}
              <TextInput
                placeholder="Type something..."
                placeholderTextColor="#9A9A9A"
                editable={shouldEdit}
                multiline
                numberOfLines={8}
                scrollEnabled={false}
                onChangeText={handleChange("content")}
                value={values.content}
                style={styles.contentTextInput}
              />
              {errors.content && (
                <Text style={styles.errorStyle}>{errors.content}</Text>
              )}
            </KeyboardAwareScrollView>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: theme.appBackgroundColor,
  },
  titleTextInput: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 48,
    color: "#fff",
  },
  contentTextInput: {
    paddingTop: 40,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 23,
    color: "#fff",
  },
  errorStyle: {
    color: "red",
    fontSize: 15,
    marginLeft: 16,
  },
  //   scrollViewContent: { flexGrow: 1 },
});
