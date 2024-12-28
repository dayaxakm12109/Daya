import React from 'react';
import { useNavigate } from 'react-router-dom';

const BecomeSeller = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Navigate to the form page for users to fill in their details
    navigate('/seller-form');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center">Become a Seller</h2>
      <p className="text-center mt-4">
        To become a seller, please pay ₹29/month and fill out the form below to list your profile.
      </p>
      <div className="mt-6 text-center">
        <button
          onClick={handleProceed}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default BecomeSeller;
