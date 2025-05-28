
import React from 'react';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProjectsFilterProps {
  onFilterChange: (value: string) => void;
}

const ProjectsFilter: React.FC<ProjectsFilterProps> = ({ onFilterChange }) => {
  return (
    <TabsList className="bg-blue-900/20 border border-blue-900/40 mb-8">
      <TabsTrigger value="All">All Projects</TabsTrigger>
      <TabsTrigger value="CMS & E-commerce">CMS & E-commerce</TabsTrigger>
      <TabsTrigger value="AI Integration">AI Integration</TabsTrigger>
      <TabsTrigger value="Front-End">Front-End</TabsTrigger>
      <TabsTrigger value="Full-Stack">Full-Stack</TabsTrigger>
    </TabsList>
  );
};

export default ProjectsFilter;
