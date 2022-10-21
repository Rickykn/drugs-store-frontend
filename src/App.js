import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from "./pages/auth/Signup";
import Singin from "./pages/auth/Signin";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/auth/signin" element={<Singin/>}/>
        <Route path="/auth/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
