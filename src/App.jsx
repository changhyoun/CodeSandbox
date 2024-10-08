// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './pages/Main';
import "./components/Responsive.scss"

function App() {


  return (
    <Router basename="/CodeSandbox">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
