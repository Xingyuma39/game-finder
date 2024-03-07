import starIcon from '../../assets/star.svg'
import eyeIcon from '../../assets/eye.svg'
import './styles.css'
import { Link } from "react-router-dom"

export default function Card({ game, updateDetails }) {

    return (
        <>
            <Link to={"/details/" + game?.name} onClick={() => updateDetails(game)}>
                <div className="mb-4 relative break-inside-avoid-column max-w-4xl bg-slate-700 w-full rounded-lg shadow-xl border border-gray-500">
                    <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex">
                        <h1 className="text-green-400 font-bold text-lg ml-3 p-0 truncate">
                            {game?.name}
                        </h1>
                        <h1 className="text-lg ml-auto text-green-100">{game?.rating + '⭐'}</h1>
                    </div>
                    <div className="p-4 border-b border-gray-500 hover:bg-gray-700 flex shadow-lg hover:shadow-2x1 transition-shadow duration-300 ease-in-out">
                        <img src={game?.background_image} className="card-image w-full min-h-[300px] max-h-[300px] object-cover cursor-pointer border border-gray-500"/>
                    </div>
                </div>
            </Link>
        </>
    )
}
