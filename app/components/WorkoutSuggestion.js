// app/components/WorkoutSuggestion.js
"use client";

import React, { useState } from 'react';

const WorkoutSuggestion = () => {
  const [suggestion, setSuggestion] = useState('');

  const getWorkoutSuggestion = () => {
    // Placeholder for AI integration
    setSuggestion('Try a 30-minute full-body workout!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">Get Your Workout Suggestion</h2>
      <button
        onClick={getWorkoutSuggestion}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Get Suggestion
      </button>
      {suggestion && (
        <p className="mt-4 text-lg">{suggestion}</p>
      )}
    </div>
  );
};

export default WorkoutSuggestion; // Ensure this is correctly exported
