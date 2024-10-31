import React from 'react';
import { Award, Youtube } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-24 px-4 bg-zinc-900" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Past Experience</h2>
        
        <div className="relative border-l-2 border-yellow-400 pl-8 ml-4">
          <div className="mb-12">
            <div className="absolute w-4 h-4 bg-yellow-400 rounded-full -left-[9px]" />
            <div className="flex items-center mb-4">
              <Award className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-bold">Video Editor</h3>
            </div>
            <div className="mb-2">
              <a 
                href="https://www.youtube.com/@SwaroopVITB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300"
              >
                <span>Swaroop Vitb</span>
                <Youtube className="w-4 h-4 ml-1" />
              </a>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-400">Content Creator</span>
            </div>
            <p className="text-gray-300">
              Collaborated on creating engaging content, implementing advanced editing techniques,
              and maintaining consistent quality across video productions. Specialized in crafting
              compelling narratives through expert video editing and strategic content pacing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}