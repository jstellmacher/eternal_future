import React from 'react';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { TbYoga } from 'react-icons/tb';

const CategorySection = () => (
  <section className="categories py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-100">Choose Your Workout</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="category-card bg-gray-800 text-white p-6 rounded flex flex-col items-center">
          <FaDumbbell className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Strength</h3>
          <p>Build muscle and strength with our focused routines.</p>
        </div>
        <div className="category-card bg-gray-800 text-white p-6 rounded flex flex-col items-center">
          <FaRunning className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cardio</h3>
          <p>Improve your cardiovascular health with our cardio routines.</p>
        </div>
        <div className="category-card bg-gray-800 text-white p-6 rounded flex flex-col items-center">
          <TbYoga className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-semibold mb-2">Yoga</h3>
          <p>Enhance flexibility and relaxation with our yoga sessions.</p>
        </div>
      </div>
    </div>
  </section>
);

export default CategorySection;
