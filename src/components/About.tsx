
import React from 'react';
import AnimatedImage from './AnimatedImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 ">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          <span className="text-blue-500">#</span> About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <AnimatedImage 
                src="/portfolio-uploads/photo/image_4.png" 
                alt="Ivan at work" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-500/20 rounded-lg -z-0"></div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a full-stack developer specializing in AI-powered and CMS-driven web applications. With extensive experience in both frontend and backend technologies, I craft efficient and scalable digital solutions that drive business success.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I've led projects that combined clean architecture with smart automation, always focusing on delivering high-quality code that meets both user needs and business objectives.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              I'm passionate about integrating AI into CMS workflows to boost efficiency, improve UX, and deliver real business value. My approach blends technical expertise with a keen eye for user experience and business requirements.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-white mb-4">Key Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Nikopol, Ukraine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvnrQPwrwrZlMxMrFHkwBGgcnwSkkfsZnkwbKzbmglVRjfWTxvbQNMVBZMQsBXqLrZtPDq" target="_blank" className="text-gray-300 hover:text-white">ivanfrilancan@gmail.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <a href="tel:+380668488255" className="text-gray-300 hover:text-white">+380 66 848 82 55</a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <a href="https://dreamhighportfolio.netlify.app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">dreamhighportfolio.netlify.app</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
