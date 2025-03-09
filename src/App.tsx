import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./views/mainpage"
import Prev1 from './views/CVs/prev1';
import PrevAlexo from './views/CVs/prevAlexo';
function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mainpage" element={<Mainpage/>} />
      <Route path='/mainpage/prev1' element={<Prev1/>} />
      <Route path='/mainpage/prevalexo' element={<PrevAlexo/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
