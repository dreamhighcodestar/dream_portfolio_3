
import React, { useState } from 'react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
import { Github, Globe, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectType } from '@/types/project';

interface ProjectDetailsDialogProps {
  project: ProjectType;
}

const ProjectDetailsDialog: React.FC<ProjectDetailsDialogProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Create an array of images for the slider
  const images = [
    project.image,
    ...(project.additionalImages || [])
  ].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <DialogContent className="bg-gradient-to-br from-blue-900/90 to-black/95 border-blue-900/40 text-white max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
        <DialogDescription className="text-gray-300">
          {project.category.replace(' ', ' ')}
        </DialogDescription>
      </DialogHeader>

      <div className="relative h-[370px] w-full aspect-video bg-black/50 overflow-hidden rounded-lg">
        <img
          src={images[currentImageIndex]}
          alt={`${project.title} screenshot ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8"
            onClick={prevImage}
          >
            <ArrowLeft size={16} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="bg-black/30 hover:bg-black/50 text-white rounded-full h-8 w-8"
            onClick={nextImage}
          >
            <ArrowRight size={16} />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded text-xs text-white">
          {currentImageIndex + 1}/{images.length}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Description</h3>
        <span className="text-gray-300">
          {project.description}
        </span>
        <div className="flex">
          <div className="w-[50%]">
            <h3 className="text-lg font-semibold mb-1">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-1 gap-x-4 gap-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
                  <span className="text-blue-400">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[50%]">
            <h3 className="text-lg font-semibold mb-1">My Role</h3>
            <span className="text-gray-300">
              {project.myrole}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="bg-blue-500/10 text-blue-300 border-blue-500/30">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-blue-900/40">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github size={18} />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Globe size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </DialogContent>
  );
};

export default ProjectDetailsDialog;
