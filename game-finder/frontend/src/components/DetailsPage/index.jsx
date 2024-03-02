import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import CommentSection from '../CommentSection'


export default function DetailsPage(props) {
    const [game, setGame] = useState({ ...props.game })
    const params = useParams()

    // console.log(game)
    // console.log(game.id)


    useEffect(() => {
        // Query the API if a Card component was not clicked on
        if (!game.id) {
            // console.log("hello")
            async function getGameFromAPI() {
                const res = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_KEY}` + `&search=${params.id}`)
                const { results } = await res.json()
                // console.log(results)
                // console.log(params.id)
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
            // platforms += `${game?.platforms[platform].name}  `
            // platforms += `${plat.platform.name}`
            // console.log(plat)
            platforms += `${game?.platforms[plat].platform.name} / \n`
            // console.log(game.platforms[plat].platform.name)
            pf += <div>{game?.platforms[plat].platform.name}</div>

            // console.log(platforms)

            p = <p className="text-green-100">{platforms}</p>
            // p += '{"\n"}'
            pa.push(<p className="text-green-100">{game?.platforms[plat].platform.name}</p>)

        }

        for (let tag in game?.tags) {
            // console.log(game?.tags[tag])
            if(game?.tags[tag].language === "eng") {
                tg.push(<p className="text-green-100">{game?.tags[tag].name}</p>)
            }
        }
        // console.log(tg)

        // p = <p className="text-green-100">{platforms}</p>

        return (
            <main>

                {/* <Link to="/">
                    <div className="pl-4 pt-3 pr-1 pb-1 page-controls flex w-full items-center justify-start bg-gray-800">
                        <button className="group relative text-green-100 box-border mx-1 px-3 py-[6px] text-lg border-2 border-gray-600 rounded-lg font-semibold bg-gray-900 overflow-hidden border-gray-600 w-36">Back<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>
                    </div>
                </Link> */}

                <div className="min-h-screen flex p-4 items-start justify-center px-4">

                    <div className="max-w-4xl bg-slate-700 w-full rounded-lg shadow-xl border border-gray-500">
                        <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex">
                            <Link to="/">
                                <div className="page-controls flex w-full items-center justify-start bg-gray-700">
                                    <button className="group relative text-green-100 box-border mx-0 px-3 py-[6px] text-lg border-2 border-gray-600 rounded-lg font-semibold bg-gray-900 overflow-hidden border-gray-600 w-20">Back<div className="absolute inset-0 h-full w-full scale-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-gray-200/40"></div></button>
                                </div>
                            </Link>
                            <h2 className="text-green-400 font-bold text-2xl ml-3 p-1">
                                {game?.name}
                            </h2>
                            <h2></h2>
                        </div>
                        <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex">
                            <img src={game?.background_image} className="card-image max-w-sm object-cover cursor-pointer border border-gray-500"/>
                            {/* min-h-[200px] min-w-full */}
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
                                {/* <p className="text-green-100"> */}
                                    {/* {platforms} */}
                                    {/* {game?.platforms[0].platform.name} */}
                                    {/* {pf} */}
                                {/* </p> */}
                                {/* {p} */}
                                {pa}
                            </div>

                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b border-gray-500">
                                <p className="text-green-500 font-bold">
                                    Tag(s):
                                </p>
                                {tg}
                            </div>
        
                            {/* if(country.user) { */}
                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4">
                                <p className="text-green-500 font-bold">
                                    Release Date:
                                </p>
                                <p className="text-green-100">
                                    {game?.released}
                                </p>
                            </div>
                            
                            {/* } */}
                        </div>
                    </div>
                </div>

                <CommentSection gameId={game?.id} />

            </main>
        )
    }
    // } else {
    //     return (
    //         <p>Your Country data is loading...</p>
    //     )
    // }

}