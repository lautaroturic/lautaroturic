import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
import About from './About'
const App = () => {
    return (
        <div id="App" className='min-h-screen flex-col'>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='about' element={<About />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App