import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./views/mainpage"
import Prev1 from './views/CVs/prev1';
import Prevrobert from './views/CVs/prevrobert'
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mainpage" element={<Mainpage/>} />
      <Route path='/mainpage/prev1' element={<Prev1/>} />
      <Route path='/mainpage/prevrobert' element={<Prevrobert/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
