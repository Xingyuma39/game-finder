// export default function HomePage() {
//     return <h1 className="text-green-200">Home Page</h1>
// }

import { useState } from "react"
import Gallery from '../Gallery'

export default function HomePage({ games, setGames, getData, updateDetails }) {
    const [query, setQuery] = useState("")

    function handleSubmit(event) {
        // prevent the form from reloading the page
        event.preventDefault()
        
        setGames([])
        // query the API with the user's input
        // refreshQueue(`https://api.rawg.io/api/games?key=${import.meta.env.RAWG_KEY}&search=${query}&page_size=20`)

        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&search=${query}&page_size=20`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20`)
        }

        // console.log(import.meta.env.API_KEY)
    }

    return (
        <>
            <h1 className="text-green-100 mt-5 text-center md:text-3xl text-2xl font-bold">Welcome to Game Finder</h1>
            <h2 className="text-green-100 text-center md:text-xl text-lg font-semibold">Search for games</h2>
            <br />

            <div className="pb-10">
                <form onSubmit={handleSubmit} className="mt-4 text-center">
                    <input className="box-border p-2 w-1/2 rounded-md border-2 focus:outline-none focus:border-orange-500 border-gray-500" name="search" placeholder="Search for a game..." value={query} onChange={event => setQuery(event.target.value)} />
                        
                    <button type="submit" className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-600 rounded-lg font-semibold bg-gray-900 hover:bg-green-700 hover:opacity-80 transition-all duration-200 ease-in-out"> Search </button>
                </form>
            </div>

            <Gallery
                query={query}
                games={games}
                getData={getData}
                updateDetails={updateDetails}
            />

        </>
    )
}
