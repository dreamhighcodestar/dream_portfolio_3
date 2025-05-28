
import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { education } from '../data/experienceData';
import EducationCard from './experience/EducationCard';
import EducationDetailsDialog from './experience/EducationDetailsDialog';

const Education: React.FC = () => {
  const [showEducationDetails, setShowEducationDetails] = useState(false);

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-black/0 to-blue-900/10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          <span className="text-blue-500">#</span> Education
        </h2>
        <EducationCard 
          education={education}
          onShowDetails={() => setShowEducationDetails(true)}
        />
      </div>

      {/* Education Details Dialog */}
      <Dialog open={showEducationDetails} onOpenChange={setShowEducationDetails}>
        <EducationDetailsDialog education={education} />
      </Dialog>
    </section>
  );
};

export default Education;
