import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        // Dummy signup logic
        alert("Account created! Please login.");
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form onSubmit={handleSignup} className="p-8 rounded shadow-md bg-blue-100">
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="block mb-3 p-2 w-full rounded border"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="block mb-3 p-2 w-full rounded border"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="block mb-4 p-2 w-full rounded border"
                    required
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
