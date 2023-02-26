import { BrowserRouter, Routes, Route } from "react-router-dom"
import Signup from './components/Signup';
import Home from './components/Home';
import Otp from "./components/Otp";
import Faq from "./components/Faq";
// import Login from "./components/Login";
import How from "./components/How";
import General from "./components/General";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path="/otp" element={<Otp />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          {/* <Route path="/login" element={<Login />}></Route> */}
          <Route path="/general" element={<General />}></Route>
          <Route path="/howtoreach" element={<How />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
