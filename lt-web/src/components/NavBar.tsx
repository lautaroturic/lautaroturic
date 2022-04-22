import NavItem from "./NavItem"
const NavBar = () => {
    return(
        <nav className="w-1/3">
            <ul className="flex  p-2 justify-around  ">
                <NavItem content="Inicio" href="/"/>
                <NavItem content="Sobre Mi" href="/sobreMi"/>
                <NavItem content="Proyectos" href="/proyectos" />
                <NavItem content="Contacto" href="/contacto"/>
            </ul>
        </nav>
    )
}
export default NavBar