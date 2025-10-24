import React from 'react';
import { 
  Users, 
  Building, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  ArrowUp, 
  ArrowDown, 
  CreditCard,
  Shield
} from 'lucide-react';
import { useAdminStore } from '../../store/useAdminStore';

const StatCard = ({ icon: Icon, label, value, color, trend, prefix = "" }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 group">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className={`p-4 rounded-2xl ${color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{prefix}{value}</p>
        </div>
      </div>
      {trend && (
        <div
          className={`flex items-center text-sm font-semibold px-3 py-1.5 rounded-full ${
            trend > 0
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {trend > 0 ? (
            <ArrowUp className="h-3 w-3 mr-1" />
          ) : (
            <ArrowDown className="h-3 w-3 mr-1" />
          )}
          {Math.abs(trend)}%
        </div>
      )}
    </div>
  </div>
);

const AdminStats = () => {
  const { dashboardStats } = useAdminStore();

  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: dashboardStats?.totalUsers || 0,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      icon: Building,
      label: 'Total Hotels',
      value: dashboardStats?.totalHotels || 0,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      icon: Calendar,
      label: 'Total Bookings',
      value: dashboardStats?.totalBookings || 0,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      icon: DollarSign,
      label: 'Total Revenue',
      value: dashboardStats?.totalRevenue || 0,
      color: 'bg-gradient-to-br from-amber-500 to-amber-600',
      prefix: '₹',
    },
    {
      icon: Shield,
      label: 'Admin Earnings',
      value: dashboardStats?.adminEarnings || 0,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      prefix: '₹',
    },
    {
      icon: CreditCard,
      label: 'Pending Withdrawals',
      value: dashboardStats?.pendingWithdrawals || 0,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      trend: -5,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default AdminStats;
