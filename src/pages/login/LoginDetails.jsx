import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Loader from '../../utils/Loader';
import axios from 'axios';

// Validation Schema using Yup
const validationSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email format')
		.transform((value) => value.toLowerCase())
		.required('Email is required'),
	password: Yup.string().required('Password is required'),
});

const LoginDetails = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	// Function to handle login submission

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			const response = await axios.post(
				'https://back-end-slwn.onrender.com/api/v1/user/login',
				values
			);

			if (response.status == 200) {
				toast.success('Login successful! Redirecting to homepage...', {
					position: 'top-right',
				});
				console.log(values);
				setTimeout(() => {
					navigate('/');
				}, 1500);
			} else {
				handleError(response.data.message || 'Invalid email or password.');
			}
		} catch (error) {
			handleError(
				error.response?.data?.message ||
					error.message ||
					'Oops! Something went wrong. Please try again.'
			);
		} finally {
			setSubmitting(false);
		}
	};

	// Function to handle error toast
	const handleError = (message) => {
		toast.error(
			<div>
				<h3 className='font-bold text-sm'>Login Failed</h3>
				<p className='text-sm'>{message}</p>
			</div>,
			{
				position: 'top-right',
				ariaLive: 'polite',
			}
		);
	};

	return (
		<div className='form pt-12 md:pt-0 px-6 flex flex-col md:justify-center items-center h-screen'>
			<h1 className='text-2xl font-bold text-gray-900'>Welcome back!</h1>
			<p className='text-sm text-gray-600 mt-1'>
				Don't have an account?{' '}
				<Link to='/register' className='text-blue-500'>
					Sign Up
				</Link>
			</p>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<Form className='mt-5 w-full'>
						<div className='flex flex-col gap-1'>
							<label
								htmlFor='email'
								className='text-sm font-medium text-gray-900'>
								Email
							</label>
							<Field
								type='text'
								name='email'
								placeholder='Enter your email'
								className='border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-500 outline-none'
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='text-red-500 text-xs'
							/>
						</div>
						<div className='flex flex-col gap-1 my-4'>
							<label
								htmlFor='password'
								className='text-sm font-medium text-gray-900'>
								Password
							</label>
							<div className='flex items-center border border-gray-300 rounded-md p-2 bg-white'>
								<Field
									type={showPassword ? 'text' : 'password'}
									name='password'
									placeholder='Enter your password'
									className='w-full focus:outline-none'
								/>
								<button
									type='button'
									className='text-gray-500'
									onClick={() => setShowPassword((prev) => !prev)}
									aria-label={showPassword ? 'Hide Password' : 'Show Password'}>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</button>
							</div>
							<ErrorMessage
								name='password'
								component='div'
								className='text-red-500 text-xs'
							/>
						</div>
						<button
							type='submit'
							className={`w-full py-3 rounded-lg text-white ${
								isSubmitting
									? 'bg-gray-400 cursor-not-allowed'
									: 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
							}`}
							disabled={isSubmitting}>
							{isSubmitting ? <Loader /> : 'Login'}
						</button>
						<p className='text-sm text-gray-600 text-center mt-2'>
							Forgot Password?{' '}
							<Link to='/forget-password' className='text-blue-500'>
								Click here
							</Link>
						</p>
					</Form>
				)}
			</Formik>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar={false}
				closeOnClick
				pauseOnHover
				draggable
				theme='light'
			/>
		</div>
	);
};

export default LoginDetails;
