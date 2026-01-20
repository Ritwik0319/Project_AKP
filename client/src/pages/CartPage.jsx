import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { addToCart, removeFromCart } from '../store/slices/cartSlice';

const CartPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const updateCartHandler = (product, qty) => {
        dispatch(addToCart({ ...product, qty }));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping');
    };

    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    const tax = subtotal * 0.18; // 18% GST example
    const shipping = subtotal > 1000 ? 0 : 50;
    const total = subtotal + tax + shipping;

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold font-serif mb-8 flex items-center">
                    <ShoppingBag className="mr-3 text-secondary-600" /> Your Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-2xl p-12 text-center shadow-sm max-w-2xl mx-auto">
                        <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag size={48} className="text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
                        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
                        <Link to="/agro" className="btn btn-secondary inline-flex items-center">
                            <ArrowLeft size={18} className="mr-2" /> Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div key={item._id} className="bg-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6 border border-gray-100 hover:border-secondary-200 transition-colors">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                        <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                        <div className="text-secondary-600 font-bold">₹{item.price} each</div>
                                    </div>

                                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                                        <button
                                            onClick={() => updateCartHandler(item, Math.max(1, item.qty - 1))}
                                            className="p-2 hover:bg-white rounded-md transition-colors text-gray-600"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="w-10 text-center font-bold">{item.qty}</span>
                                        <button
                                            onClick={() => updateCartHandler(item, Math.min(item.countInStock, item.qty + 1))}
                                            className="p-2 hover:bg-white rounded-md transition-colors text-gray-600"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>

                                    <div className="text-right min-w-[100px]">
                                        <div className="font-bold text-xl mb-2">₹{item.price * item.qty}</div>
                                        <button
                                            onClick={() => removeFromCartHandler(item._id)}
                                            className="text-red-500 hover:text-red-700 flex items-center justify-center sm:justify-end w-full sm:w-auto"
                                        >
                                            <Trash2 size={18} className="mr-1" /> <span className="text-sm">Remove</span>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <Link to="/agro" className="flex items-center text-secondary-600 font-bold hover:underline pt-4">
                                <ArrowLeft size={18} className="mr-2" /> Continue Shopping
                            </Link>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 sticky top-32">
                                <h2 className="text-xl font-bold mb-6 pb-4 border-b">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Estimated Tax (18%)</span>
                                        <span>₹{tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? <span className="text-green-600">Free</span> : `₹${shipping.toFixed(2)}`}</span>
                                    </div>
                                </div>

                                <div className="border-t pt-4 mb-8">
                                    <div className="flex justify-between text-xl font-bold">
                                        <span>Total</span>
                                        <span className="text-secondary-600">₹{total.toFixed(2)}</span>
                                    </div>
                                    {shipping > 0 && (
                                        <p className="text-xs text-secondary-500 mt-2 italic">* Add more items worth ₹{Math.max(0, 1000 - subtotal)} for Free Shipping</p>
                                    )}
                                </div>

                                <button
                                    onClick={checkoutHandler}
                                    className="btn btn-secondary w-full py-4 text-lg font-bold shadow-lg shadow-secondary-200"
                                >
                                    Proceed to Checkout
                                </button>

                                <div className="mt-8 flex items-center justify-center space-x-4 grayscale opacity-50">
                                    {/* Payment Icons Placeholder */}
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Accepted Payments</span>
                                    <div className="flex space-x-2">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
