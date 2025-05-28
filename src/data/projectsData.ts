import { ProjectType } from '@/types/project';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "EastCorp",
    description: "This website serves as the online presence for EastCorp, a global trading company dedicated to connecting markets and fostering international trade. The site showcases the company's services, product offerings, and contact information.",
    image: "/portfolio-uploads/projects/01_1.png",
    myrole: "I have been responsible for designing the user interface and integrating any necessary CMS functionalities.",
    additionalImages: [
      "/portfolio-uploads/projects/01_2.png",
      "/portfolio-uploads/projects/01_3.png"
    ],
    category: "CMS & E-commerce",
    technologies: ["WordPress", "React", "REST API", "SEO", "JavaScript"],
    liveUrl: "https://eastcorp.co/",
    features: ["Service Listings", "Contact Information", "Informational Content"]
  },
  {
    id: 2,
    title: "Dura Pools",
    description: "This site serves as the digital presence for Dura Pools, a Sydney-based company specializing in swimming pool construction, renovation, and maintenance services. The site provides comprehensive information about their offerings and showcases their expertise in the industry.",
    image: "/portfolio-uploads/projects/02_1.png",
    myrole: "Responsibilities would include creating a visually appealing design to showcase their portfolio, ensuring mobile responsiveness, and integrating contact forms for client inquiries.",
    additionalImages: [
      "/portfolio-uploads/projects/02_2.png",
      "/portfolio-uploads/projects/02_3.png"
    ],
    category: "CMS & E-commerce",
    technologies: ["WordPress", "React", "AJAX", "GraphQL", "Tailwind CSS"],
    liveUrl: "https://www.durapools.com.au/",
    features: ["Service Overview", "Project Gallery", "Client Testimonials", "Contact Forms"]
  },
  {
    id: 3,
    title: "Word of Mouth Agency – Terms & Conditions",
    description: "Word of Mouth Agency is a Perth-based marketing agency specializing in social media management, content creation, and digital strategy. The Terms & Conditions page outlines the legal agreements related to their services.",
    image: "/portfolio-uploads/projects/03_1.png",
    myrole: "I have been tasked with creating a professional and user-friendly website that effectively communicates the agency's services, as well as ensuring that legal pages like Terms & Conditions are accessible and well-formatted.",
    additionalImages: [
      "/portfolio-uploads/projects/03_2.png",
      "/portfolio-uploads/projects/03_3.png"
    ],
    category: "CMS & E-commerce",
    technologies: ["PHP", "WordPress", "Elementor", "AJAX", "CSS"],
    liveUrl: "https://www.wordofmouthagency.com.au/",
    features: ["Service Descriptions", "Portfolio tracking", "Performance analysis"]
  }  
];
