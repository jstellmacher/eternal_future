"use client"
import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const response = await fetch('/data/testimonials.json'); // Update the path as necessary
            const data = await response.json();
            setTestimonials(data);
        };
        fetchTestimonials();
    }, []);

    return (
        <section className="testimonials py-12 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">What Our Users Say</h2>
                <div className="flex flex-col md:flex-row md:justify-around">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial bg-white p-6 rounded shadow md:w-1/3">
                            <p className="text-gray-600">"{testimonial.quote}"</p>
                            <p className="mt-4 font-semibold text-gray-800">- {testimonial.author}</p>
                            <FaUser className="text-2xl text-primary mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
