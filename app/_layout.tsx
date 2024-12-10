import { Stack } from "expo-router";
import { NoteProvider } from "./providers/notesProvider";

export default function RootLayout() {
  return (
    <NoteProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Notes",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="addNoteScreen"
          options={{
            title: "Notes",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="noteDetailsScreen"
          options={{
            title: "Details",
            headerShown: false,
          }}
        />
      </Stack>
    </NoteProvider>
  );
}
