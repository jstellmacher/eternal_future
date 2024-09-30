"use client"; // Mark this component as a client component

import React, { useEffect, useState } from 'react';
import workoutPlansData from '../../public/data/workoutplans.json'; // Import JSON data

const WorkoutPlans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(workoutPlansData); // Set plans from JSON data
  }, []);

  return (
    <section className="plans py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-100">Workout Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => ( // Map through plans
            <div key={index} className="plan-card bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{plan.name}</h3>
              <p className="text-gray-600">{plan.description}</p>
              <button className="bg-primary text-white py-2 px-4 rounded mt-4">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlans;
