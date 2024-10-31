import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-12">
          Ready to bring your vision to life? Let's create something amazing together.
        </p>
        
        <a
          href="mailto:n.vedvarshit@gmail.com"
          className="inline-flex items-center gap-2 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>n.vedvarshit@gmail.com</span>
          <Send className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}