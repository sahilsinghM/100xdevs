/**
 * you dont get new html bundle when you cclick on the link
 * you get new html bundle when you refresh the page
 *
 * if you use window.location.href = "/dashboard"
 * you get new html bundle when you click on the link. its not a spa. wrong way of doing this.
 * usenavigate should be inside the browserrouter. only one browser router in the app.
 * you can do it by keeping it inside a child component of the browser router.
 *
 * Lazy loading - interview question
 * it is suboptimal to load all the components at once. if there are 20 components
 * and you are using only 2 components, then it is suboptimal to load all the components at once.
 * you can use lazy loading to load the components only when they are needed.
 *
 * changing the import line to import { lazy } from "react";
 */

import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { lazy } from "react";
const Landing = lazy(() => import("./components/landing"));
const Dashboard = lazy(() => import("./components/dashboard"));

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

const Appbar = () => {
  const nav = useNavigate();
  // useNavigate is a hook that returns a function that lets you navigate to different routes
  return (
    <div>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Landing
      </button>
      <button
        onClick={() => {
          nav("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};
export default App;
