import { Link } from 'react-router-dom'
import NavBar from './NavBar'
const nombre = 'Lautaro'
const apellido = 'Turic'
const letrasNombre = nombre.split('')
const letrasApellido = apellido.split('')
console.log(letrasNombre)
console.log(letrasApellido)
const Header = () => {
    return (
        <header className="h-[10vh] w-screen justify-between backdrop-blur-sm flex items-center">
            <Link to="/" className="text-7xl flex font-semibold z-10 italic uppercase align-middle pl-5">
                {letrasNombre.map((letras, indice) => <span className='letraNombre hover:text-blue-600 hover:scale-105' key={indice}>{letras}</span> )}
                <p>&nbsp;</p>
                {letrasApellido.map((letras, indice) => <span className='letraApellido hover:text-white hover:scale-105 ' key={indice}>{letras}</span> )}

            </Link>
            <NavBar />
        </header>
    )
}
export default Header