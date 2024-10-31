import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      <a
        href="https://www.linkedin.com/in/vedavarshit"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/80 p-3 rounded-full text-blue-400 hover:text-blue-300 hover:bg-black transition-colors"
        title="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="mailto:n.vedvarshit@gmail.com"
        className="bg-black/80 p-3 rounded-full text-yellow-400 hover:text-yellow-300 hover:bg-black transition-colors"
        title="Email"
      >
        <Mail className="w-6 h-6" />
      </a>
    </div>
  );
}