import starIcon from '../../assets/star.svg'
import eyeIcon from '../../assets/eye.svg'
import './styles.css'
import { Link } from "react-router-dom"

export default function Card({ game, updateDetails }) {
    // let languages = ''
    // let currencies = ''

    // for (let language in country.languages) {
    //     languages += `${country.languages[language]}  `
    // }

    // for (let currency in country.currencies) {
    //     // currencies += `${country.currencies[currency]} `
    //     currencies += `${currency}  `
    // }

    return (
        // <figure className="relative mb-4 break-inside-avoid-column border-2 border-black bg-[#b6c2d4] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        //     <Link to={"/details/" + game.id} onClick={() => updateDetails(game)}>
        //         <div className="card-overlay absolute cursor-pointer w-full h-full flex items-center justify-center bg-black z-10">
        //             <img src={eyeIcon} className="w-10"></img>
        //         </div>
        //     </Link>

        //     <img src={game.background_image} className="card-image min-h-[300px] max-h-[300px] min-w-full object-cover cursor-pointer p-4 border-b hover:bg-gray-600"/>
            
        //     <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center p-4 border-b hover:bg-gray-600">
        //         <h1 className="text-lg truncate">Name: {game.name}</h1>
        //         {/* <img src={starIcon} className="cursor-pointer hover:transform hover:scale-110 transition-all duration-200 ease-in-out" /> */}
        //     </figcaption>

        //     <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center p-4 border-b hover:bg-gray-600">
        //         <h1 className="text-lg truncate">Rating: {game.rating}</h1>
        //     </figcaption>
            
        //     <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center p-4 border-b hover:bg-gray-600">
        //         <h1 className="text-lg truncate">Release Date: {game.released}</h1>
        //     </figcaption>

        // </figure>

        <figure className="relative mb-4 break-inside-avoid-column border-4 border-gray-900 bg-[#b6c2d4] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out text-green-200">
            <Link to={"/details/" + game?.id} onClick={() => updateDetails(game)}>
                <div className="card-overlay absolute cursor-pointer w-full flex items-center justify-center bg-black z-10">
                    <img src={eyeIcon} className="w-10"></img>
                </div>
            </Link>

            <img src={game?.background_image} className="card-image min-h-[300px] max-h-[300px] min-w-full object-cover cursor-pointer"/>
            
            <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center bg-slate-600">
                <h1 className="text-lg truncate">{game?.name}</h1>
                <h1 className="text-lg truncate">{game?.rating + '⭐'}</h1>
                {/* <img src={starIcon} className="cursor-pointer hover:transform hover:scale-110 transition-all duration-200 ease-in-out" /> */}
            </figcaption>
        </figure>
    )
}
