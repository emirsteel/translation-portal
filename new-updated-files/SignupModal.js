import React from 'react';

const SignupModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Darkened and Lightened Background with Reduced Blur */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-25"
        onClick={onClose}
      ></div>
      <div
        className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-40"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md mx-auto z-50">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <p className="text-gray-600 mb-4">Sign in or sign up to continue</p>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition">
            <span className="mr-2">G</span> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition">
            <span className="mr-2"></span> Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition">
            <span className="mr-2">🔑</span> Single Sign-on (SAML SSO)
          </button>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Your email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4E89]"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#1D4E89] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#163D68] transition"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
