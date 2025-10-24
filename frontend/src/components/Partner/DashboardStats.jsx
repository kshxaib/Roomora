import React from 'react';
import { Building, Calendar, Users, DollarSign, TrendingUp } from 'lucide-react';
import AddNewHotel from './AddNewHotel';

const StatCard = ({ icon: Icon, label, value, color, trend }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`p-3 rounded-xl ${color} mr-4`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
      {trend && (
        <div className={`flex items-center text-sm font-medium ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          <TrendingUp className={`h-4 w-4 mr-1 ${trend < 0 ? 'rotate-180' : ''}`} />
          {Math.abs(trend)}%
        </div>
      )}
    </div>
  </div>
);

const DashboardStats = ({ data }) => {
  const stats = [
    {
      icon: Building,
      label: 'Total Hotels',
      value: data?.totalHotels || 0,
      color: 'bg-blue-500',
      trend: 12
    },
    {
      icon: Calendar,
      label: 'Total Bookings',
      value: data?.totalBookings || 0,
      color: 'bg-green-500',
      trend: 8
    },
    {
      icon: Users,
      label: 'Active Bookings',
      value: data?.activeBookings || 0,
      color: 'bg-purple-500',
      trend: 5
    },
    {
      icon: DollarSign,
      label: 'Total Earnings',
      value: `₹${(data?.totalEarnings || 0).toLocaleString()}`,
      color: 'bg-red-500',
      trend: 15
    }
  ];

  return (
  <div className="space-y-6">
    {/* First row - Stats cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
    
    {/* Second row - Wallet balance and Add Hotel */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Wallet Balance */}
      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-sm p-6 text-white hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 rounded-xl bg-white/20 mr-4">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium">Wallet Balance</p>
              <p className="text-2xl font-bold">
                ₹{(data?.walletBalance || 0).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add New Hotel Card */}
      <AddNewHotel />
    </div>
  </div>
);
};

export default DashboardStats;