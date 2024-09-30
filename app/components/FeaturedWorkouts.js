"use client"
import React, { useEffect, useState } from 'react';

const FeaturedWorkouts = () => {
  const [workouts, setWorkouts] = useState([]); // Initialize state for workouts

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/data/workouts.json'); // Updated path
      const data = await response.json();
      setWorkouts(data.workouts); // Set workouts from JSON data
    };

    fetchWorkouts();
  }, []); // Empty dependency array to run once on mount

  return (
    <section className="featured py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Workouts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <div key={index} className="workout-card bg-white p-6 rounded shadow">
              <img src={workout.image} alt={workout.name} className="w-full h-32 object-cover mb-4 rounded"/>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{workout.name}</h3>
              <p className="text-gray-600">{workout.description}</p>
              <button className="bg-primary text-white py-2 px-4 rounded mt-4">Start Workout</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Example usage
// <FeaturedWorkouts />

export default FeaturedWorkouts;
