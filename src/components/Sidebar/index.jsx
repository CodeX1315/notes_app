import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const getStyle = ({ isActive }) => {
    return isActive
      ? "bg-pink-200 flex items-center gap-2 m-2 rounded-r-3xl p-3 "
      : "hover:bg-pink-200 hover:rounded-r-3xl p-2.5 flex items-center gap-2 m-2 hover:text-pink-800";
  };
  return (
    <aside className="w-[170px] h-full bg-pink-100 p-4 flex flex-col gap-3 shadow-2xl text-lg font-medium">
      <NavLink to="/" className={getStyle}>
        <span class="material-icons-outlined">home</span>
        <span>Home</span>
      </NavLink>
      <NavLink to="/archive" className={getStyle}>
        <span class="material-icons-outlined">archive</span>
        <span>Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyle}>
        <span class="material-icons-outlined">label_important</span>
        <span>Important</span>
      </NavLink>
      <NavLink to="/bin" className={getStyle}>
        <span class="material-icons-outlined">delete</span>
        <span>Bin</span>
      </NavLink>
    </aside>
  );
};
