import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import AboutPage from './pages/AboutPage';
import RoadmapsPage from './pages/RoadmapsPage';
import PracticePage from './pages/PracticePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/roadmaps" element={<RoadmapsPage />} />
            <Route path="/practice" element={<PracticePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;