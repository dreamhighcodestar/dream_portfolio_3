
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
  const featuredProjects = projects.slice(0, 6);

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
        <span className="text-blue-500">#</span> Featured Projects
      </h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default FeaturedProjects;
