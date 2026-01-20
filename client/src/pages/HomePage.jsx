import { Link } from 'react-router-dom';
import { ArrowRight, Building, Leaf } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
                    <img
                        src="https://images.unsplash.com/photo-1541913066827-400e970701bc?auto=format&fit=crop&q=80&w=2000"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-20 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
                        Sri Kalpavriksha Platform
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        Excellence in Construction and Purity in Agro Products. Building dreams and nourishing lives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/associates" className="btn btn-primary text-lg px-8 py-3 flex items-center justify-center">
                            Our Projects <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link to="/agro" className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3 flex items-center justify-center">
                            Shop Agro <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divisions Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4">Our Business Divisions</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Discover our two main pillars of service and quality.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Associates */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                            alt="Construction"
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                            <div className="flex items-center text-primary-400 mb-2">
                                <Building size={24} className="mr-2" />
                                <span className="font-bold tracking-wider uppercase text-sm">Associates</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Construction & Real Estate</h3>
                            <p className="text-gray-300 mb-6">Expertise in building residential and commercial spaces with integrity and quality.</p>
                            <Link to="/associates" className="text-white font-bold flex items-center hover:text-primary-400">
                                Explore Services <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Agro */}
                    <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=1000"
                            alt="Agro Products"
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                            <div className="flex items-center text-secondary-400 mb-2">
                                <Leaf size={24} className="mr-2" />
                                <span className="font-bold tracking-wider uppercase text-sm">Food & Agro</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Sri Kalpavriksha Food & Agro</h3>
                            <p className="text-gray-300 mb-6">Connecting you with the finest agricultural products straight from our farms.</p>
                            <Link to="/agro" className="text-white font-bold flex items-center hover:text-secondary-400">
                                Shop Products <ArrowRight size={18} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
