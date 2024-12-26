import React from "react";
import {
  FaPlus,
  FaDollarSign,
  FaHistory,
  FaExclamationCircle,
  FaCreditCard,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payment Dashboard</h1>
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Active
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <Link
            to="/students/dashboard/payment/add-fund"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <FaPlus />
            Add Funds
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <FaDollarSign />
            Make a Payment
          </button>
        </div>
        <Link
          to="payment-history"
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          <FaHistory />
          Payment History
        </Link>
      </div>

      {/* School Account Verification */}
      <div className="p-4 mb-6 bg-red-50 border border-red-200 rounded">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaExclamationCircle className="text-red-600 text-lg" />
            <div>
              <p className="text-red-600 font-semibold mb-1">
                Verify your School Account
              </p>
              <p className="text-sm text-gray-600">
                All school payments will be linked to your provided school
                account
              </p>
            </div>
          </div>
          <Link
            to="school-payment"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Connect Now
          </Link>
        </div>
      </div>

      {/* Pocket Overview */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Pocket Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-white shadow rounded text-center">
            <FaDollarSign className="text-blue-500 text-3xl mx-auto mb-2" />
            <p className="text-gray-600">Balance</p>
            <p className="text-2xl font-bold">$0</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center">
            <FaDollarSign className="text-green-500 text-3xl mx-auto mb-2" />
            <p className="text-gray-600">Total Payments</p>
            <p className="text-2xl font-bold">$0</p>
          </div>
          <div className="p-4 bg-white shadow rounded text-center">
            <FaHistory className="text-gray-500 text-3xl mx-auto mb-2" />
            <p className="text-gray-600">Recent Transactions</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </div>

      {/* Payment Method Connection */}
      <div className="p-4 bg-red-50 border border-red-200 rounded">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaCreditCard className="text-red-600 text-lg" />
            <div>
              <p className="text-red-600 font-semibold mb-1">
                Payment Method not Connected
              </p>
              <p className="text-sm text-gray-600">
                All school payments will be linked to your provided payment
                method
              </p>
            </div>
          </div>
          <Link
            to="payment-method"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Add Payment Method
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
