import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store'; // Import setSearchTerm from the slice file

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.dashboard.searchTerm);

  return (
    <div className="flex justify-center mt-5">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700"
          placeholder="Search Widgets"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.2-5.2M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
