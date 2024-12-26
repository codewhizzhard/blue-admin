import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PaymentMethodAlert from "./PaymentMethodAlert";

// Validation schema using Yup
const schema = yup.object().shape({
  cardNumber: yup
    .string()
    .length(16, "Card number must be 16 digits")
    .matches(/^[0-9]+$/, "Card number must contain only numbers")
    .required("Card number is required"),
  expiration: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
      "Expiration must be in MM/YY format"
    )
    .required("Expiration is required"),
  cvv: yup
    .string()
    .length(3, "CVV must be 3 digits")
    .matches(/^[0-9]+$/, "CVV must contain only numbers")
    .required("CVV is required"),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zipCode: yup
    .string()
    .length(5, "Zip code must be 5 digits")
    .matches(/^[0-9]+$/, "Zip code must contain only numbers")
    .required("Zip code is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
});

const PaymentMethod = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full min-h-screen p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Add Payment Method
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl mx-auto space-y-4 bg-white p-6 rounded-md shadow-md"
      >
        {/* Card Number */}
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card number*
          </label>
          <Controller
            name="cardNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Enter your Card No"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
          )}
        </div>

        {/* Expiration */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="expiration"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration (MM/YY)*
            </label>
            <Controller
              name="expiration"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="MM/YY"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.expiration && (
              <p className="text-red-500 text-sm">
                {errors.expiration.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700"
            >
              CVV*
            </label>
            <Controller
              name="cvv"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="123"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm">{errors.cvv.message}</p>
            )}
          </div>
        </div>

        {/* Personal Information */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name*
            </label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter your First Name"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name*
            </label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Enter your Last Name"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Address, City, Zip, State, Country */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address*
            </label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="1234 Main Street"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City*
            </label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="City"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
        </div>

        {/* Zip Code */}
        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip code*
          </label>
          <Controller
            name="zipCode"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="12345"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
          )}
        </div>

        {/* State & Country */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State / Province*
            </label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="State"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country*
            </label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder="Country"
                  className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Done
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <PaymentMethodAlert closeModal={closeModal} />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
