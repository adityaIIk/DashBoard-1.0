import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../store'; // Import addWidget from the slice file

const AddWidgetForm = ({ onClose, categoryId }) => {
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    if (newWidgetName && newWidgetText) {
      dispatch(addWidget({ categoryId, widgetName: newWidgetName, widgetText: newWidgetText }));
      setNewWidgetName('');
      setNewWidgetText('');
      onClose(); // Close the form after adding
    }
  };

  return (
    <div className="relative p-4 border border-gray-300 rounded-lg shadow-sm bg-white max-w-md mx-auto">
      <h3 className="text-lg font-semibold mb-4">Add Widget</h3>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Widget Name"
            value={newWidgetName}
            onChange={(e) => setNewWidgetName(e.target.value)}
            className="flex-grow py-2 px-4 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700"
          />
          <input
            type="text"
            placeholder="Widget Text"
            value={newWidgetText}
            onChange={(e) => setNewWidgetText(e.target.value)}
            className="flex-grow py-2 px-4 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 shadow-sm text-gray-700"
          />
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleAddWidget}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Add Widget
          </button>
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetForm;
