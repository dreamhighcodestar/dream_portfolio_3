
import React from 'react';
import { Github } from 'lucide-react';

const ViewMoreButton: React.FC = () => {
  return (
    <div className="mt-12 flex justify-center">
      <a 
        href="" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-blue-600/80 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
      >
        <Github size={18} />
        <span>View More on GitHub</span>
      </a>
    </div>
  );
};

export default ViewMoreButton;
