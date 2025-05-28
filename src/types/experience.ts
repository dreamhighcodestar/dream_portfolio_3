
export interface ExperienceItem {
  title: string;
  company: string;
  companyLogo: string;
  period: string;
  description: string[];
  image: string;
  details?: {
    projects?: string[];
    achievements?: string[];
    technologies?: string[];
    detailsImage?: string;
  };
}

export interface EducationItem {
  degree: string;
  institution: string;
  institutionLogo: string;
  period: string;
  description: string;
  gpa: string;
  image: string;
  details?: {
    courses?: string[];
    achievements?: string[];
    detailsImage?: string;
  };
}
