import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy login logic
        localStorage.setItem('auth', 'true');
        setIsAuthenticated(true);
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <form onSubmit={handleLogin} className="p-8 rounded shadow-md bg-blue-100">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
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
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
