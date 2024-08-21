import React, { useState } from 'react';
import AddWidgetForm from './AddWidgetForm';
import Widget from './Widget';

const Category = ({ category, searchTerm }) => {
  const [isAddWidgetFormVisible, setIsAddWidgetFormVisible] = useState(false);

  const toggleAddWidgetForm = () => {
    setIsAddWidgetFormVisible(!isAddWidgetFormVisible);
  };

  return (
    <div className="mb-6 p-4 border border-gray-300 rounded-lg shadow-sm bg-white max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{category.name}</h3>
        {/* Button to show the Add Widget form for this specific category */}
        <button
          onClick={toggleAddWidgetForm}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-1 px-3 rounded-full shadow-md"
        >
          + Add Widget
        </button>
      </div>

      {/* Conditionally render the Add Widget form */}
      {isAddWidgetFormVisible && (
        <div className="mb-4">
          <AddWidgetForm 
            onClose={toggleAddWidgetForm} 
            categoryId={category.id}  // Pass the category ID
          />
        </div>
      )}

      {/* Render the widgets in this category */}
      <div className="space-y-4">
        {category.widgets
          .filter(widget => widget.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(widget => (
            <Widget key={widget.id} widget={widget} categoryId={category.id} />
          ))}
      </div>
    </div>
  );
};

export default Category;
