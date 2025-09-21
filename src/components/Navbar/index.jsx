
import logo from "../../assets/images/wirte.png"

const Navbar = () => {
    return (
        <header className="flex items-center bg-pink-100 gap-3 p-4 border-b border-b-gray-300 shadow-xl">
            <div className="w-10 h-10 ">
                <img src={ logo } alt="logo" className="cursor-pointer"/>
            </div>
            <h1 className=" font-bold font-sans text-fuchsia-400 text-xl">GlossNotes</h1>
        </header>
    )
}

export default Navbar;