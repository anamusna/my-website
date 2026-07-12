import React from "react";
import TestimonialCard from "./testimonial-card";

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image?: string;
  testimony: string;
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.name}
          testimonial={testimonial}
          className={`animate-fade-in`}
          style={{ animationDelay: `${index * 150}ms` }}
        />
      ))}
    </div>
  );
};

export default TestimonialGrid;
