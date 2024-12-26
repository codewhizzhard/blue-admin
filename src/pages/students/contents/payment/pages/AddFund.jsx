import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddFund = () => {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isReview, setIsReview] = useState(false);

  const handleAddFunds = () => {
    setIsReview(true);
  };

  const handleConfirmAddFunds = () => {
    alert("Funds added successfully!");
    setIsReview(false);
    setAmount("");
    setPaymentMethod("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        {!isReview ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Add Funds to Wallet</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="amount">
                Amount to Add
              </label>
              <input
                type="number"
                id="amount"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Enter amount (e.g., $50)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 mb-2"
                htmlFor="paymentMethod"
              >
                Saved Payment Method
              </label>
              <input
                type="text"
                id="paymentMethod"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="e.g., (card no, first name, last name)"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <div className="flex  space-x-2">
                <Link
                  to="/students/dashboard/payment"
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  onClick={() => {
                    setAmount("");
                    setPaymentMethod("");
                  }}
                >
                  Cancel
                </Link>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                  onClick={handleAddFunds}
                >
                  Add Funds <AiOutlinePlus className="ml-2" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">Review</h2>
            <div className="mb-4">
              <p className="text-gray-700">
                <strong>Subtotal:</strong> ${amount}
              </p>
              <p className="text-gray-700">
                <strong>Estimated Tax:</strong> ${(amount * 0.015).toFixed(2)}
              </p>
              <p className="text-gray-700 font-bold">
                <strong>Total:</strong> ${(amount * 1.015).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={() => setIsReview(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                onClick={handleConfirmAddFunds}
              >
                Confirm Add Funds
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AddFund;
