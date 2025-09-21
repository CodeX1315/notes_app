import { useNotes } from "../../context/notes-context";
import { findNoteInArchive, findNoteInBin } from "../../utils/findNoteInArchive";

export const NotesCard = ({ id, title, text, isPinned }) => {
  const { noteDispatch, archive, bin } = useNotes();

  const isNoteInaArchive = findNoteInArchive(archive, id);
  const isNoteInBin = findNoteInBin(bin, id);
  

  const onClickPin = (id) => {
    !isPinned
      ? noteDispatch({
          type: "PIN",
          payload: { id },
        })
      : noteDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isNoteInaArchive
      ? noteDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : noteDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onBinClick = ( ) => {
    !isNoteInBin ?
    noteDispatch({
        type: "ADD_TO_BIN",
        payload: { id }
    }) : 
    noteDispatch({
        type: "REMOVE_FROM_BIN",
        payload: { id }
    })
  }


  return (
    <div
      key={id}
      className="flex flex-col gap-3 p-4 border-2 border-pink-300 relative m-4 rounded-lg shadow-lg w-80 h-auto"
    >
      <div className="flex justify-between border-2 border-pink-300 p-2 rounded-lg">
        <p>{title}</p>
        {!(isNoteInaArchive || isNoteInBin )  ? (
          <button onClick={() => onClickPin(id)} className="w-[30px] h-[30px]">
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        ) : null}
      </div>
      <div className="flex justify-between border-2 border-pink-300 p-2 rounded-lg relative">
        <p className="whitespace-pre-line">{text}</p>
        {
          !isNoteInBin ? (
            <button
          onClick={() => onArchiveClick(id)}
          className="w-[30px] h-[30px]  right-10 absolute mt-[2px]"
        >
          <span
            className={
              isNoteInaArchive ? "material-icons" : "material-icons-outlined"
            }
          >
            archive
          </span>
        </button>
          ) : null
        }
        {
          !isNoteInBin ? (
            <button 
            onClick={ () => onBinClick(id) }
            className="w-[30px] h-[30px]  p-[2px]">
          <span className={isNoteInBin ? "material-icons":"material-icons-outlined"}>delete</span>
        </button>
          ) : <button 
            onClick={ () => onBinClick(id) }
            className="w-[30px] h-[30px]  p-[2px]">
          <span className={isNoteInBin ? "material-icons":"material-icons-outlined"}>cached</span>
        </button>
        }
      </div>
    </div>
  );
};
