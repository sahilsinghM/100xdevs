// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import SendMoney from "./pages/send";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MyApp />
    </RecoilRoot>
  );
}

function MyApp() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <nav className="bg-gray-500">
        <ul>
          <li>
            <Link to="/" className="bg-red-700">
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <Link to="/signin">Sign In</Link>
          </li>

          <li>
            <Link to="/sendmoney">Send</Link>
          </li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/send" element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
