import React from 'react';
import { Video, Palette, Wand2, PenTool } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Expert in long-form content editing with a focus on storytelling and pacing'
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Professional color correction and grading using DaVinci Resolve'
  },
  {
    icon: Wand2,
    title: 'Visual Effects',
    description: 'Creative effects and transitions using Adobe After Effects'
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    description: 'Research-driven content across personal development, health, and finance'
  }
];

export default function Services() {
  return (
    <section className="py-24 px-4 bg-zinc-900" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-black rounded-lg hover:bg-zinc-800 transition-colors"
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}