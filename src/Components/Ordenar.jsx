const Ordenar = props => {
    console.log(props)
    return(
        <>
            <button className="bg-transparent hover:border-gray-600 hover:text-gray-500 mt-1" 
                onClick={() => props.setShowOrdenar(!props.showOrdenar)}>                        
                {props.ordenar}
            </button>
            {props.showOrdenar && 
                (
                    <ul className="absolute left-60 bg-gray-500 rounded-lg py-1 px-3 
                                flex flex-col items-center"
                    >
                        <button 
                            className="text-white bg-transparent px-3 
                                    hover:text-gray-100 text-sm "
                            onClick={() => props.handleClickButton('Menor Preço')}
                            
                        >
                            {/* muda ordem chamando handleclickbutton*/}                                     
                            Menor Preço
                        </button>
                        <button 
                            className="text-white bg-transparent px-3 
                            hover:text-gray-200 text-sm "
                            onClick={() =>  props.handleClickButton('Maior Preço')}
                        >
                            {/* muda ordem chamando handleclickbutton*/} 
                            Maior Preço
                        </button>
                        <button 
                            className="text-white bg-transparent px-3 
                            hover:text-gray-200 text-sm "
                            onClick={() =>  props.handleClickButton('Padrão')}
                        >
                            {/* muda ordem chamando handleclickbutton*/} 
                            Padrão
                        </button>              
                    </ul>
                )
            }
        </>
    )
    
}

export default Ordenar