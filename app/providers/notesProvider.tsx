import { createContext, ReactNode, useState } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";

export type NoteType = {
  id: string;
  title: string;
  content: string;
  bgColor: string;
};

type NoteContextType = {
  notes: NoteType[];
  addNote: (title: string, content: string) => void;
  deleteNote: (id: string) => void;
  fetchNotes: () => void;
  updateNote: (id: string, title: string, content: string) => void;
};

const NoteContext = createContext<NoteContextType | undefined>(undefined);

const NoteProvider = ({ children }: { children: ReactNode }) => {
  let [notes, setNotes] = useState<NoteType[]>([]);

  const generateRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const addNote = (title: string, content: string) => {
    const newNote: NoteType = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      bgColor: generateRandomColor(),
    };
    setNotes([newNote, ...notes]);
    saveToStorage("notes", [newNote, ...notes]);
  };

  const deleteNote = (id: string) => {
    console.log("Deleting note with id: ", id);
  };

  const fetchNotes = async () => {
    const notes = await getFromStorage("notes");
    setNotes(notes || []);
    console.log("Notes", notes);
  };

  const updateNote = (id: string, title: string, content: string) => {
    notes = notes.map((note) =>
      note.id === id ? { ...note, title: title, content: content } : note,
    );
    setNotes(notes);
    saveToStorage("notes", notes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, fetchNotes, updateNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
