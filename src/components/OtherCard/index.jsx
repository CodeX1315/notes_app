

export const OtherCard = ({ id, title, text }) => {

  return (
    <div
      key={id}
      className="flex flex-col gap-3 p-4 border-2 border-pink-300 relative m-4 rounded-lg shadow-lg w-80 h-auto pb-[45px]"
    >
      <div className="flex justify-between border-2 border-pink-300 p-2 rounded-lg">
        <p>{title}</p>
      </div>
      <div className="flex justify-between border-2 border-pink-300 p-2 rounded-lg relative">
        <p className="whitespace-pre-line">{text}</p>
      </div>
      <div>
        <label className="left-[18px] border-2 border-pink-600 bg-pink-300 rounded-full pl-[8px] pr-[8px] pt-[4px] pb-[4px] absolute">Important</label>
        <button 
            className="right-4 absolute bottom-2">
          <span className="material-icons-outlined">delete</span>
        </button>
      </div>
    </div>
  );
};
