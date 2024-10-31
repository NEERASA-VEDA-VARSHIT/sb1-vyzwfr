import React, { useEffect, useRef } from 'react';
import { Film } from 'lucide-react';

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Handle autoplay restrictions gracefully
        });
      }
    };

    window.addEventListener('click', playAudio, { once: true });
    return () => window.removeEventListener('click', playAudio);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <audio
        ref={audioRef}
        src="https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
        loop
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      {/* <iframe
        src="https://drive.google.com/file/d/1fye-kQ1SiyZr6riKItGzoSWZsmbZtWVT/preview"
        className="absolute inset-0 w-full h-full object-cover"
        allow="autoplay"
      /> */}
      
      <div className="relative z-20 text-center px-4">
        <div className="flex items-center justify-center mb-6">
          <Film className="w-12 h-12 text-yellow-400" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">N Veda Varshit</h1>
        <p className="text-xl md:text-2xl text-yellow-400 mb-8">
          Crafting Stories with Precision, Color, and Impact
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}