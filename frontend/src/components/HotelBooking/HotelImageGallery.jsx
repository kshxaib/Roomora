import React from "react";
import { Heart } from "lucide-react";

const HotelImageGallery = ({ images, activeImage, setActiveImage, hotelName }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={images?.[activeImage] || "/default-hotel.jpg"}
            alt={hotelName}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white transition-colors">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-600 transition-colors" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {images?.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={`relative h-44 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
              activeImage === index 
                ? 'border-red-500 shadow-md' 
                : 'border-transparent hover:border-red-300'
            }`}
            onClick={() => setActiveImage(index)}
          >
            <img
              src={image}
              alt={`${hotelName} ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            {activeImage === index && (
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelImageGallery;