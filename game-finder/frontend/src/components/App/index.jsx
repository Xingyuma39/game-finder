import { Routes, Route, Link } from "react-router-dom"
import HomePage from '../HomePage'
import DetailsPage from '../DetailsPage'
import AboutPage from "../AboutPage"
import NotFoundPage from '../NotFoundPage'
import Gallery from "../Gallery"
import './styles.css'
import { useState, useEffect } from 'react'
import AuthFormPage from '../AuthFormPage'
// import { loadEnv } from 'vite'

export default function App() {
  const [games, setGames] = useState([])
  const [detailsData, setDetailsData] = useState({})
  const [loginStatus, setLoginStatus] = useState(false)

  async function getData(url) {
    const res = await fetch(url)
    const data = await res.json()
    // setGames(games => games.concat(data.results))
    setGames(data.results)
  }

  useEffect(() => {
    getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20`)
    if (localStorage.getItem('userToken')) {
      setLoginStatus(true)
    }
  }, [])

  // console.log("API KEY: " + import.meta.env.VITE_RAWG_KEY)

  //conditionally render signup/login/logout buttons
  let authLink =
  <div className="flex lg:gap-5 md:gap-4 sm:gap-3 gap-2 ml-2">
    <Link to="/auth/signup">
      <h2 className="text-green-200 md:text-lg sm:text-md">Sign Up</h2>
    </Link>
    <Link to="/auth/login">
      <h2 className="text-green-200 md:text-lg sm:text-md">Log In</h2>
    </Link>
  </div>

  if (localStorage.getItem('userToken')) {
    authLink = <button
      className="text-green-200 md:text-lg sm:text-md ml-2 mr-2"
      onClick={() => {
        localStorage.clear()
        setLoginStatus(false)
      }}>
      Log Out
    </button>
  }

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
            <h2 className="text-green-200 md:text-lg sm:text-md ml-2 mr-2">About Us</h2>
          </Link>
          <Link to="/details">
            <h2 className="text-green-200 md:text-lg sm:text-md ml-2 mr-2">Details</h2>
          </Link>

          {authLink}
          
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={
            <HomePage
              games={games}
              getData={getData}
              setGames={setGames}
              updateDetails={setDetailsData}
            />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details/:id" element={<DetailsPage game={detailsData} />} />
          <Route path="/auth/:formType" element={<AuthFormPage setLoginStatus={setLoginStatus} />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  )
}