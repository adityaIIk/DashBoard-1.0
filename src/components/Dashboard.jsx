import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import Category from './Category';
import AddWidgetCategory from './AddWidgetCategory';

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);
  const searchTerm = useSelector(state => state.dashboard.searchTerm.toLowerCase());
  const [isAddWidgetCategoryVisible, setIsAddWidgetCategoryVisible] = useState(false);

  const toggleAddWidgetCategory = () => {
    setIsAddWidgetCategoryVisible(!isAddWidgetCategoryVisible);
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-3xl text-slate-900 mb-2">CNAPP Dashboard</h2>

      {/* Search Bar and + Add Widget Button in the same line */}
      <div className="flex justify-center items-center space-x-4 mb-6">
        <SearchBar />
        <button
          onClick={toggleAddWidgetCategory}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold pr-4 py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mt-4"
        >
          + Add Widget
        </button>
      </div>

      {/* Conditionally Render AddWidgetCategory */}
      {isAddWidgetCategoryVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <AddWidgetCategory />
            <button
              onClick={toggleAddWidgetCategory}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Render Categories and Widgets */}
      <div>
        {categories.map(category => (
          <Category 
            key={category.id} 
            category={category} 
            searchTerm={searchTerm} 
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
