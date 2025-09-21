
import { v4 as uuid } from "uuid";

export const notesReducer = ( state, action ) => {
    switch( action.type ){
        case "TITLE":
            return {
                ...state,
                title: action.payload
            }

        case "TEXT":
            return {
                ...state,
                text: action.payload
            }

        case "ADD":
            return {
                ...state,
                notes: [...state.notes, { title: state.title, text: state.text, id: uuid(), isPinned: false }]
            }
        case "CLEAR":
            return {
                ...state,
                title: "",
                text: ""
            }
        case "PIN":
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? { ...note, isPinned: true} : note)
            }
        case "UNPIN":
            return {
                ...state,
                notes: state.notes.map(note => note.id === action.payload.id ? { ...note, isPinned: false} : note)
            }

        case "ADD_TO_ARCHIVE":
            return {
                ...state,
                archive: [...state.archive, state.notes.find(({ id}) => id === action.payload.id)],
                notes: state.notes.filter(({ id }) => id !== action.payload.id)
            }
        case "REMOVE_FROM_ARCHIVE":
            return{
                ...state,
                notes: [...state.notes, state.archive.find(({ id }) => id === action.payload.id)],
                archive: state.archive.filter(({ id }) => id !== action.payload.id)
            }

        case "ADD_TO_BIN":
            return {
                ...state,
                bin: [...state.bin, state.notes.find(({ id}) => id === action.payload.id)],
                notes: state.notes.filter(({ id }) => id !== action.payload.id)
            }
        case "REMOVE_FROM_BIN":
            return{
                ...state,
                notes: [...state.notes, state.bin.find(({ id }) => id === action.payload.id)],
                bin: state.bin.filter(({ id }) => id !== action.payload.id)
            }
        case "ADD_IMP":
            return {
                ...state,
                imp: [...state.imp, { title: state.title, text: state.text, id: uuid()}]
            }
        case "CLEAR_IMP":
            return {
                ...state,
                title: "",
                text: ""
            }
        default:
            return state;
    }
}