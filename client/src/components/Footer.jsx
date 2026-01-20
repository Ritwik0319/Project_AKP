import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold font-serif mb-4 text-primary-400">Sri Kalpavriksha</h3>
                        <p className="text-gray-400 leading-relaxed">
                            A diversified platform offering premium construction services and high-quality food & agro products.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Divisions</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/associates" className="hover:text-primary-400">Construction & Real Estate</Link></li>
                            <li><Link to="/agro" className="hover:text-primary-400">Food & Agro Products</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/about" className="hover:text-primary-400">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary-400">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary-400">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary-400">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Email: info@sri-kalpavriksha.com</li>
                            <li>Phone: +91 12345 67890</li>
                            <li>Address: Bangalore, India</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sri Kalpavriksha Platform. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
