import { useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '../Card'

export default function Gallery({ query, games, getData, updateDetails }) {
    const [currentPage, setCurrentPage] = useState(1)
    const params = useParams()

    function getNextPage() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+1}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+1}`)
        }
        setCurrentPage(currentPage + 1)
    }
    
    function getPrevPage() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-1}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-1}`)
        }
        setCurrentPage(currentPage - 1)
    }

    function getPage(currPage) {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currPage}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currPage}`)
        }
        setCurrentPage(currPage)
    }

    function getPrevPage2() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-2}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-2}`)
        }
        setCurrentPage(currentPage - 2)
    }

    function getPrevPage3() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-3}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage-3}`)
        }
        setCurrentPage(currentPage - 3)
    }

    function getNextPage2() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+2}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+2}`)
        }
        setCurrentPage(currentPage + 2)
    }

    function getNextPage3() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+3}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+3}`)
        }
        setCurrentPage(currentPage + 3)
    }

    function getNextPage4() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+4}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+4}`)
        }
        setCurrentPage(currentPage + 4)
    }

    function getNextPage5() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+5}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+5}`)
        }
        setCurrentPage(currentPage + 5)
    }

    function getNextPage6() {
        if (query) {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+6}&search=${query}`)
        } else {
            getData(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}&page_size=20&page=${currentPage+6}`)
        }
        setCurrentPage(currentPage + 6)
    }
    
    let galleryContent = <p></p>

    galleryContent = games.map(game => <Card key={game.id} game={game} updateDetails={updateDetails}/>)

    let buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">

            <button onClick={getPrevPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Previous Page </button>

            <button onClick={getPrevPage3} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-2 mr-1">{currentPage-3}</button>

            <button onClick={getPrevPage2} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage-2}</button>

            <button onClick={getPrevPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage-1}</button>

            <button className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1 cursor-auto underline">{currentPage}</button>

            <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+1}</button>

            <button onClick={getNextPage2} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+2}</button>

            <button onClick={getNextPage3} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-2">{currentPage+3}</button>

            <button onClick={getNextPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Next Page </button>

        </div>

    if (currentPage === 1) {
        buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">

            <button className="text-gray-800 box-border mx-1 px-3 py-[6px] text-lg rounded-lg font-semibold bg-gray-700 border border-gray-700 hover:bg-gray-700 hover:opacity-100 hover:border-gray-700 transition-all duration-200 ease-in-out cursor-auto"> Previous Page </button>

            <button className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-2 mr-1 cursor-auto underline">{currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+1}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage2} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+2}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage3} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+3}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage4} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+4}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage5} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+5}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage6} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 mr-1 ml-1 mr-2">{currentPage+6}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Next Page </button>
        </div>
    } else if (currentPage === 2) {
        buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">

            <button onClick={getPrevPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Previous Page </button>

            <button onClick={getPrevPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-2 mr-1">{currentPage-1}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1 cursor-auto underline">{currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+1}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage2} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+2}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage3} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+3}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage4} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+4}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage5} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-2">{currentPage+5}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Next Page </button>
        </div>
    } else if (currentPage === 3) {
        buttons =
        <div className="page-controls flex w-full items-center justify-center bg-gray-700">

            <button onClick={getPrevPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Previous Page </button>
            
            <button onClick={getPrevPage2} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-2 mr-1">{currentPage-2}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getPrevPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage-1}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1 cursor-auto underline">{currentPage}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+1}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage2} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+2}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage3} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-1">{currentPage+3}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage4} className="align-middle items-center justify-center group relative h-12 w-8 overflow-hidden rounded-2xl bg-gray-700 text-lg font-bold text-green-400 mt-1 mb-1 ml-1 mr-2">{currentPage+4}<div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300"></div></button>

            <button onClick={getNextPage} className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Next Page </button>
        </div>
    }


    return (
        <>
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
