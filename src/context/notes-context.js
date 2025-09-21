import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    bin: [],
    imp: []
  };

  const [{ title, text, notes, archive, bin, imp }, noteDispatch] = useReducer(
    notesReducer,
    initialState
  );
  return (
    <NotesContext.Provider value={{ title, text, notes, archive, bin, imp, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
