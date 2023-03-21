import { useState } from 'react'
import house from '../images/house.png'
import { Link } from 'react-router-dom'

function TopMenu (){
    const [showMenu, setShowMenu] = useState()

    
    // setShowMenu controla Menu dropdown com useState
    return(
        <div className=' flex bg-gray-500'>            
            <div className='flex mt-1 mb-1'>
                <Link to ="/">
                    <img src={ house} alt="" className='ml-3 mr-6 w-8 h-8 mt-1 hover:bg-gray-400' />
                </Link>
                    <div className="relative">
                        <button className="text-white bg-transparent
                        hover:border-gray-600 hover:text-gray-200 mt-1" 
                        onClick={() => setShowMenu(!showMenu)}>                        
                                Menu
                        </button>
                        {showMenu && 
                            (
                                <ul className="absolute top-10 left-0 bg-gray-500 rounded-lg py-2 px-4 justify-center items-center">
                                    <li className="mb-2">
                                        <button className="text-white bg-transparent py-1 px-4 
                                        hover:text-gray-200"
                                        onClick=""
                                        >
                                            Conheça Nós
                                        </button>
                                    </li>
                                    <li className="mb-2">
                                        <button className="text-white bg-transparent py-1 px-4 
                                        hover:text-gray-200"
                                        onClick=""
                                        >
                                            Contato
                                        </button>
                                    </li>
                                    <li className="mb-2">
                                        <button className="text-white bg-transparent py-1 px-4 
                                        hover:text-gray-200"
                                        onClick=""
                                        >
                                            Trabalhe Conosco
                                        </button>
                                    </li>
                                    <li>
                                        <button className="text-white bg-transparent py-1 px-4 
                                        hover:text-gray-200"
                                        onClick=""
                                        >
                                            Localização
                                        </button>
                                    </li>
                                </ul>
                            )
                        }
                    </div>
            </div>
        </div>
    )
}

export default TopMenu