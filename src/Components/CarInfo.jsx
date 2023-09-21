import React, { useState } from 'react'

const CarInfo = (props) => {
  const [currentImage, setCurrentImage] = useState(props.carInfo.photo.photo_1)//começar da img 1

  const handleImageClick = (photo) => {
    setCurrentImage(photo)
  }
  //console.log(props.carInfo)

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <div className="w-full h-64 sm:h-96 overflow-hidden">
          <img src={currentImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

<      div className="flex justify-center mt-4">        
        {
          Object.values(props.carInfo.photo).map
          (
            (photo, index) => 
            (
              <img
                key={index}
                src={photo}
                alt=""
                onClick={() => handleImageClick(photo)}
                className={`w-12 h-12 cursor-pointer hover:opacity-80 ${
                  currentImage === photo ? 'border-4 border-blue-500' : ''
                }`}
              />
              
            )
          )
        }        
      </div>
      <div className=' py-2'>
        {
          //customizar lista items carro
        }
        <div className="bg-gray-100 bg-opacity-80 p-4 rounded-md shadow-md">
          <span className="text-xl text-gray-700 font-semibold">
            {props.carInfo.texto}
          </span>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              <span className="text-lg text-gray-900">
                ✅ {props.carInfo.km} km
              </span> 
            </li>
            <li>
              <span className="text-lg text-gray-900">
                ✅ Câmbio: {props.carInfo.equipamentos.cambio}
              </span>            
            </li>
            <li>
              <span className="text-lg text-gray-900">
                ✅ Ar Condicionado: {props.carInfo.equipamentos.arcondicionado ? 'Sim' : 'Não'}
              </span>            
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default CarInfo