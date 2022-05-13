import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
const App = () => {
    return (
        <div id="App" className='min-h-screen flex-col'>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App