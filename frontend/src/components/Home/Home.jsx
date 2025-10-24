import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useHotelStore } from "../../store/useHotelStore";
import { Search, MapPin, Star, Heart, Shield, Award, Clock, Users, ChevronRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const popularCities = [
  { name: "Mumbai", image: "Mumbai.jpg" },
  { name: "Delhi", image: "Delhi.jpg" },
  { name: "Bangalore", image: "Bangalore.jpg" },
  { name: "Chennai", image: "Chennai.jpg"},
  { name: "Goa", image: "Goa.jpg" },
  { name: "Hyderabad", image: "Hyderabad.jpg"},
  { name: "Jaipur", image: "Jaipur.jpg" },
  { name: "Kolkata", image: "Kolkata.jpg"}
];

export default function Home() {
  const { authUser } = useAuthStore();
  const { 
    allHotels, 
    featuredHotels, 
    isLoading, 
    getAllHotels, 
    getFeaturedHotels, 
    getHotelsByCity 
  } = useHotelStore();
  const navigate = useNavigate();
  
  const [selectedCity, setSelectedCity] = useState("All");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    getAllHotels();
    getFeaturedHotels();
  }, [getAllHotels, getFeaturedHotels]);

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    setCheckInDate(today.toISOString().split('T')[0]);
    setCheckOutDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const filteredHotels = selectedCity === "All" 
    ? (featuredHotels.length > 0 ? featuredHotels : allHotels.slice(0, 8))
    : allHotels.filter(hotel => hotel.city === selectedCity).slice(0, 8);

  const availableCities = ["All", ...new Set(allHotels.map(hotel => hotel.city))];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      getHotelsByCity(searchQuery);
      setSelectedCity(searchQuery);
    }
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    getHotelsByCity(cityName);
  };

  const handleViewDetails = (hotelId) => {
    navigate(`/hotel/${hotelId}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900 min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg.jpg"
            alt="Luxury Hotel Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Discover Your Perfect Stay
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200">
              Experience luxury accommodations at unbeatable prices across India's finest destinations
            </p>
            <button
              onClick={() => navigate('/hotels')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-8 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Explore All Hotels
            </button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Secure Payments</h3>
              <p className="text-gray-600 text-sm">100% secure payment processing</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Best Price Guarantee</h3>
              <p className="text-gray-600 text-sm">Find a lower rate? We'll match it</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer service</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white hover:shadow-md transition-all">
              <div className="p-3 rounded-full bg-red-100 text-red-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">5M+ Guests</h3>
              <p className="text-gray-600 text-sm">Trusted by millions of travelers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-red-50/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover amazing hotels in India's most loved cities
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularCities.map((city) => (
              <div
                key={city.name}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-200"
                onClick={() => handleCityClick(city.name)}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 group-hover:opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-bold text-lg">{city.name}</h3>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-500 text-white p-1 rounded-full">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Filter and Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                {selectedCity === "All" ? "Featured Properties" : `Hotels in ${selectedCity}`}
              </h2>
              <p className="text-gray-600">
                {selectedCity === "All" 
                  ? "Handpicked luxury accommodations for your perfect stay" 
                  : `Discover amazing hotels in ${selectedCity}`
                }
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <label className="text-sm font-medium text-gray-700 mr-3">Filter by City:</label>
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  if (e.target.value !== "All") {
                    getHotelsByCity(e.target.value);
                  } else {
                    getAllHotels();
                  }
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                {availableCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={hotel.images?.[0] || ""}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors">
                          <Heart className="h-5 w-5 text-gray-600 hover:text-red-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                          {hotel.city}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 text-gray-800 group-hover:text-red-700 transition-colors">
                        {hotel.name}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-semibold">{hotel.rating || 4.5}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold text-red-600">₹{hotel.price?.toLocaleString()}</p>
                          <p className="text-sm text-gray-600">per night</p>
                        </div>
                        <button 
                          onClick={() => handleViewDetails(hotel.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow hover:shadow-md"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredHotels.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    {selectedCity === "All" 
                      ? "No hotels available at the moment. Please check back later!" 
                      : `No hotels found in ${selectedCity}. Try another city!`
                    }
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-red-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Mail className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-red-100 text-lg max-w-2xl mx-auto">
              Get exclusive access to special deals, new destinations, and travel tips delivered straight to your inbox
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 pl-12 rounded-lg bg-amber-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-lg"
                  required
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <button 
                type="submit"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Get Updates
              </button>
            </div>
            <p className="text-red-100 text-sm text-center mt-3">
              No spam ever. Unsubscribe anytime.
            </p>
          </form>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">15%</div>
              <div className="text-red-100 text-sm">Off Your First Booking</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-white mb-1">Early</div>
              <div className="text-red-100 text-sm">Access to Deals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:col-span-1">
              <div className="text-2xl font-bold text-white mb-1">Weekly</div>
              <div className="text-red-100 text-sm">Travel Inspiration</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}