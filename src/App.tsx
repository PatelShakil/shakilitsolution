import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";


function App() {

  return (
    <Router>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/signup"} element={<SignupPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
        </Routes>
    </Router>
  )
}

export default App
