

export const findNoteInArchive = ( archive, id ) => {
    return archive?.some( note => note.id === id );
}

export const findNoteInBin = ( bin, id ) => {
    return bin?.some( note => note.id === id );
}
