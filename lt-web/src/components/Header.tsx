import NavBar from './NavBar'
const Header = () => {
    return (
        <header className="h-[10vh] w-screen justify-between bg-trasnparent backdrop-blur-sm flex items-center">
            <p className="text-4xl align-middle pl-5">Lautaro Turic</p>
            <NavBar />
        </header>
    )
}
export default Header