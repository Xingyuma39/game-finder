import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import CommentSection from '../CommentSection'


export default function DetailsPage(props) {
    const [game, setGame] = useState({ ...props.game })
    const params = useParams()

    useEffect(() => {
        // Query the API if a Card component was not clicked on
        if (!game.id) {
            async function getGameFromAPI() {
                const res = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}` + `&search=${params.id}`)
                const { results } = await res.json()
                setGame(results[0])
            }
            getGameFromAPI()
        }
    }, [])

    let platforms = ''
    let pf = <div></div>
    let p = <p className="text-green-100"></p>
    let pa = []
    let tg = []

    if(game.id) {

        for (let plat in game?.platforms) {
            platforms += `${game?.platforms[plat].platform.name} / \n`
            pf += <div>{game?.platforms[plat].platform.name}</div>
            p = <p className="text-green-100">{platforms}</p>
            pa.push(<p className="text-green-100">{game?.platforms[plat].platform.name}</p>)
        }

        for (let tag in game?.tags) {
            if(game?.tags[tag].language === "eng") {
                tg.push(<p className="text-green-100">{game?.tags[tag].name}</p>)
            }
        }

        return (
            <main>

                <div className="min-h-screen flex p-4 items-start justify-center px-4">

                    <div className="max-w-4xl bg-slate-700 w-full rounded-lg shadow-xl border border-gray-500">
                        <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex">
                            <Link to="/">
                                <div className="page-controls flex w-full items-center justify-start bg-gray-700">
                                    <button className="text-green-100 box-border mx-1 px-3 py-[6px] text-lg border border-gray-600 rounded-lg font-semibold bg-slate-900 hover:bg-slate-700 hover:opacity-80 hover:border-gray-400 transition-all duration-200 ease-in-out"> Back </button>
                                </div>
                            </Link>

                            <h2 className="text-green-400 font-bold text-2xl ml-3 p-1">
                                {game?.name}
                            </h2>
                            <h2></h2>
                        </div>
                        <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex">
                            <img src={game?.background_image} className="card-image max-w-sm object-cover cursor-pointer border border-gray-500"/>
                            <br/>
                        </div>
                        <div>

                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b border-gray-500">
                                <p className="text-green-500 font-bold">
                                    Rating:
                                </p>
                                <p className="text-green-100">
                                    {game?.rating}⭐
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b border-gray-500">
                                <p className="text-green-500 font-bold">
                                    ESRB Rating:
                                </p>
                                <p className="text-green-100">
                                    {game?.esrb_rating.name}
                                </p>
                            </div>

                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b border-gray-500">
                                <p className="text-green-500 font-bold">
                                    Platform(s):
                                </p>

                                {pa}
                            </div>

                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b border-gray-500">
                                <p className="text-green-500 font-bold">
                                    Tag(s):
                                </p>
                                {tg}
                            </div>
        
                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4">
                                <p className="text-green-500 font-bold">
                                    Release Date:
                                </p>
                                <p className="text-green-100">
                                    {game?.released}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <CommentSection gameId={game?.id} />

            </main>
        )
    }
}