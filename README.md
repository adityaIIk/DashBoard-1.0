## Dynamic Dashboard Application

## Overview
This project is a React-based dynamic dashboard application built with Vite for fast development and build tooling. It allows users to dynamically add and remove widgets within categories. The state management is handled by Redux, and the application is styled using TailwindCSS.

## Features
- Dynamic Widgets: Users can add and remove widgets within specific categories.
- Widget Search: A search bar allows users to quickly find widgets.
- Category Management: Widgets are organized into categories, and users can manage these categories easily.
- State Management: Redux is used to manage the state of the application, ensuring scalability and maintainability.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- Redux Toolkit: Simplifies Redux usage with tools like createSlice and createAsyncThunk.
- TailwindCSS: A utility-first CSS framework for rapid UI development.
- Vite: A fast development build tool that provides a great developer experience.

## Getting Started
Prerequisites
- Ensure you have Node.js installed on your machine. This project uses npm as the package manager.

## Installation
1. Clone the Repository
   - Clone the project repository to your local machine:

   - git clone https://github.com/adityaIIk/DashBoard-1.0.git
   - cd DashBoard-1.0

2. Install Dependencies
   - npm install

3. Run the Development Server
   - npm run dev
   
## Project Structure
- src/components: Contains all the React components used in the application, such as Dashboard, Widget, Category, etc.
- src/store.js: The Redux store configuration.
- src/index.css: The main CSS file, where TailwindCSS is imported.
- src/main.jsx: The entry point of the React application.

## Usage
- Adding a Widget: Click on the + Add Widget button, fill out the form with the widget's name and text, and select the category where it should be added.
- Removing a Widget: Each widget has a cross icon (X) that can be clicked to remove the widget from its category.
- Searching for a Widget: Use the search bar to find widgets by name across all categories.



