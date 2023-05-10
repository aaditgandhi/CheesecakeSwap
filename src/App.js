import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeroSection from './Components/HeroSection/HeroSection';
import { SwapTokenContextProvider } from './Context/SwapContext';

function App() {
    return(
        <div>
            <SwapTokenContextProvider>
                <Navbar />
                <HeroSection accounts='hey' tokenData='DATA' />
            </SwapTokenContextProvider>
            
            
        </div>
    )
}

export default App;
