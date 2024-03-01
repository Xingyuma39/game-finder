import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <main className="h-[93vh] w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl text-green-300 tracking-widest">
                404
            </h1>
            <div className="text-green-300">
                Page Not Found
            </div>

            <br/>

            <Link to="/">
                <button className="align-middle items-center justify-center group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-900 text-lg font-bold text-green-300 mr-1 ml-1 mt-1 mb-1" href="/">
                    Go Home
                <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div></button>
            </Link>

        </main>
    )
}