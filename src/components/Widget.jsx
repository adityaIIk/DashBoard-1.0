import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from '../store'; // Import removeWidget from the slice file

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  return (
    <div className="relative p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <button
        onClick={() => dispatch(removeWidget({ categoryId, widgetId: widget.id }))}
        className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      >
        X
      </button>
      <h4 className="text-lg font-semibold">{widget.name}</h4>
      <p className="text-gray-700">{widget.text}</p>
    </div>
  );
};

export default Widget;
