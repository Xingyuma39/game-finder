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

            {/* <button onClick={getPrevPage} className="align-middle items-center justify-center group relative h-12 w-36 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-100 mr-1 ml-1 mt-1 mb-1 border border-gray-500">Previous Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button> */}

            <button onClick={getPrevPage} className="group relative text-green-100 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-600 rounded-lg font-semibold bg-gray-900 overflow-hidden border-gray-600 w-36"> Previous Page<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>

            <button className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mr-1 ml-1 mt-1 mb-1">{currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            {/* <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-36 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-100 mr-1 ml-1 mt-1 mb-1 border border-gray-500">Next Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button> */}

            <button onClick={getNextPage} className="group relative text-green-100 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-600 rounded-lg font-semibold bg-gray-900 overflow-hidden border-gray-500 w-36"> Next Page<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>

        </div>

    if (currentPage === 1) {
        buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">
            
            {/* <button className="align-middle items-center justify-center group relative h-12 w-40 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-gray-800 mr-1 ml-1 mt-1 mb-1">Previous Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl"></div></button> */}

            <button className="group relative text-gray-800 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-700 rounded-lg font-semibold bg-gray-700 overflow-hidden border-gray-600 w-36 cursor-auto"> Previous Page<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300"></div></button>

            <button className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mr-1 ml-1 mt-1 mb-1">{currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            {/* <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-40 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-100 mr-1 ml-1 mt-1 mb-1 border border-gray-500">Next Page<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button> */}

            <button onClick={getNextPage} className="group relative text-green-100 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-600 rounded-lg font-semibold bg-gray-900 overflow-hidden border-gray-500 w-36"> Next Page<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>
        </div>
    }


    return (
        <>
            {/* <div className="page-controls flex w-full items-center justify-center bg-gray-800">
                <button className="align-middle items-center justify-center group relative h-12 w-44 overflow-hidden rounded-2xl bg-gray-800 text-lg font-bold text-green-300 mr-1 ml-1 mt-1 mb-1">Current Page: {currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>
            </div> */}

            <div>
                {buttons}
            </div>
            
            <div className="w-4/5 mt-10 mx-auto xl:columns-4 lg:columns-3 md:columns-2">
                {galleryContent}
            </div>

            <div>
                {buttons}
            </div>

            <br/>

        </>
    )    
}
