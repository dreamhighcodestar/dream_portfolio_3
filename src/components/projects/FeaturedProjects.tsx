
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import FeaturedProject from './FeaturedProject';
import { ProjectType } from '@/types/project';

interface FeaturedProjectsProps {
  projects: ProjectType[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="container mx-auto mt-28">
      <h3 className="text-2xl font-bold mb-8 text-white"><span className="text-blue-500">@</span> Featured Projects</h3>

      <div className="relative">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            containScroll: "trimSnaps"
          }}
          className="w-full "
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project.id} project={project} />
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 bg-blue-900/50 border-blue-500/30 hover:bg-blue-800/70" />
          <CarouselNext className="right-1 bg-blue-900/50 border-blue-500/30 hover:bg-blue-800/70" />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProjects;
