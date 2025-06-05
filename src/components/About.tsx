
import React from 'react';
import AnimatedImage from './AnimatedImage';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 ">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          <span className="text-blue-500">#</span> About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-24 items-center">

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <AnimatedImage
                src="/portfolio-uploads/photo/face-swap_6.png"
                alt="Ivan at work"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-500/20 rounded-lg -z-0"></div>
          </div>


          <div className="grid md:grid-cols-1 gap-8 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                <span className="block">Hi, I'm</span>
                <span className="text-blue-500 block mt-2">Ivan Tereshchenko</span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-300">
                Full-Stack Developer specializing in AI-powered & CMS-driven web applications
              </h2>

              <p className="text-gray-400 max-w-lg">
                I'm a full-stack developer specializing in AI-powered and CMS-driven web applications. With extensive experience in both frontend and backend technologies, I craft efficient and scalable digital solutions that drive business success.
              </p>

              <div className="flex flex-wrap gap-12 pt-4 justify-center ">
                
                <Button
                  variant="secondary"
                  className="w-60 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-medium h-10"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View my work
                </Button>

                <Button
                  variant="secondary"
                  className="w-60 flex items-center bg-blue-950/50 hover:bg-blue-900/60 font-medium h-10"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download size={18} />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
