import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const PaymentMethodAlert = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg max-w-sm">
      <MdCheckCircle className="text-blue-500 text-4xl" />
      <h2 className="mt-4 text-lg font-semibold text-gray-800">
        Payment Method Created
      </h2>
      <p className="mt-2 text-sm text-gray-600 text-center">
        Your payment method has been successfully created. You can now add funds
        to your wallet.
      </p>
      <Link
        to="/students/dashboard/payment/add-fund"
        className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600"
      >
        Add Funds
      </Link>
    </div>
  );
};

export default PaymentMethodAlert;
