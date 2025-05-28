
import { ExperienceItem, EducationItem } from '@/types/experience';

export const experiences: ExperienceItem[] = [
  {
    title: "Senior Full-Stack Developer",
    company: "Intellias",
    companyLogo: "/portfolio-uploads/company/intellias.png",
    period: "Jan 2021 to Mar 2025",
    description: [
      "Led scalable finance and e-commerce app development using React.js, Laravel, MySQL.",
      "Integrated headless CMS platforms like Strapi and Contentful.",
      "Focused on architecture, performance, and cross-team delivery of high-quality solutions."
    ],
    image: "/portfolio-uploads/company/intellias_image.png",
    details: {
      detailsImage: "/portfolio-uploads/photo/intellias_dev_1.png",
      projects: [
        "Enterprise finance management system with real-time analytics and reporting",
        "E-commerce platform with personalized product recommendations",
        "Content management system with AI-assisted content creation"
      ],
      achievements: [
        "Reduced page load time by 40% through optimization",
        "Implemented CI/CD pipelines that reduced deployment time by 65%",
        "Led team of 8 developers across 3 time zones"
      ],
      technologies: [
        "React.js", "Laravel", "MySQL", "Docker", "AWS", "Redis", "Elasticsearch", "Strapi", "Contentful"
      ]
    }
  },
  {
    title: "Full-Stack Developer – CMS & E-commerce",
    company: "Program-Ace",
    companyLogo: "/portfolio-uploads/company/program-ace.png",
    period: "Mar 2018 to Dec 2020",
    description: [
      "Built CMS & e-commerce platforms with WordPress, React, Laravel.",
      "Developed plugins and themes, integrated Stripe/PayPal.",
      "Prioritized responsiveness, SEO, and performance."
    ],
    image: "/portfolio-uploads/company/program-ace_image.png",
    details: {
      detailsImage: "/portfolio-uploads/photo/miratech_dev_1.png",
      projects: [
        "Custom WordPress e-commerce platform for fashion retailer",
        "Headless CMS for multi-channel publishing",
        "Subscription-based content platform with tiered access"
      ],
      achievements: [
        "Increased client's conversion rate by 25% through UX improvements",
        "Created reusable component library reducing development time by 30%",
        "Optimized database queries reducing server load by 50%"
      ],
      technologies: [
        "WordPress", "WooCommerce", "React", "Laravel", "MySQL", "Stripe API", "PayPal API", "Redis"
      ]
    }
  },
  {
    title: "Front-End Developer",
    company: "Miratech",
    companyLogo: "/portfolio-uploads/company/miratech.png",
    period: "Jan 2016 to Feb 2018",
    description: [
      "Created responsive websites using HTML, CSS, JavaScript, WordPress.",
      "Developed reusable React components.",
      "Improved SEO and accessibility for better reach and usability."
    ],
    image: "/portfolio-uploads/company/miratech_image.png",
    details: {
      detailsImage: "/portfolio-uploads/photo/program-ace_dev.png",
      projects: [
        "Corporate websites for financial institutions",
        "Interactive product showcase applications",
        "Analytics dashboards with data visualization"
      ],
      achievements: [
        "Implemented responsive designs reducing bounce rate by 15%",
        "Created component library used across 5+ projects",
        "Improved website accessibility to WCAG 2.1 AA standards"
      ],
      technologies: [
        "HTML5", "CSS3", "JavaScript", "React", "WordPress", "SASS", "jQuery", "Bootstrap"
      ]
    }
  }
];

export const education: EducationItem = {
  degree: "Bachelor's Degree in Software Engineering",
  institution: "Lviv Polytechnic National University",
  institutionLogo: "/portfolio-uploads/university/university_logo.png",
  period: "2012–2016",
  description: "Comprehensive software engineering education with focus on software development methodologies, algorithms, data structures, and practical programming skills.",
  gpa: "3.8 / 4.0",
  image: "/portfolio-uploads/university/university.png",
  details: {
    courses: [
      "Advanced Algorithms and Data Structures",
      "Database Systems",
      "Object-Oriented Programming",
      "Web Development",
      "Software Project Management",
      "System Analysis and Design",
      "Computer Networks",
      "Operating Systems"
    ],
    achievements: [
      "Dean's List for Academic Excellence (2013-2016)",
      "1st Place in University Web Development Competition",
      "Research Assistant in the Computer Science Department",
      "Lead Developer for University Student Portal"
    ]
  }
};
