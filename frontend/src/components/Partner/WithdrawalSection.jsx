import React, { useState } from 'react';
import { usePartnerStore } from '../../store/usePartnerStore';
import { DollarSign, Calendar, CreditCard, AlertCircle } from 'lucide-react';

const WithdrawalSection = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethodId, setPaymentMethodId] = useState('');
  const { withdrawals, requestWithdrawal, isLoading, paymentMethods } = usePartnerStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && paymentMethodId) {
      requestWithdrawal({ amount: parseFloat(amount), paymentMethodId });
      setAmount('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Withdrawal Form */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Request Withdrawal</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter amount"
              min="100"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <select
              value={paymentMethodId}
              onChange={(e) => setPaymentMethodId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">Select payment method</option>
              {paymentMethods.map(method => (
                <option key={method.id} value={method.id}>
                  {method.type === 'UPI' ? `UPI: ${method.upiId}` : 
                   `Bank: ${method.bankName} (${method.accountNumber.slice(-4)})`}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Processing...' : 'Request Withdrawal'}
          </button>
        </form>
      </div>

      {/* Withdrawal History */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Withdrawal History</h2>
        <div className="space-y-3">
          {withdrawals.map(withdrawal => (
            <div key={withdrawal.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  withdrawal.status === 'COMPLETED' ? 'bg-green-100' :
                  withdrawal.status === 'PENDING' ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  <DollarSign className={`h-4 w-4 ${
                    withdrawal.status === 'COMPLETED' ? 'text-green-600' :
                    withdrawal.status === 'PENDING' ? 'text-yellow-600' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">₹{withdrawal.amount}</p>
                  <p className="text-sm text-gray-600 capitalize">{withdrawal.status.toLowerCase()}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(withdrawal.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">
                  {withdrawal.paymentMethod.type === 'BANK_ACCOUNT' ? 
                   `Bank •••${withdrawal.paymentMethod.lastFour}` : 
                   `UPI •••${withdrawal.paymentMethod.lastFour}`}
                </p>
              </div>
            </div>
          ))}
          {withdrawals.length === 0 && (
            <p className="text-gray-500 text-center py-4">No withdrawal history</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithdrawalSection;