
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
      <h3 className="text-2xl font-bold mb-8 text-white">Featured Projects</h3>
      
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
