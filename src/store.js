// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  categories: [
    {
      id: 1,
      name: "CSPM Executive Dashboard",
      widgets: [
        { id: 1, name: "Widget 1", text: "Random text for Widget 1" },
      ]
    },
    {
      id: 2,
      name: "CWPP Dashboard",
      widgets: [{id: 1, name: "Widget 2", text: "Random text for Widget 2"}]
    },
    {
      id: 3,
      name: "Registry Scan",
      widgets: [{id: 1, name: "Widget 3", text: "Random text for Widget 3"}]
    }
  ],
  nextWidgetId: 3,
  searchTerm: ''
};

// Create Slice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widgetName, widgetText } = action.payload;
      const category = state.categories.find(cat => cat.id === parseInt(categoryId));
      if (category) {
        category.widgets.push({
          id: state.nextWidgetId,
          name: widgetName,
          text: widgetText
        });
        state.nextWidgetId += 1;
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

// Export actions
export const { addWidget, removeWidget, setSearchTerm } = dashboardSlice.actions;

// Create Store
const store = configureStore({
  reducer: {
    dashboard: dashboardSlice.reducer
  }
});

export default store;
