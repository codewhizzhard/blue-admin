import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeroSection from '../../components/HeroSection';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Email or Matric Number is required'),
	password: Yup.string().required('Password is required'),
});

const Desktop = () => {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			// Simulate login success with async logic
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate async request

			toast.success('Login successful! Redirecting to homepage...', {
				position: 'top-right',
			});

			setTimeout(() => {
				navigate('/'); // Redirect to homepage after 1.5 seconds
			}, 1500);
		} catch (error) {
			toast.error(
				<div>
					<h3 className='font-bold text-sm'>Incorrect Login Credentials</h3>
					<p className='text-sm'>
						Oops! Your login credentials seem incorrect. Please verify your
						Email/Matric Number or Password, then try again.
					</p>
				</div>,
				{
					position: 'top-right',
				}
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className='h-screen px-10 lg:px-[2%] flex items-center justify-center'>
			<div className='flex flex-col lg:flex-row items-center gap-10'>
				<div className='flex-1'>
					<HeroSection />
				</div>
				<div className='flex-1'>
					<h1 className='text-[30px] font-bold text-gray-900'>Welcome back!</h1>
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
						{({ isSubmitting, values, setFieldValue }) => (
							<Form className='mt-5 w-full'>
								<div className='flex flex-col gap-1'>
									<label
										htmlFor='email'
										className='text-sm font-medium text-gray-900'>
										Email or Matric Number
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
											onClick={() => setShowPassword(!showPassword)}
											aria-label='Toggle Password Visibility'>
											{showPassword ? <FaEyeSlash /> : <FaEye />}
										</button>
									</div>
									<ErrorMessage
										name='password'
										component='div'
										className='text-red-500 text-xs'
									/>
								</div>
								<Link
									to={'/home'}
									className={` w-[454px] aw-full px-4 py-3 rounded-lg text-white ${
										isSubmitting
											? 'bg-gray-400 cursor-not-allowed'
											: 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
									}`}
									disabled={isSubmitting}>
									{isSubmitting ? 'Logging in...' : 'Login'}
								</Link>
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
			</div>
		</div>
	);
};

export default Desktop;
