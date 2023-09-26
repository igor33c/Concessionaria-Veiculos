import { useState} from "react"
import { Link } from "react-router-dom"
function SearchButton() {
    const [search, setSearch] = useState('')    
    function handleSearch(e){
        setSearch(e.target.value)
    }    
    function restartSearch(){
        setSearch('')
    }
    return (
        <div className="flex flex-col px-8 md:flex-row items-center md:space-x-4">
            <input
                type="text"
                className="flex-grow px-4 py-2 text-violet-900 bg-white border rounded-md 
                         focus:border-blue-300 focus:ring-blue-400 focus:outline-none 
                           focus:ring focus:ring-opacity-40"
                placeholder="Filtrar marca ou modelo"
                value={search}
                onChange={handleSearch}
            />
            <Link
                to="/search"
                state={search === '' ? ' ' : search}
                className="mt-2 md:mt-0"
            >
                <button
                    className="mt-1 text-slate-900 bg-blue-200 hover:bg-blue-300 focus:ring-4 
                             focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full 
                               md:w-auto focus:outline-none"
                    onClick={restartSearch}
                >
                Buscar
                </button>
            </Link>
        </div>
    )
}

export default SearchButton