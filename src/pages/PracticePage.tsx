import React from 'react';
import { Code2, Terminal, Zap, Trophy } from 'lucide-react';

const PracticePage = () => {
  const challenges = [
    {
      title: 'Image Classification Challenge',
      difficulty: 'Intermediate',
      points: 100,
      timeLimit: '2 hours',
      description: 'Build an image classifier using CNN to categorize different types of animals.',
      participants: 234,
      category: 'Computer Vision',
    },
    {
      title: 'Sentiment Analysis',
      difficulty: 'Beginner',
      points: 50,
      timeLimit: '1 hour',
      description: 'Create a model to analyze sentiment in customer reviews.',
      participants: 456,
      category: 'NLP',
    },
    {
      title: 'Reinforcement Learning Maze',
      difficulty: 'Advanced',
      points: 150,
      timeLimit: '3 hours',
      description: 'Implement a RL agent to navigate through a complex maze environment.',
      participants: 123,
      category: 'Reinforcement Learning',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Practice Arena</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Put your skills to the test with real-world AI challenges and competitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Code2,
              title: 'Coding Challenges',
              value: '100+',
              description: 'Practice problems',
            },
            {
              icon: Terminal,
              title: 'Interactive Console',
              value: 'Real-time',
              description: 'Code execution',
            },
            {
              icon: Zap,
              title: 'Daily Challenges',
              value: '24/7',
              description: 'New problems daily',
            },
            {
              icon: Trophy,
              title: 'Leaderboard',
              value: 'Top 100',
              description: 'Global ranking',
            },
          ].map((stat) => (
            <div key={stat.title} className="bg-white p-6 rounded-lg shadow-md text-center">
              <stat.icon className="h-8 w-8 text-indigo-600 mx-auto mb-4" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge) => (
              <div key={challenge.title} className="border border-gray-200 rounded-lg p-6 hover:border-indigo-500 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${challenge.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      challenge.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="mr-4">{challenge.points} points</span>
                  <span>{challenge.timeLimit}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{challenge.participants} participants</span>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Start Challenge
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Practice?</h2>
          <p className="text-lg mb-6">Join our community and start solving AI challenges today.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Start Practicing
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;