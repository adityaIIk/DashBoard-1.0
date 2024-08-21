import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWidget } from "../store"; // Import addWidget from the slice file

const AddWidgetCategory = () => {
  const [newWidgetName, setNewWidgetName] = useState("");
  const [newWidgetText, setNewWidgetText] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  const handleAddWidget = () => {
    if (selectedCategoryId && newWidgetName && newWidgetText) {
      dispatch(addWidget({ categoryId: selectedCategoryId, widgetName: newWidgetName, widgetText: newWidgetText }));
      setNewWidgetName("");
      setNewWidgetText("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-center font-semibold text-2xl mb-6">Add Widget</h3>
      <div className="flex flex-col space-y-4">
        <div className="relative">
          <select
            onChange={(e) => setSelectedCategoryId(e.target.value)}
            value={selectedCategoryId}
            className="w-full py-3 pl-4 pr-12 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700 appearance-none"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <svg
            className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 text-gray-700 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
          className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700"
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
          className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700"
        />

        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          onClick={handleAddWidget}
        >
          Add Widget
        </button>
      </div>
    </div>
  );
};

export default AddWidgetCategory;
