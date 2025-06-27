
import React, { Component } from "react";
import {Link} from "react-router-dom";
// CSS-based icons to avoid external dependencies
const IconUser = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  </svg>
);

const IconMapPin = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const IconHeart = () => (
  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

const IconTruck = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    <path d="M3 4a1 1 0 011-1h1a1 1 0 011 1v7a1 1 0 001 1h1.5a2.5 2.5 0 005 0H16a1 1 0 001-1V8a1 1 0 00-1-1h-2.5A2.5 2.5 0 0011 4.5V4a1 1 0 00-1-1H4a1 1 0 00-1 1v9h1.5a2.5 2.5 0 005 0H12a1 1 0 001-1V4z" />
  </svg>
);

const IconClock = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
  </svg>
);

const IconAward = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Mock User components for demonstration
const User = ({ name }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border">
    <div className="flex items-center space-x-3">
      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
        <IconUser />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">Our Customers</p>
      </div>
    </div>
  </div>
);

const UserClass = ({ name, Location }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
        <IconUser />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <IconMapPin />
          <span className="text-sm ml-2">{Location}</span>
        </div>
        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
          Foodiverse
        </span>
      </div>
    </div>
  </div>
);

// Mock UserContext for demonstration
const UserContext = React.createContext({
  loggedInUser: "Foodiverse"
});

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  
  componentDidMount() {
    console.log("Parent component Did Mount");
  }
  
  render() {
    console.log("Parent Render");
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
                About Our Platform
              </h1>
              <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                Delivering happiness, one meal at a time. We're revolutionizing the way you experience food delivery.
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white opacity-10 rounded-full"></div>
        </div>

        {/* User Context Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <UserContext.Consumer>
              {({loggedInUser}) => (
                <div className="inline-block bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconHeart />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome, {loggedInUser}!</h2>
                  <p className="text-gray-600">Thank you for being part of our food delivery family</p>
                </div>
              )}
            </UserContext.Consumer>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-16 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="font-bold">Foodiverse</span> is a dynamic culinary destination where global flavors unite on a single plate. Every dish is thoughtfully crafted, blending traditional roots with modern creativity. More than just a meal, it offers a refined journey through taste and culture — where every bite tells a compelling story.

              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-orange-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconTruck />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">10M+</h3>
                <p className="text-gray-600">Orders Delivered</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconClock />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">25 Min</h3>
                <p className="text-gray-600">Average Delivery</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-2xl">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconAward />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4.8★</h3>
                <p className="text-gray-600">Customer Rating</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A passionate food lovers coming together to craft unforgettable dining experiences — where every detail is inspired by flavor, culture, and creativity

              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Function Component Demo */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">C</span>
                  </div>
                  Customers
                </h3>
                <User name={"Anup Kumar"} />
              </div>

              {/* Class Component Demo */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-sm font-bold">F</span>
                  </div>
                  Foodiverse
                </h3>
                <UserClass name={"Team Lead"} Location={"Delhi Office"} />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers and experience the future of food delivery today.
            </p>
            <Link to="/">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transform hover:scale-95 transition-all duration-200 shadow-lg cursor-pointer">
              Start Ordering Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;