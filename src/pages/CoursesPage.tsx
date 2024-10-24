import React from 'react';
import { Search, Filter, Clock, BookOpen, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Machine Learning Fundamentals',
    description: 'Learn the basics of ML algorithms and implementation',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 1234,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: 'Deep Learning with PyTorch',
    description: 'Master neural networks and deep learning concepts',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 856,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: 'Natural Language Processing',
    description: 'Build AI models that understand human language',
    duration: '12 weeks',
    level: 'Advanced',
    rating: 4.7,
    students: 945,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 4,
    title: 'Computer Vision Fundamentals',
    description: 'Learn image processing and object detection',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 723,
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=400',
  },
];

const CoursesPage = () => {
  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">All Courses</h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                className="h-48 w-full object-cover"
                src={course.image}
                alt={course.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-500">{course.description}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{course.level}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{course.students} students</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;