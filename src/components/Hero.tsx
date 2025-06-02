
import React from 'react';
import AnimatedImage from './AnimatedImage';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-500 block mt-2">Ivan Tereshchenko</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-300">
              Full-Stack Developer specializing in AI-powered & CMS-driven web applications
            </h2>
            
            <p className="text-gray-400 max-w-lg">
              I build scalable solutions with React, Laravel, Node.js, and WordPress, 
              working with tools like Strapi, Contentful, Shopify, and WooCommerce.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium h-10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in touch
              </Button>
              <Button 
                variant="outline" 
                className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium h-10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View my work
              </Button>
              <Button 
                variant="secondary" 
                className="flex items-center gap-2 bg-blue-950/50 hover:bg-blue-900/60 font-medium h-10"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/20">
                <AnimatedImage 
                  src="/portfolio-uploads/photo/face-swap_2.png" 
                  alt="Ivan Tereshchenko"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
