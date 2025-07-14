import {BrowserRouter, Routes, Route} from "react-router-dom";
import ConnectWallet from "./pages/connectWallet";
import Home from "./pages/home";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/connectWallet" element={<ConnectWallet />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App
