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

    // let currencies = ''
    // let languages = ''
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
    
        // for (let currency in country.currencies) {
        //     // currencies += `${country.currencies[currency]} `
        //     currencies += `${currency}  `
        // }

        // for (let continent of country.continents) {
        //     continents += `${continent}  `
        // }

        // let population = country.population.toLocaleString("en-US")

        return (
            <main>

                <Link to="/">
                    <div className="p-5 page-controls flex w-full items-center justify-start bg-gray-800">
                        <button className="align-middle items-center justify-center group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-300 mr-1 ml-1 border border-gray-500">
                        Back
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button>
                    </div>
                </Link>

                <div className="min-h-screen flex p-5 items-start justify-center px-4">

                    <div className="max-w-4xl bg-slate-700 w-full rounded-lg shadow-xl border border-gray-500">
                        <div className="p-4 border-b border-gray-500 hover:bg-gray-700">
                            <h2 className="text-green-400 font-bold text-2xl ">
                                {game?.name}
                            </h2>
                        </div>
                        <div className="p-4 border-b border-gray-500 hover:bg-gray-700">
                            <img src={game?.background_image} className="card-image max-w-sm object-cover cursor-pointer"/>
                            {/* min-h-[200px] min-w-full */}
                            <br/>
                        </div>
                        <div>

                            <div className="md:grid md:grid-cols-2 hover:bg-gray-700 md:space-y-0 space-y-1 p-4 border-b border-gray-500">
                                <p className="text-green-500 font-bold">
                                    Rating:
                                </p>
                                <p className="text-green-100">
                                    {game?.rating}
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

                <br/>

            </main>
        )
    }
    // } else {
    //     return (
    //         <p>Your Country data is loading...</p>
    //     )
    // }

}