import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Registration attempt:', { name, email, password });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-20 flex items-center justify-center px-4">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full flex flex-col md:flex-row-reverse">
                {/* Left Side (Visual, now on right) */}
                <div className="md:w-1/2 bg-secondary-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold font-serif mb-6">Join the Sri Kalpavriksha Community</h2>
                        <p className="text-secondary-100 text-lg">Create an account to start shopping and consulting with our experts.</p>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <ul className="space-y-4">
                            {[
                                'Access to exclusive agro products',
                                'Track your construction projects',
                                'Priority customer support',
                                'Early access to seasonal harvests'
                            ].map((benefit, i) => (
                                <li key={i} className="flex items-center">
                                    <div className="bg-white/20 p-1 rounded-full mr-3 text-white">
                                        <ArrowRight size={14} />
                                    </div>
                                    <span className="text-sm font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Side (Form, now on left) */}
                <div className="md:w-1/2 p-12">
                    <div className="mb-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h3>
                        <p className="text-gray-500">Sign up in less than a minute</p>
                    </div>

                    <form onSubmit={submitHandler} className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="input-field pl-12"
                                    placeholder="John Doe"
                                    required
                                />
                                <User className="absolute left-4 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

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
                            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
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

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="input-field pl-12"
                                    placeholder="••••••••"
                                    required
                                />
                                <Lock className="absolute left-4 top-3 text-gray-400" size={20} />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button type="submit" className="btn btn-secondary w-full py-4 flex items-center justify-center font-bold text-lg">
                                Create Account <UserPlus size={20} className="ml-2" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 pt-10 border-t text-center">
                        <p className="text-gray-500">Already have an account?</p>
                        <Link to="/login" className="text-secondary-600 font-bold hover:underline inline-flex items-center mt-2 group">
                            Sign in to your account <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
