import React, { useState } from 'react';
import { FaHome, FaGlobe, FaCog, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignupModal from './SignupModal'; // Import the SignupModal component

const Sidebar = () => {
  const [isSignupOpen, setSignupOpen] = useState(false);

  const toggleSignupModal = () => {
    setSignupOpen(!isSignupOpen);
  };

  return (
    <div className="fixed inset-y-0 flex flex-col bg-[#f3f3ee] text-[#3d3d3d] shadow-lg p-4 lg:w-64 w-20 transition-width duration-300">
      {/* Logo Section */}
      <div className="flex items-center justify-center mb-8">
        <img src="/path-to-your-logo.png" alt="Logo" className="h-10" />
      </div>
      
      {/* Main Navigation */}
      <nav className="flex flex-col space-y-2 flex-grow">
        <Link to="/" className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start p-2 text-[#3d3d3d] rounded-lg hover:bg-[#e8e8e3] transition">
          <FaHome className="w-6 h-6" />
          <span className="ml-4 text-md font-semibold hidden lg:block">Home</span>
        </Link>
        <Link to="/translate" className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start p-2 text-[#3d3d3d] rounded-lg hover:bg-[#e8e8e3] transition">
          <FaGlobe className="w-6 h-6" />
          <span className="ml-4 text-md font-semibold hidden lg:block">Translate</span>
        </Link>
        <Link to="/settings" className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start p-2 text-[#3d3d3d] rounded-lg hover:bg-[#e8e8e3] transition">
          <FaCog className="w-6 h-6" />
          <span className="ml-4 text-md font-semibold hidden lg:block">Settings</span>
        </Link>
        <Link to="/logout" className="flex lg:flex-row flex-col items-center lg:items-start justify-center lg:justify-start p-2 text-[#3d3d3d] rounded-lg hover:bg-[#e8e8e3] transition">
          <FaSignOutAlt className="w-6 h-6" />
          <span className="ml-4 text-md font-semibold hidden lg:block">Logout</span>
        </Link>
      </nav>

      {/* Sign Up Section */}
      <div className="mt-8 lg:mt-8">
        <button 
          className="w-full bg-[#1D4E89] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#163D68] transition hidden lg:block"
          onClick={toggleSignupModal}
        >
          Sign Up
        </button>
        <div 
          className="lg:hidden flex items-center justify-center bg-[#1D4E89] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#163D68] transition fixed bottom-4 w-[80%] mx-auto left-2 right-2 z-50"
          onClick={toggleSignupModal}
        >
          <FaUserPlus className="mr-2 w-5 h-5" />
          <span>Sign Up</span>
        </div>
      </div>

      {/* Try Pro Section */}
      <div className="mt-8 text-center lg:text-left">
        <Link to="/pro" className="text-[#1D4E89] font-semibold hover:underline">
          Try Pro
        </Link>
        <p className="text-sm text-[#3d3d3d] mt-2">
          Upgrade for image upload, smarter AI, and more Pro Search.
        </p>
      </div>

      {/* Render Signup Modal */}
      {isSignupOpen && <SignupModal onClose={toggleSignupModal} />}
    </div>
  );
};

export default Sidebar;
