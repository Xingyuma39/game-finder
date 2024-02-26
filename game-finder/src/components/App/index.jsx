import { Routes, Route, Link } from "react-router-dom"
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import AboutPage from "../AboutPage"
import NotFoundPage from '../NotFoundPage'
import Gallery from "../Gallery"
import './styles.css'
import { useState, useEffect } from 'react'


export default function App() {
  return (
    <>
      <nav className="flex items-center justify-between h-16 bg-gray-900 shadow-lg lg:px-9 md:px-6 px-3">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-green-500 font-bold md:text-3xl sm:text-2xl">Game Finder</h1>
          </Link>
          <h1 className="text-green-200 md:text-sm sm:text-1xl mr-2 ml-2">By Xing Yu (Jason) Ma</h1>
        </div>
        <div className="flex items-center">
          <Link to="/">
            <h2 className="text-green-500 md:text-lg sm:text-md ml-2 mr-2">Home</h2>
          </Link>
          <Link to="/about">
            <h2 className="text-green-200 md:text-lg sm:text-md ml-2 mr-2">About</h2>
          </Link>
          <Link to="/details">
            <h2 className="text-green-200 md:text-lg sm:text-md ml-2 mr-2">Details</h2>
          </Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}