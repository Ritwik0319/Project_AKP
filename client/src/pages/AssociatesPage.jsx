import { Link } from 'react-router-dom';
import { Shield, Hammer, MapPin, Phone, Mail, Send } from 'lucide-react';

const AssociatesPage = () => {
    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary-600 font-bold tracking-widest uppercase mb-4 block">Sri Kalpavriksha Associates</span>
                        <h1 className="text-5xl font-bold font-serif mb-6 text-gray-900 leading-tight">
                            Building Your Future with Integrity & Quality
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            We provide end-to-end construction and real estate services, from architectural design to final handover. Our commitment is to excellence and customer satisfaction.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#projects" className="btn btn-primary">View Projects</a>
                            <a href="#contact" className="btn border border-primary-600 text-primary-600 hover:bg-primary-50">Hire Us</a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 right-12 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <img
                            src="https://images.unsplash.com/photo-1503387762-5923591c554-auto=format&fit=crop&q=80&w=1000"
                            alt="Construction Detail"
                            className="rounded-2xl shadow-2xl relative z-10 w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold font-serif mb-4">Our Expertise</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Providing a wide range of services to cater to all your real estate needs.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Architectural Design',
                            desc: 'Modern and functional designs tailored to your lifestyle and needs.',
                            icon: <Hammer className="text-primary-600" size={32} />
                        },
                        {
                            title: 'Residential Construction',
                            desc: 'Quality house construction with focus on durability and aesthetics.',
                            icon: <Shield className="text-primary-600" size={32} />
                        },
                        {
                            title: 'Commercial Projects',
                            desc: 'Scalable solutions for offices, retail stores, and commercial complexes.',
                            icon: <Hammer className="text-primary-600" size={32} />
                        }
                    ].map((service, i) => (
                        <div key={i} className="card hover:shadow-lg transition-all group">
                            <div className="bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section id="contact" className="py-20 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-900/20 skew-x-12 translate-x-20"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-4xl font-bold font-serif mb-6">Need a Lead Consultant?</h2>
                            <p className="text-gray-400 mb-12 text-lg">Send us your enquiry and we will get back to you within 24 hours.</p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="bg-primary-600/20 p-3 rounded-lg mr-4 text-primary-400">
                                        <MapPin size={24} />
                                    </div>
                                    <span>123 Construction Lane, Bangalore, India</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-primary-600/20 p-3 rounded-lg mr-4 text-primary-400">
                                        <Phone size={24} />
                                    </div>
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-primary-600/20 p-3 rounded-lg mr-4 text-primary-400">
                                        <Mail size={24} />
                                    </div>
                                    <span>projects@sri-kalpavriksha.com</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-gray-900">
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Full Name</label>
                                        <input type="text" className="input-field" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                                        <input type="text" className="input-field" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email Address</label>
                                    <input type="email" className="input-field" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Project Type</label>
                                    <select className="input-field">
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Renovation</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Message</label>
                                    <textarea className="input-field h-32 resize-none" placeholder="Details about your project..."></textarea>
                                </div>
                                <button className="btn btn-primary w-full py-4 flex items-center justify-center font-bold">
                                    Send Enquiry <Send size={18} className="ml-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AssociatesPage;
