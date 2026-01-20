import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.auth);

    const cartItemsCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-primary-600 font-serif">
                    Sri Kalpavriksha
                </Link>

                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    <Link to="/associates" className="hover:text-primary-500 transition-colors">Associates</Link>
                    <Link to="/agro" className="hover:text-primary-500 transition-colors">Food & Agro</Link>
                    <Link to="/about" className="hover:text-primary-500 transition-colors">About</Link>
                    <Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center space-x-6">
                    <Link to="/search" className="text-gray-600 hover:text-primary-500">
                        <Search size={20} />
                    </Link>
                    <Link to="/cart" className="text-gray-600 hover:text-primary-500 relative">
                        <ShoppingCart size={20} />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItemsCount}
                            </span>
                        )}
                    </Link>
                    {userInfo ? (
                        <Link to="/profile" className="text-gray-600 hover:text-primary-500 flex items-center">
                            <User size={20} className="mr-1" />
                            <span className="hidden sm:inline">{userInfo.name}</span>
                        </Link>
                    ) : (
                        <Link to="/login" className="text-gray-600 hover:text-primary-500">
                            <User size={20} />
                        </Link>
                    )}
                    <button className="md:hidden text-gray-600">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
