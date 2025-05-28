
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Globe, Layers, ExternalLink } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { ProjectType } from '@/types/project';
import ProjectDetailsDialog from './ProjectDetailsDialog';

interface ProjectCardProps {
  project: ProjectType;
  isAnimated: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isAnimated }) => {
  return (
    <div 
      className={`transform transition-all duration-700 ${
        isAnimated 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-16 opacity-0'
      }`}
    >
      <Card className="overflow-hidden h-full bg-gradient-to-br from-blue-900/20 to-blue-900/5 border border-blue-900/40 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20 flex flex-col">
        <div className="relative h-48 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <CardContent className="p-6 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-semibold text-white">
              {project.title.length > 20 ? `${project.title.substring(0, 20)}...` : project.title}
            </h3>
            <div className="flex space-x-2">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Github size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Globe size={18} />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-200 mb-2 flex items-center">
              <Layers size={16} className="mr-2 text-blue-500" /> Key Features
            </h4>
            <ul className="text-xs text-gray-300 space-y-1 pl-6 list-disc">
              {project.features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="line-clamp-1">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-blue-900/30">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <Badge key={idx} variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30 text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-4">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </DialogTrigger>
            <ProjectDetailsDialog project={project} />
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
