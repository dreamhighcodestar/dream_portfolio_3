
import React from 'react';
import AnimatedImage from '../AnimatedImage';
import { ExperienceItem as ExperienceItemType } from '@/types/experience';

interface ExperienceItemProps {
  experience: ExperienceItemType;
  isActive: boolean;
  onShowDetails: (experience: ExperienceItemType) => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  isActive,
  onShowDetails
}) => {
  return (
    <div
      className={`space-y-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'hidden opacity-0'
        }`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {experience.title}
            </h3>
            <p className="text-gray-400">{experience.period}</p>
          </div>
        </div>

        <div className="w-25 h-24 rounded-lg overflow-hidden bg-blue-500/10 flex-shrink-0">
          <AnimatedImage
            src={experience.image}
            alt={`${experience.company}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <ul className="space-y-2">
        {experience.description.map((point, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <span className="text-blue-500 flex-shrink-0 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-300">{point}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4">
        <button
          onClick={() => onShowDetails(experience)}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>View Details</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

    </div>

  );
};

export default ExperienceItem;
