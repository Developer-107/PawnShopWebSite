import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';

import Rules from './pages/Rules';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
