import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../context/notes-context";
import { NotesCard } from "../../components/NotesCard";

export const Bin = () => {
    const { bin } = useNotes();
  return (
    <Fragment>
      <Navbar />
      <main className="flex h-[calc(100vh-64px)] relative ">
        <Sidebar />
        <div className="flex flex-wrap absolute ml-44">
          {bin?.length > 0 &&
            bin.map(({ id, title, text, isPinned }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              />
            ))}
        </div>
      </main>
    </Fragment>
  );
};
