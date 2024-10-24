import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const PopularCourses = () => {
  const courses = [
    {
      title: 'Machine Learning Fundamentals',
      description: 'Learn the basics of ML algorithms and implementation',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=400',
      rating: 4.8,
      students: 1234,
    },
    {
      title: 'Deep Learning with PyTorch',
      description: 'Master neural networks and deep learning concepts',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400',
      rating: 4.9,
      students: 856,
    },
    {
      title: 'Natural Language Processing',
      description: 'Build AI models that understand human language',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400',
      rating: 4.7,
      students: 945,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Courses</h2>
          <button className="flex items-center text-indigo-600 hover:text-indigo-700">
            View all courses
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                className="h-48 w-full object-cover"
                src={course.image}
                alt={course.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-gray-500">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{course.students} students</span>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                    Learn more
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

export default PopularCourses;