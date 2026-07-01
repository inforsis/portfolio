import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
// import Articles from './components/Blog'
import Post from './components/Post'
import Contact from './components/Contact'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            {/* <Route path="/articles" element={<Articles />} /> */}
            <Route path="/articles/:slug" element={<Post />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}
