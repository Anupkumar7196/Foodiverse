
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            
            // Reset success message after 3 seconds
            setTimeout(() => setSubmitted(false), 3000);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-xl md:text-2xl opacity-90">
                        We're here to help! Reach out to us anytime.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Have a question, suggestion, or just want to say hello? We'd love to hear from you! 
                                Our team is always ready to assist you with your queries.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Phone Support</h3>
                                        <p className="text-gray-600">+91 7543816917</p>
                                        <p className="text-sm text-gray-500">Available 24/7</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email Support</h3>
                                        <p className="text-gray-600">support@foodiverse.com</p>
                                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Visit Us</h3>
                                        <p className="text-gray-600">foodiverse Pvt Ltd</p>
                                        <p className="text-sm text-gray-500">New Delhi, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                        
                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                    pattern="[0-9]{10}"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell us how we can help you..."
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-semibold text-gray-800 mb-3">How can I track my order?</h3>
                            <p className="text-gray-600">You can track your order in real-time through our app or website. You'll receive SMS updates as well.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-semibold text-gray-800 mb-3">What is your refund policy?</h3>
                            <p className="text-gray-600">We offer full refunds for cancelled orders and partial refunds for issues with food quality or delivery.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-semibold text-gray-800 mb-3">How do I become a delivery partner?</h3>
                            <p className="text-gray-600">Visit our careers page or contact us directly to learn about delivery partner opportunities in your area.</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-semibold text-gray-800 mb-3">Do you have customer support?</h3>
                            <p className="text-gray-600">Yes! Our customer support team is available 24/7 to help you with any issues or questions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;