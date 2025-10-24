import React, { useState, useEffect } from "react";
import { useHotelStore } from "../../store/useHotelStore";
import { usePartnerStore } from "../../store/usePartnerStore";
import { Building, DollarSign, BarChart3, CreditCard } from "lucide-react";
import DashboardStats from "./DashboardStats";
import BookingsList from "./BookingsList";
import WithdrawalSection from "./WithdrawalSection";
import PaymentMethods from "./PaymentMethods";
import HotelList from "./HotelList";
import BookingDetailsModal from "./BookingDetailsModal";

const PartnerDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { getHotelsByOwner } = useHotelStore();
  const { dashboardData, fetchDashboardData, isLoading } = usePartnerStore();

  useEffect(() => {
    fetchDashboardData();
    getHotelsByOwner();
  }, [fetchDashboardData, getHotelsByOwner]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <DashboardStats data={dashboardData} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <BookingsList bookings={dashboardData?.recentBookings || []} />
              <HotelList hotels={dashboardData?.hotels || []} />
            </div>
          </div>
        );
      case "withdrawals":
        return <WithdrawalSection walletBalance={dashboardData?.walletBalance || []} />;
      case "payment-methods":
        return <PaymentMethods />;
      default:
        return <DashboardStats data={dashboardData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "withdrawals", label: "Withdrawals", icon: DollarSign },
              {
                id: "payment-methods",
                label: "Payment Methods",
                icon: CreditCard,
              },
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-red-600 text-red-600"
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
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        ) : (
          renderTabContent()
        )}
      </main>

      <BookingDetailsModal />
    </div>
  );
};

export default PartnerDashboard;
