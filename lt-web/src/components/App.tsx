import Main from './Main'
import Header from './Header'
import Footer from './Footer'
const App = () => {
    return (
        <div id="App" className='min-h-screen flex-col'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default App