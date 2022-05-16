import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div id="App" className='min-h-screen flex-col'>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />

            </Routes>
            <Footer />
        </div>
    )
}

export default App