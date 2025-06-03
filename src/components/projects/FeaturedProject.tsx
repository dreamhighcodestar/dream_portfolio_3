
import React from 'react';
import { Card } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import { ProjectType } from '@/types/project';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Github, Globe } from 'lucide-react';
import ProjectDetailsDialog from './ProjectDetailsDialog';

interface FeaturedProjectProps {
  project: ProjectType;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
    <CarouselItem key={project.id} className="md:basis-1/1">
      <div className="p-1">
        <Card className="overflow-hidden bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-900/40 h-96">
          <div className="relative h-full overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent flex flex-col justify-end">
              <div className="p-4">
                <h3 className="text-4xl font-medium text-white mb-1">
                  {project.title.length > 20 ? `${project.title.substring(0, 20)}...` : project.title}
                </h3>
                <p className="text-1xl text-gray-300 line-clamp-2 mb-3">{project.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">{project.technologies.slice(0, 3).join(", ")}</p>
                  <div className="flex items-center space-x-10">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <Globe size={24} />
                      </a>
                    )}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-blue-400 hover:text-blue-300 transition-colors text-1xl flex items-center">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </DialogTrigger>
                      <ProjectDetailsDialog project={project} />
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </CarouselItem>
  );
};

export default FeaturedProject;
