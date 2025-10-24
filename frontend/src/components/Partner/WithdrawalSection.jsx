import React, { useState, useEffect } from 'react';
import { usePartnerStore } from '../../store/usePartnerStore';
import { DollarSign, Clock, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

const WithdrawalSection = ({ walletBalance }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethodId, setPaymentMethodId] = useState('');
  const { withdrawals, requestWithdrawal, isLoading, paymentMethods, fetchWithdrawals, fetchPaymentMethods } = usePartnerStore();

  useEffect(() => {
    fetchWithdrawals();
    fetchPaymentMethods();
  }, [fetchWithdrawals, fetchPaymentMethods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && paymentMethodId) {
      requestWithdrawal({ amount: parseFloat(amount), paymentMethodId });
      setAmount('');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'COMPLETED':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'PENDING':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'FAILED':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'FAILED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Withdrawal Form */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Request Withdrawal</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium text-gray-800">Available Balance</h3>
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">₹{walletBalance}</p>
            <p className="text-sm text-gray-600 mt-1">Minimum withdrawal amount: ₹100</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter amount"
                min="100"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
              <select
                value={paymentMethodId}
                onChange={(e) => setPaymentMethodId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              >
                <option value="">Select payment method</option>
                {paymentMethods.map(method => (
                  <option key={method.id} value={method.id}>
                    {method.type === 'UPI'
                      ? `UPI: ${method.upiId}`
                      : `Bank: ${method.bankName} (••••${method.accountNumber.slice(-4)})`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3.5 rounded-lg transition-colors disabled:opacity-50 font-medium"
          >
            {isLoading ? 'Processing...' : 'Request Withdrawal'}
          </button>
        </form>
      </div>

      {/* Withdrawal History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Withdrawal History</h2>
        <div className="space-y-4">
          {withdrawals.map(withdrawal => (
            <div key={withdrawal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="p-2">
                  {getStatusIcon(withdrawal.status)}
                </div>
                <div>
                  <p className="font-medium text-gray-800">₹{withdrawal.amount}</p>
                  <p className="text-sm text-gray-600">
                    {withdrawal.paymentMethod.type === 'BANK_ACCOUNT'
                      ? `Bank •••${withdrawal.paymentMethod.lastFour}`
                      : `UPI •••${withdrawal.paymentMethod.lastFour}`}
                  </p>
                  <p className="text-xs text-gray-500">{new Date(withdrawal.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(withdrawal.status)}`}>
                {withdrawal.status.toLowerCase()}
              </div>
            </div>
          ))}
          {withdrawals.length === 0 && (
            <div className="text-center py-8">
              <div className="bg-gray-100 p-4 rounded-full inline-flex mb-3">
                <DollarSign className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-gray-500">No withdrawal history</p>
              <p className="text-sm text-gray-400 mt-1">Your withdrawal requests will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalSection;