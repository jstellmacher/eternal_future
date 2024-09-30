import React from 'react';
import { FaDumbbell, FaRunning, FaUser } from 'react-icons/fa';
import { TbYoga } from 'react-icons/tb';
import { GiOuroboros } from 'react-icons/gi';
import WorkoutSuggestion from '../components/WorkoutSuggestion';
import HeroSection from '../components/HeroSection'; // New component
import CategorySection from '../components/CategorySection'; // New component
import FeaturedWorkouts from '../components/FeaturedWorkouts'; // New component
import WorkoutPlans from '../components/WorkoutPlans'; // New component
import Testimonials from '../components/Testimonials'; // New component

const HomePage = () => {
  const isAuthenticated = false; // Simulate user authentication status

  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedWorkouts />
      <WorkoutPlans />
      <Testimonials />
      {isAuthenticated && <WorkoutSuggestion />} 
    </div>
  );
};

export default HomePage;
