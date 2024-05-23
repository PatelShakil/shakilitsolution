import './index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";


function App() {

  return (
    <Router>
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/signup"} element={<SignupPage/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route path={"/profile"} element={<ProfilePage/>}/>
        </Routes>
    </Router>
  )
}

export default App
