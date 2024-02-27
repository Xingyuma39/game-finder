// export default function Gallery() {
//     return <h1 className="text-green-200">Gallery</h1>
// }

import { useState } from 'react'
import Card from '../Card'

export default function Gallery({ query, games, getData, updateDetails }) {
    const [currentPage, setCurrentPage] = useState(1)

    function getNextPage() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+1}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+1}`)
        }
        setCurrentPage(currentPage + 1)
    }
    
    // Update the current page so that gallery content changes
    function getPrevPage() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-1}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-1}`)
        }
        setCurrentPage(currentPage - 1)
    }
    
    let galleryContent = <p></p>

    galleryContent = games.map(game => <Card key={game.id} game={game} updateDetails={updateDetails}/>)

    let buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">

            <button onClick={getPrevPage} className="align-middle items-center justify-center group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-100 mr-1 ml-1 mt-1 mb-1">Previous Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button>

            <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-100 mr-1 ml-1 mt-1 mb-1">Next Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button>

        </div>

    if (currentPage === 1) {
        buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">

            <button className="align-middle items-center justify-center group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-black mr-1 ml-1 mt-1 mb-1">Previous Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl"></div></button>

            <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-100 mr-1 ml-1 mt-1 mb-1">Next Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button>

        </div>
    }


    return (
        <>
            <div className="page-controls flex w-full items-center justify-center bg-gray-800">
                <button className="align-middle items-center justify-center group relative h-12 w-44 overflow-hidden rounded-2xl bg-gray-800 text-lg font-bold text-green-300 mr-1 ml-1 mt-1 mb-1">Current Page: {currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>
            </div>

            <div>
                {buttons}
            </div>
            
            <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
                {galleryContent}
            </div>
        </>
    )    
}
