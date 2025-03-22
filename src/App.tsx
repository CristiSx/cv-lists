import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./views/mainpage"
import Prev1 from './views/CVs/prev1';
import Prev2 from './views/CVs/prev2';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mainpage" element={<Mainpage/>} />
      <Route path='/mainpage/prev1' element={<Prev1/>} />
      <Route path='/mainpage/prev2' element={<Prev2/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
