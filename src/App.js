import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Todo from './Components/ToDo/Todo';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import CalendarApi from './Components/CalendarApi';


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
