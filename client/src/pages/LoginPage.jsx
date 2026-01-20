import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        // Handle auth logic
    };

    return (
        <div className="bg-gray-50 min-h-screen py-20 flex items-center justify-center px-4">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row">
                {/* Left Side - Visual */}
                <div className="md:w-1/2 bg-primary-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-serif mb-6">Welcome Back to Sri Kalpavriksha</h2>
                        <p className="text-primary-100 text-lg">Access your account to manage orders, wishlists, and project enquiries.</p>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <div className="flex -space-x-4 mb-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary-600 bg-gray-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                </div>
                            ))}
                            <div className="w-12 h-12 rounded-full border-2 border-primary-600 bg-primary-500 flex items-center justify-center text-xs font-bold">
                                +10k
                            </div>
                        </div>
                        <p className="text-sm text-primary-200">Joined by thousands of happy customers across India.</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-1/2 p-12">
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h3>
                        <p className="text-gray-500">Enter your credentials to continue</p>
                    </div>

                    <form onSubmit={submitHandler} className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input-field pl-12"
                                    placeholder="name@example.com"
                                    required
                                />
                                <Mail className="absolute left-4 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-bold text-gray-700">Password</label>
                                <Link to="/forgot-password" size="sm" className="text-primary-600 hover:underline text-sm font-medium">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input-field pl-12"
                                    placeholder="••••••••"
                                    required
                                />
                                <Lock className="absolute left-4 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 text-primary-600 rounded" />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember me for 30 days</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-full py-4 flex items-center justify-center font-bold text-lg">
                            Sign In <LogIn size={20} className="ml-2" />
                        </button>
                    </form>

                    <div className="mt-10 pt-10 border-t text-center">
                        <p className="text-gray-500">Don't have an account?</p>
                        <Link to="/register" className="text-primary-600 font-bold hover:underline inline-flex items-center mt-2 group">
                            Create a free account <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
