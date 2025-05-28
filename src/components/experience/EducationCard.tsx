
import React from 'react';
import AnimatedImage from '../AnimatedImage';
import { EducationItem } from '@/types/experience';

interface EducationCardProps {
  education: EducationItem;
  onShowDetails: () => void;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, onShowDetails }) => {
  return (
    <div 
      className="bg-blue-900/20 border border-blue-900/30 rounded-lg p-6 md:p-8 cursor-pointer hover:bg-blue-900/30 transition-colors"
      onClick={onShowDetails}
    >
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500/20 bg-white/5">
            <AnimatedImage 
              src={education.institutionLogo} 
              alt={education.institution}
              className="w-full h-full object-contain" 
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {education.degree}
            </h3>
            <p className="text-gray-300">{education.institution} ({education.period})</p>
            <p className="text-gray-400 mt-1">GPA: {education.gpa}</p>
            
            <div className="mt-4">
              <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-auto">
          <div className="aspect-video w-full md:w-60 lg:w-70 overflow-hidden rounded-lg border border-blue-900/30">
            <AnimatedImage 
              src={education.image} 
              alt={`${education.institution} campus`}
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
