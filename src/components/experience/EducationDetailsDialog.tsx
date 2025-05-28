
import React from 'react';
import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import AnimatedImage from '../AnimatedImage';
import { EducationItem } from '@/types/experience';

interface EducationDetailsDialogProps {
  education: EducationItem;
}

const EducationDetailsDialog: React.FC<EducationDetailsDialogProps> = ({ education }) => {
  // Use a different image for the details dialog than the institution logo
  const detailsImage = education.details?.detailsImage || education.image;
  
  return (
    <DialogContent className="max-w-3xl bg-gradient-to-br from-blue-900/90 to-black/95 border-blue-900/40 text-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold flex items-center gap-3">
          {education.degree}
          <span className="text-blue-400">@ {education.institution}</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <div className="aspect-video overflow-hidden rounded-lg mb-6 bg-white/5 flex items-center justify-center">
            <AnimatedImage
              src={detailsImage}
              alt={education.institution}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <p className="text-gray-300">{education.description}</p>
            
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Period</p>
                <p className="font-medium text-white">{education.period}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">GPA</p>
                <p className="font-medium text-white">{education.gpa}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Key Courses</h4>
            <ul className="grid grid-cols-2 gap-2">
              {education.details?.courses?.map((course, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                  <span className="text-gray-300 text-sm">{course}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Achievements</h4>
            <ul className="space-y-2">
              {education.details?.achievements?.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-400 flex-shrink-0 mt-1">•</span>
                  <span className="text-gray-300 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default EducationDetailsDialog;
