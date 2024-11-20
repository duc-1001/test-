import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../service/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../redux/slice/authSlice';

const Login = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    // Redirect to home page if already logged in
    if (user?.id) {
        navigate('/');
    }

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if email and password are provided
        if (!email || !password) {
            setErrorMessage('Email and password are required!');
            return;
        }

        // Attempt login
        console.log('Logging in with:', { email, password });
        const response = await loginUser(email, password);
        
        if (response.status === 0) {
            setErrorMessage('');
            dispatch(loginAction(response.user));  // Dispatch login action
        } else {
            setErrorMessage(response.message);  // Display error message
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

                {/* Display error message if any */}
                {errorMessage && (
                    <div className="text-red-500 text-center mb-4">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password input */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Log In
                    </button>
                </form>

                {/* Link to Register page */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-600">Sign Up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
