import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 p-2 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Home Button */}
        <div>
          <a href="/" className="text-white text-lg font-semibold hover:text-indigo-600">
            Home
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
