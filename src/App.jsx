import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';

import Rules from './pages/Rules';
import Contact from './pages/Contact';
import Items from './pages/Items'
import Item from './pages/Item';

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
          <Route path="/items" element={<Items />} />
          <Route path="/item/:id" element={<Item />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
