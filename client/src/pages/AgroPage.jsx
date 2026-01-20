import { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Filter, Search as SearchIcon } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const AgroPage = () => {
    const [products, setProducts] = useState([
        {
            _id: '1',
            name: 'Organic Cold Pressed Coconut Oil',
            description: 'Pure and natural cold pressed coconut oil from our own farms.',
            price: 499,
            image: 'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?auto=format&fit=crop&q=80&w=500',
            rating: 4.8,
            numReviews: 124,
            category: 'Oils',
            countInStock: 50
        },
        {
            _id: '2',
            name: 'Natural Forest Honey',
            description: 'Wild harvested pure forest honey with rich medicinal properties.',
            price: 350,
            image: 'https://images.unsplash.com/photo-1587049633562-ad3022b47488?auto=format&fit=crop&q=80&w=500',
            rating: 4.9,
            numReviews: 89,
            category: 'Health',
            countInStock: 30
        },
        {
            _id: '3',
            name: 'Premium Basmati Rice',
            description: 'Long grain aromatic basmati rice aged for 2 years.',
            price: 1200,
            image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=500',
            rating: 4.7,
            numReviews: 210,
            category: 'Grains',
            countInStock: 100
        },
        {
            _id: '4',
            name: 'Organic Turmeric Powder',
            description: 'High curcumin content organic turmeric powder.',
            price: 150,
            image: 'https://images.unsplash.com/photo-1615485242220-410714edee7f?auto=format&fit=crop&q=80&w=500',
            rating: 4.9,
            numReviews: 156,
            category: 'Spices',
            countInStock: 200
        }
    ]);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, qty: 1 }));
        // In a real app, you might show a toast here
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            {/* Search & Filter Header */}
            <div className="bg-white border-b sticky top-20 z-40 transition-all duration-300">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold font-serif text-secondary-700">Food & Agro Shop</h1>

                    <div className="flex-grow max-w-xl w-full relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2 border rounded-full focus:ring-2 focus:ring-secondary-500 outline-none"
                        />
                        <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-600 hover:text-secondary-600">
                            <Filter size={20} className="mr-1" />
                            <span>Filter</span>
                        </button>
                        <select className="bg-transparent border rounded-lg px-2 py-1 text-gray-600">
                            <option>Sort by: Popularity</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product._id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-red-500 transition-colors">
                                    <Heart size={20} />
                                </button>
                                {product.countInStock === 0 && (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">Out of Stock</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="text-xs text-secondary-600 font-bold uppercase tracking-wider mb-2">{product.category}</div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-secondary-600 transition-colors">{product.name}</h3>
                                <div className="flex items-center mb-4">
                                    <div className="flex text-yellow-400 mr-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500">({product.numReviews})</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">{product.description}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        disabled={product.countInStock === 0}
                                        className="p-3 bg-secondary-600 text-white rounded-xl hover:bg-secondary-700 transition-colors disabled:bg-gray-300"
                                    >
                                        <ShoppingCart size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgroPage;
