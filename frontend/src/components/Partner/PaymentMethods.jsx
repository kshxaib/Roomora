import React, { useState } from 'react';
import { usePartnerStore } from '../../store/usePartnerStore';
import { CreditCard, Trash2, Landmark, Star, Plus, Banknote, QrCode } from 'lucide-react';

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
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Payment Methods</h2>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Method
          </button>
        </div>

        {showAddForm && (
          <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-gray-50 rounded-xl mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Add New Payment Method</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'UPI' })}
                  className={`flex items-center justify-center p-4 border rounded-lg text-sm font-medium transition-colors ${
                    formData.type === 'UPI'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <QrCode className="h-5 w-5 mr-2" />
                  UPI
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'BANK_ACCOUNT' })}
                  className={`flex items-center justify-center p-4 border rounded-lg text-sm font-medium transition-colors ${
                    formData.type === 'BANK_ACCOUNT'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Banknote className="h-5 w-5 mr-2" />
                  Bank Account
                </button>
              </div>
            </div>

            {formData.type === 'UPI' ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                <input
                  type="text"
                  value={formData.upiId}
                  onChange={(e) => setFormData({ ...formData, upiId: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="yourname@upi"
                  required
                />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Account Number"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
                    <input
                      type="text"
                      value={formData.ifscCode}
                      onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Account Holder Name"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex space-x-3 pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Adding...' : 'Add Method'}
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2.5 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Payment Methods List */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-800">Your Payment Methods</h3>
          {paymentMethods.map(method => (
            <div key={method.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center space-x-4">
                {method.type === 'UPI' ? (
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <QrCode className="h-5 w-5 text-blue-600" />
                  </div>
                ) : (
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Banknote className="h-5 w-5 text-green-600" />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-800">
                    {method.type === 'UPI' ? 'UPI ID' : method.bankName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {method.type === 'UPI' ? method.upiId : `•••• ${method.accountNumber.slice(-4)}`}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                {method.isDefault ? (
                  <div className="flex items-center text-yellow-600 bg-yellow-50 px-3 py-1.5 rounded-full text-sm">
                    <Star className="h-4 w-4 fill-current mr-1" />
                    Default
                  </div>
                ) : (
                  <button
                    onClick={() => setDefaultPaymentMethod(method.id)}
                    className="text-gray-500 hover:text-gray-700 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Set as default
                  </button>
                )}
                
                {!method.isDefault && (
                  <button
                    onClick={() => deletePaymentMethod(method.id)}
                    className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
          
          {paymentMethods.length === 0 && (
            <div className="text-center py-8">
              <div className="bg-gray-100 p-4 rounded-full inline-flex mb-3">
                <CreditCard className="h-6 w-6 text-gray-400" />
              </div>
              <p className="text-gray-500">No payment methods added</p>
              <p className="text-sm text-gray-400 mt-1">Add a payment method to receive payments</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;