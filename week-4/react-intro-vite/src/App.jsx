// everything is getting injected into the html and then to the dom
// react is platform agnostic. react-dom is for website, react-native is for apps, there are others too
// react takes jsx code which has components and state. npm run dev helps you test locally. npm run build converts 
//the jsx code into a dist folder which contains the converted html+js which will create the dom. after building you can create 
// other folders. just the dist folder will be enough to run the app
// in order to pass on arguments to child components use props 
// vite is sort of a bundler. it helps you bootstrap react application. doing from scratch might be a little difficult for a beginner.
// if a state variable var = {count} is passed on to a child, you also have to pass on the setVar ={setCount} 
//[...spread], array destructuring const [a,b,c] = [1,2,3]
//class-based components vs functional components. hooks.
// check p5.js

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
