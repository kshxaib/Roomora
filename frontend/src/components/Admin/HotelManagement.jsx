import React, { useEffect, useState } from "react";
import { useAdminStore } from "../../store/useAdminStore";
import { Building, Search, Filter, MapPin, Star, Eye, ToggleLeft, ToggleRight, User } from "lucide-react";

const HotelManagement = () => {
  const { hotels, fetchAllHotels } = useAdminStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchAllHotels();
  }, [fetchAllHotels]);

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.ownerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Hotel Management</h3>
          <p className="text-sm text-gray-600">Manage all platform hotels</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search hotels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedHotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Hotel Image */}
            <div className="h-48 bg-gray-200 relative">
              {hotel.images?.[0] ? (
                <img
                  src={hotel.images[0]}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
                  <Building className="h-12 w-12 text-blue-400" />
                </div>
              )}
            </div>

            {/* Hotel Details */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-lg text-gray-800 truncate">{hotel.name}</h3>
                <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  {hotel.rating || '4.2'}
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{hotel.city}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                <div className="text-gray-600">
                  <p className="font-medium">₹{hotel.price}/night</p>
                  <p>Price</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-medium">{hotel.availableRooms}/{hotel.totalRooms}</p>
                  <p>Rooms</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <div className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  <span>{hotel.ownerName}</span>
                </div>
                <span>{hotel.totalBookings} bookings</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredHotels.length === 0 && (
        <div className="text-center py-12">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No hotels found</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-sm text-gray-700">
            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredHotels.length)} of {filteredHotels.length} results
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelManagement;