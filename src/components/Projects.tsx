
import React, { useState } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import ProjectsFilter from './projects/ProjectsFilter';
import ProjectsGrid from './projects/ProjectsGrid';
import { projects } from '@/data/projectsData';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Get the count based on the currently selected filter
  const getProjectCount = () => {
    switch (filter) {
      case 'All':
        return 24;
      case 'CMS & E-ecommerce':
        return 10;
      case 'AI Integration':
        return 4;
      case 'Front-End':
        return 6;
      case 'Full-Stack':
        return 4;
      default:
        return filteredProjects.length;
    }
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          <span className="text-blue-500">#</span> Projects
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl">
          Explore my portfolio of web applications, e-commerce sites, and content management systems that showcase my expertise in full-stack development.
        </p>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
          <ProjectsFilter onFilterChange={setFilter} />
        </Tabs>

        <div className="text-gray-300 mb-6">
          Showing {getProjectCount()} {filter === 'All' ? 'projects' : `${filter.replace(' ', ' ')} projects`}
        </div>

        <ProjectsGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
