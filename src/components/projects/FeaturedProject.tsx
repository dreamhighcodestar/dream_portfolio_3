
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
    <CarouselItem className="pl-2 md:pl-4 basis-[100%] md:basis-[90%]">      <div className="p-2 group">
      <Card className="overflow-hidden bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-900/40 h-96 md:h-[28rem] transition-all duration-500 ease-out group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 group-hover:border-blue-500/60 transform-gpu">
        <div className="relative h-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end transition-all duration-500 group-hover:from-black/80 group-hover:via-black/40">
            <div className="p-4 md:p-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
              <h3 className="text-xl md:text-3xl font-medium text-white mb-3 transition-all duration-300 group-hover:text-blue-300">
                {project.title.length > 20 ? `${project.title.substring(0, 20)}...` : project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 line-clamp-3 mb-4 transition-colors duration-300 group-hover:text-gray-200">{project.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{project.technologies.slice(0, 3).join(", ")}</p>
                <div className="flex items-center space-x-10">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                      <Github size={16} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110">
                      <Globe size={24} />
                    </a>
                  )}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-blue-400 hover:text-blue-300 transition-all duration-300 text-sm flex items-center hover:scale-105 group-hover:bg-blue-500/20 px-2 py-1 rounded">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
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
