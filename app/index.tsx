import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { useContext, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppBar from "./components/appBar";
import FloatingButton from "./components/button";
import EmptyState from "./components/emptystate";
import NoteCard from "./components/noteCard";
import { NoteContext } from "./providers/notesProvider";

export default function HomeScreen() {
  const router = useRouter();

  //Fetch notes on initial render
  useEffect(() => {
    const fetchInitial = async () => {
      fetchNotes();
    };

    fetchInitial();
  }, []);

  const context = useContext(NoteContext);
  if (!context) {
    return null; // or handle the error appropriately
  }
  const { notes, fetchNotes } = context;

  return (
    <View style={styles.container}>
      <AppBar
        title="Notes"
        useBackButton={false}
        backButtonPressed={() => console.log("Hi there")}
      />
      <FlatList
        contentContainerStyle={{ paddingBottom: 24, paddingTop: 20 }}
        data={notes}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <NoteCard
            content={item.title}
            bgColor={item.bgColor}
            onPress={() =>
              router.push({
                pathname: "noteDetailsScreen",
                params: item,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <EmptyState />}
      />

      {/* <EmptyState /> */}

      <FloatingButton onPress={() => router.push("/addNoteScreen")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.appBackgroundColor,
  },
  separator: {
    height: 15, // Adjust the height for spacing
  },
});
