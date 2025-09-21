import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

const Home = () => {
  const { title, text, notes, noteDispatch } = useNotes();

  const titleChangeHandler = (e) => {
    noteDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const textChangeHandler = (e) => {
    noteDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const addClick = () => {
    noteDispatch({
      type: "ADD",
    });
    noteDispatch({
      type: "CLEAR",
    });
  };

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
  return (
    <Fragment>
      <Navbar />
      <main className="flex h-[calc(100vh-64px)] ">
        <Sidebar />
        <div >
          <div className="flex flex-col gap-3 p-4 border-2 border-pink-300 relative m-4 rounded-lg shadow-lg w-96 h-[280px] ">
            <input
              onChange={titleChangeHandler}
              value={title}
              type="text"
              placeholder="Enter Title"
              className="p-2 rounded-lg mb-[3px] mr-[3px]"
            />
            <textarea
              onChange={textChangeHandler}
              value={text}
              name=""
              id=""
              placeholder="Enter notes"
              className="p-2 rounded-lg h-40"
            ></textarea>
            <button
              disabled={title.length === 0}
              onClick={addClick}
              className="bottom-2 right-2 absolute w-[30px] h-[30px] border-2 rounded-full border-pink-300 hover:bg-pink-200"
            >
              <span class="material-icons-outlined">add</span>
            </button>
          </div>
          {pinnedNotes?.length > 0 && (
            <>
              <h3 className="font-bold ml-[14px]">Pinned Notes</h3>
              <div className="flex flex-wrap">
                {pinnedNotes?.length > 0 &&
                  pinnedNotes.map(({ id, title, text, isPinned }) => (
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </>
          )}
          {pinnedNotes?.length > 0 && <h3 className="font-bold ml-[14px]">Other Notes</h3>}
          {
            <div className="flex flex-wrap">
              {otherNotes?.length > 0 &&
                otherNotes.map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
            </div>
          }
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
