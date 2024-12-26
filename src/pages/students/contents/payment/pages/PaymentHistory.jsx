import React, { useState, useEffect } from "react";
import { FaPlus, FaDollarSign, FaHome, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const mockTransactions = [
  {
    id: 1,
    type: "Card Funding",
    status: "Pending",
    amount: 44675.67,
    date: "2024-06-02 14:35",
  },
  {
    id: 2,
    type: "Card Funding",
    status: "Failed",
    amount: 44675.67,
    date: "2024-06-02 14:35",
  },
  {
    id: 3,
    type: "Card Funding",
    status: "Successful",
    amount: 44675.67,
    date: "2024-06-02 14:35",
  },
];

const PaymentHistory = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    dateRange: "",
  });

  // Fetch transactions (simulating API call)
  useEffect(() => {
    setTransactions(mockTransactions);
  }, []);

  // Filter Transactions
  const applyFilters = () => {
    let filtered = [...mockTransactions];
    if (searchQuery) {
      filtered = filtered.filter(
        (transaction) =>
          transaction.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          transaction.status.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filters.type) {
      filtered = filtered.filter(
        (transaction) => transaction.type === filters.type
      );
    }
    if (filters.status) {
      filtered = filtered.filter(
        (transaction) => transaction.status === filters.status
      );
    }
    setTransactions(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payment History</h1>
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          Active
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <FaPlus />
            Add Funds
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <FaDollarSign />
            Make a Payment
          </button>
        </div>
        <Link
          to="/students/dashboard/payment"
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          <FaHome />
          Back to Home
        </Link>
      </div>

      {/* Filter and Sort Options */}
      <div className="p-4 bg-white shadow rounded mb-6">
        <h2 className="text-lg font-bold mb-4">Filter and Sort Options</h2>
        <form
          className="grid grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            applyFilters();
          }}
        >
          <input
            type="text"
            placeholder="Search by ID, type, etc."
            className="p-2 border border-gray-300 rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded"
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          >
            <option value="">Filter by Type</option>
            <option value="Card Funding">Card Funding</option>
            <option value="Withdrawal">Withdrawal</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded"
            value={filters.status}
            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          >
            <option value="">Filter by Status</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
            <option value="Successful">Successful</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded"
            value={filters.dateRange}
            onChange={(e) =>
              setFilters({ ...filters, dateRange: e.target.value })
            }
          >
            <option value="">Sort by Date</option>
            <option value="Last 7 Days">Last 7 Days</option>
            <option value="Last Month">Last Month</option>
            <option value="Last Year">Last Year</option>
          </select>
          <button
            type="submit"
            className="col-span-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Apply Filters
          </button>
        </form>
      </div>

      {/* Transaction Details */}
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold mb-4">Transaction Details</h2>
        {transactions.length > 0 ? (
          <ul className="space-y-4">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="text-gray-800 font-semibold">
                    {transaction.type} Transaction
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaClock />
                    {transaction.date}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">
                    ${transaction.amount.toFixed(2)}
                  </p>
                  <p
                    className={`${
                      transaction.status === "Pending"
                        ? "text-yellow-500"
                        : transaction.status === "Failed"
                        ? "text-red-600"
                        : "text-green-600"
                    } font-semibold`}
                  >
                    {transaction.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
