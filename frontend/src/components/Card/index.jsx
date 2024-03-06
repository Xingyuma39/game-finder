import starIcon from '../../assets/star.svg'
import eyeIcon from '../../assets/eye.svg'
import './styles.css'
import { Link } from "react-router-dom"

export default function Card({ game, updateDetails }) {

    return (
        <figure className="relative mb-4 break-inside-avoid-column border-4 border-gray-900 bg-[#b6c2d4] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out text-green-200">
            <Link to={"/details/" + game?.name} onClick={() => updateDetails(game)}>
                <div className="card-overlay absolute cursor-pointer w-full flex items-center justify-center bg-black z-10">
                    <img src={eyeIcon} className="w-10"></img>
                </div>
            </Link>

            <img src={game?.background_image} className="card-image min-h-[300px] max-h-[300px] min-w-full object-cover cursor-pointer"/>
            
            <figcaption className="py-2 pr-4 pl-2 flex justify-between items-center bg-slate-600">
                <h1 className="text-lg truncate">{game?.name}</h1>
                <h1 className="text-lg truncate">{game?.rating + '⭐'}</h1>
            </figcaption>
        </figure>
    )
}
