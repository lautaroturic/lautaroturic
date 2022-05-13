import NavItem from "./NavItem"
const NavBar = () => {
    return (
        <nav className="w-1/2 flex gap-3 justify-end p-2 pr-8">
            <NavItem content="Inicio" href="/" classN="home" colorBg="hover:bg-blue-600" color="hover:text-blue-500" />
            <NavItem content="Sobre Mi" href="/aboutMe" classN="about" colorBg="hover:bg-fuchsia-600" color="hover:text-fuchsia-500"/>
            <NavItem content="Proyectos" href="/myProjects" classN="proyects" colorBg="hover:bg-yellow-500" color="hover:text-yellow-400"/>
            <NavItem content="Contacto" href="/contactMe" classN="contact" colorBg="hover:bg-green-600" color="hover:text-green-500"/>
        </nav>
    )
}
export default NavBar