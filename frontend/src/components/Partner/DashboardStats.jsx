import React from 'react';
import { Building, Calendar, DollarSign, Users } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-lg ${color} mr-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  </div>
);

const DashboardStats = ({ data }) => {
  const stats = [
    {
      icon: Building,
      label: 'Total Hotels',
      value: data?.totalHotels || 0,
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      label: 'Total Bookings',
      value: data?.totalBookings || 0,
      color: 'bg-green-500'
    },
    {
      icon: Users,
      label: 'Active Bookings',
      value: data?.activeBookings || 0,
      color: 'bg-purple-500'
    },
    {
      icon: DollarSign,
      label: 'Total Earnings',
      value: `₹${(data?.totalEarnings || 0).toLocaleString()}`,
      color: 'bg-red-500'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
      {/* Wallet Balance */}
      <div className="bg-white rounded-lg shadow-sm p-6 col-span-1 md:col-span-2 lg:col-span-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-yellow-500 mr-4">
              <DollarSign className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Wallet Balance</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{(data?.walletBalance || 0).toLocaleString()}
              </p>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;