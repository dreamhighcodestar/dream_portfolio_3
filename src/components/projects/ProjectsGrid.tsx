
import React, { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectType } from '@/types/project';

interface ProjectsGridProps {
  projects: ProjectType[];
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const [animatedProjects, setAnimatedProjects] = useState<ProjectType[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setAnimatedProjects(prev => {
              if (!prev.find(p => p.id === projects[index].id)) {
                return [...prev, projects[index]];
              }
              return prev;
            });
          }
        }
      });
    }, options);
    
    projectRefs.current = projectRefs.current.slice(0, projects.length);
    
    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [projects]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          ref={el => projectRefs.current[index] = el}
        >
          <ProjectCard 
            project={project} 
            isAnimated={!!animatedProjects.find(p => p.id === project.id)} 
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
