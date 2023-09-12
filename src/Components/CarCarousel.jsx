import React, { useState } from 'react';

const CarCarousel = (props) => {
  const [currentImage, setCurrentImage] = useState(props.carInfo.photo.photo_1); // Start with the first image

  const handleImageClick = (photo) => {
    setCurrentImage(photo);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative">
        <div className="w-full h-64 sm:h-96 overflow-hidden">
          <img src={currentImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {Object.values(props.carInfo.photo).map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt=""
            onClick={() => handleImageClick(photo)}
            className={`w-12 h-12 cursor-pointer hover:opacity-80 ${
              currentImage === photo ? 'border-4 border-blue-500' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarCarousel;