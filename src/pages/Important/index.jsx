import { Fragment } from "react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { OtherCard } from "../../components/OtherCard";
import { useNotes } from "../../context/notes-context";

export const Important = () => {
  const { title, text, imp, noteDispatch } = useNotes();

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

  const onImpClick = () => {
    noteDispatch({
      type: "ADD_IMP",
    });
    noteDispatch({
      type: "CLEAR_IMP",
    });
  };

   return(<Fragment>
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
              onClick={onImpClick}
              className="bottom-2 right-2 absolute w-[30px] h-[30px] border-2 rounded-full border-pink-300 hover:bg-pink-200"
            >
              <span class="material-icons-outlined">add</span>
            </button>
          </div>
          {
            imp?.length > 0 && (
                <div className="flex flex-wrap">
                    {
                        imp?.length > 0 && imp.map(({ id, title, text }) => (
                            <OtherCard key={id} id={id} title={title} text={text} />
                        ))
                    }
                </div>
            )
          }
        </div>
      </main>
    </Fragment>)
};
