
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AnimatedImage from '../AnimatedImage';
import { ExperienceItem } from '@/types/experience';

interface ExperienceDetailsDialogProps {
  experience: ExperienceItem | null;
}

const ExperienceDetailsDialog: React.FC<ExperienceDetailsDialogProps> = ({ experience }) => {
  if (!experience) return null;
  
  // Use a different image for the details dialog than the company logo
  const detailsImage = experience.details?.detailsImage || experience.image || experience.companyLogo;
  
  return (
    <DialogContent className="max-w-3xl bg-gradient-to-br from-blue-900/90 to-black/95 border-blue-900/40 text-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-500/10 flex-shrink-0">
            <img
              src={experience.companyLogo}
              alt={experience.company || ''}
              className="w-full h-full object-cover"
            />
          </div>
          {experience.title}
          <span className="text-blue-400">@ {experience.company}</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <div className="aspect-video overflow-hidden rounded-lg mb-6 bg-white/5 flex items-center justify-center">
            <AnimatedImage
              src={experience.details?.detailsImage || ''}
              alt={experience.company || ''}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Key Projects</h4>
              <ul className="space-y-1">
                {experience.details?.projects?.map((project, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                    <span className="text-gray-300 text-sm">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
            <ul className="space-y-1">
              {experience.details?.achievements?.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {experience.details?.technologies?.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-1 text-xs rounded-full bg-blue-900/40 text-blue-300 border border-blue-900/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-gray-400 text-sm">
              <span className="font-semibold text-gray-300">Period:</span> {experience.period}
            </p>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default ExperienceDetailsDialog;
