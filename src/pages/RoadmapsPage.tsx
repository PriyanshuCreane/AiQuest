import React from 'react';
import { ArrowRight, BookOpen, Code, Brain, Award, Timer } from 'lucide-react';

const RoadmapsPage = () => {
  const roadmaps = [
    {
      title: 'Machine Learning Engineer',
      description: 'Master the fundamentals of ML and become a professional ML engineer',
      duration: '6 months',
      level: 'Beginner to Advanced',
      modules: [
        'Python Programming',
        'Mathematics for ML',
        'Data Preprocessing',
        'ML Algorithms',
        'Deep Learning',
        'MLOps',
      ],
    },
    {
      title: 'AI Research Scientist',
      description: 'Dive deep into AI research and contribute to cutting-edge developments',
      duration: '8 months',
      level: 'Advanced',
      modules: [
        'Advanced Mathematics',
        'Research Methodologies',
        'Deep Learning Architecture',
        'Paper Writing',
        'Experimental Design',
        'State-of-the-art Models',
      ],
    },
    {
      title: 'Computer Vision Specialist',
      description: 'Specialize in image processing and computer vision applications',
      duration: '5 months',
      level: 'Intermediate',
      modules: [
        'Image Processing',
        'OpenCV',
        'CNN Architectures',
        'Object Detection',
        'Image Segmentation',
        'Video Analysis',
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Development Roadmaps</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your learning path and follow our structured roadmaps to achieve your career goals in AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: BookOpen, title: 'Structured Learning', description: 'Step-by-step guided paths' },
            { icon: Brain, title: 'Industry Aligned', description: 'Based on real-world requirements' },
            { icon: Award, title: 'Skill Certification', description: 'Earn certificates as you progress' },
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {roadmaps.map((roadmap) => (
            <div key={roadmap.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{roadmap.title}</h2>
                <p className="text-gray-600 mb-6">{roadmap.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Timer className="h-4 w-4 mr-1" />
                  <span>{roadmap.duration}</span>
                  <span className="mx-2">•</span>
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{roadmap.level}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {roadmap.modules.map((module) => (
                    <div key={module} className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-indigo-600" />
                      <span className="text-gray-700">{module}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                  View Full Roadmap
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapsPage;