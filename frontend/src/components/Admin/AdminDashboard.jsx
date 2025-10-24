import React, { useState, useEffect } from "react";
import { 
  Users, 
  Building, 
  Calendar, 
  DollarSign, 
  CreditCard, 
  BarChart3, 
  Shield,
  TrendingUp,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { useAdminStore } from "../../store/useAdminStore";
import AdminStats from "./AdminStats";
import WithdrawalManagement from "./WithdrawalManagement";
import UserManagement from "./UserManagement";
import HotelManagement from "./HotelManagement";
import BookingManagement from "./BookingManagement";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { fetchDashboardStats, isLoadingData } = useAdminStore();

  useEffect(() => {
    fetchDashboardStats();
  }, [fetchDashboardStats]);

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "withdrawals", label: "Withdrawals", icon: CreditCard },
    { id: "users", label: "Users", icon: Users },
    { id: "hotels", label: "Hotels", icon: Building },
    { id: "bookings", label: "Bookings", icon: Calendar },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <AdminStats />;
      case "withdrawals":
        return <WithdrawalManagement />;
      case "users":
        return <UserManagement />;
      case "hotels":
        return <HotelManagement />;
      case "bookings":
        return <BookingManagement />;
      default:
        return <AdminStats />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">      
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-purple-600 text-purple-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
        <div></div>
          
          {activeTab === "overview" && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Last updated: {new Date().toLocaleTimeString()}</span>
            </div>
          )}
        </div>

        {isLoadingData ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          renderTabContent()
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;