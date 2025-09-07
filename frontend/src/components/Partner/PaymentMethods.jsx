import React, { useState } from 'react';
import { usePartnerStore } from '../../store/usePartnerStore';
import { CreditCard, Trash2, Landmark, Star, Plus } from 'lucide-react';

const PaymentMethods = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    type: 'UPI',
    upiId: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  });
  const { paymentMethods, addPaymentMethod, setDefaultPaymentMethod, deletePaymentMethod, isLoading } = usePartnerStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPaymentMethod(formData);
    setShowAddForm(false);
    setFormData({
      type: 'UPI',
      upiId: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      accountHolderName: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Add Payment Method */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Payment Methods</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Method
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-gray-50 rounded-lg mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="UPI">UPI</option>
                <option value="BANK_ACCOUNT">Bank Account</option>
              </select>
            </div>

            {formData.type === 'UPI' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                <input
                  type="text"
                  value={formData.upiId}
                  onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="yourname@upi"
                  required
                />
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                  <input
                    type="text"
                    value={formData.bankName}
                    onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Bank Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                  <input
                    type="text"
                    value={formData.accountNumber}
                    onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Account Number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                  <input
                    type="text"
                    value={formData.ifscCode}
                    onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="IFSC Code"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                  <input
                    type="text"
                    value={formData.accountHolderName}
                    onChange={(e) => setFormData({ ...formData, accountHolderName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Account Holder Name"
                    required
                  />
                </div>
              </>
            )}

            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Adding...' : 'Add Method'}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Payment Methods List */}
        <div className="space-y-3">
          {paymentMethods.map(method => (
            <div key={method.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                {method.type === 'UPI' ? (
                  <CreditCard className="h-6 w-6 text-blue-600" />
                ) : (
                  <Landmark className="h-6 w-6 text-green-600" />
                )}
                <div>
                  <p className="font-medium text-gray-800">
                    {method.type === 'UPI' ? 'UPI' : method.bankName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method.type === 'UPI' ? method.upiId : `•••• ${method.accountNumber.slice(-4)}`}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {method.isDefault ? (
                  <div className="flex items-center text-yellow-600">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm ml-1">Default</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setDefaultPaymentMethod(method.id)}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                  >
                    Set as default
                  </button>
                )}
                
                {!method.isDefault && (
                  <button
                    onClick={() => deletePaymentMethod(method.id)}
                    className="text-red-500 hover:text-red-700 ml-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
          
          {paymentMethods.length === 0 && (
            <p className="text-gray-500 text-center py-4">No payment methods added</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;