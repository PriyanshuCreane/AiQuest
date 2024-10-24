import React from 'react';
import { Users, Award, Globe, MessageSquare } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About AILearn</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize AI education and empower the next generation of innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, AILearn emerged from a simple idea: making artificial intelligence education accessible to everyone. 
              We believe that AI technology should be understood and developed by a diverse global community, not just a select few.
            </p>
            <p className="text-gray-600">
              Today, we're proud to have helped thousands of students from over 100 countries master AI development and launch 
              successful careers in the field.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: 'Expert Instructors',
              description: 'Learn from industry professionals with years of experience',
            },
            {
              icon: Award,
              title: 'Quality Content',
              description: 'Carefully crafted courses that follow industry best practices',
            },
            {
              icon: Globe,
              title: 'Global Community',
              description: 'Connect with learners and professionals worldwide',
            },
            {
              icon: MessageSquare,
              title: '24/7 Support',
              description: 'Get help whenever you need it from our support team',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">Start your AI journey today and become part of our growing community.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;