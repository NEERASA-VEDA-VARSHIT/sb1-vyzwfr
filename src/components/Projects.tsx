import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-24 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Project</h2>
        
        <div className="relative aspect-video rounded-lg overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href="https://drive.google.com/file/d/1fye-kQ1SiyZr6riKItGzoSWZsmbZtWVT/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-black ml-1" />
              </div>
              <div className="flex items-center gap-2 text-yellow-400 group-hover:text-yellow-300">
                <span className="font-semibold">Watch Full Project</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-xl font-semibold mb-2">Featured Video Project</h3>
            <p className="text-gray-300">
              A showcase of storytelling, precise editing, and creative transitions.
              Click to watch the full video on Google Drive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}