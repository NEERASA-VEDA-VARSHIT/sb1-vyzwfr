import React from 'react';
import { Youtube } from 'lucide-react';

const influences = [
  {
    name: 'Tharun Speaks',
    image: 'https://tharunspeaks.in/Assets/tharunspeaks.jpg',
    channel: 'https://www.youtube.com/@TharunSpeaks'
  },
  {
    name: 'Dan Mace',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-AkrZXROqV6y9_ZESTww28-QjfQ7UdfaKZA&s',
    channel: 'https://www.youtube.com/@DanMace'
  },
  {
    name: 'Ali Abdaal',
    image: 'https://aliabdaal.com/wp-content/themes/Ali-Abdaal-Production/content/ali-abdaal-youtuber-author-podcaster-productivity-expert-feel-good-productivity-book.jpg',
    channel: 'https://www.youtube.com/@aliabdaal'
  }
];

export default function About() {
  return (
    <section className="py-24 px-4" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-gray-300 mb-12">
          A passionate video editor with experience working alongside notable content creators like Swaroop Vitb. 
          Specializing in B-rolls and video pacing that creates unforgettable moments. My expertise spans across 
          research, content writing, personal development, health, and finance content.
        </p>

        <h3 className="text-2xl font-bold mb-8">Creative Influences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {influences.map((influence, index) => (
            <div key={index} className="text-center group">
              <a
                href={influence.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative"
              >
                <img 
                  src={influence.image} 
                  alt={influence.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover group-hover:ring-2 ring-yellow-400 transition-all"
                />
                <Youtube className="w-8 h-8 absolute bottom-2 right-1/2 translate-x-8 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <h4 className="text-lg font-semibold">{influence.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}