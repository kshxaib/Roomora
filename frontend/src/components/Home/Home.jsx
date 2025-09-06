import React from "react";
import { useAuthStore } from "../../store/useAuthStore";

export default function Home() {
  const {authUser} = useAuthStore();
  
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ✅ Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src="/bg.jpg"
          alt="Hotel Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">Find Your Perfect Stay</h1>
          <p className="mt-4 text-lg md:text-xl">Hotels, Resorts & Villas at best prices</p>

          {/* ✅ Search Bar */}
          <div className="mt-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center p-4 space-y-3 md:space-y-0 md:space-x-4 max-w-3xl mx-auto text-black">
            <input
              type="text"
              placeholder="Search city, area or hotel"
              className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
            <input type="date" className="border border-gray-300 rounded px-4 py-2 focus:outline-none" />
            <input type="date" className="border border-gray-300 rounded px-4 py-2 focus:outline-none" />
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Popular Cities */}
      <section className="py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {["Chennai", "Mumbai", "Bangalore", "Goa", "Delhi"].map((city) => (
            <div
              key={city}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition transform cursor-pointer"
            >
              <img
                src={`/${city}.jpg`}
                alt={city}
                className="h-32 w-full object-cover"
              />
              <div className="p-2 text-center font-semibold">{city}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Offers Section */}
      <section className="py-10 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Exclusive Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((offer) => (
              <div
                key={offer}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <img
                  src={`https://source.unsplash.com/400x300/?hotel,room&sig=${offer}`}
                  alt="Offer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Flat 20% Off</h3>
                  <p className="text-gray-600 text-sm">On your first booking</p>
                  <button className="mt-3 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Featured Properties */}
      <section className="py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((property) => (
            <div
              key={property}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={`https://source.unsplash.com/400x300/?luxury,hotel&sig=${property}`}
                alt="Property"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Luxury Stay {property}</h3>
                <p className="text-gray-600 text-sm">₹2,499 / night</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
