import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  // FlagIcon,
  // MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
// import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Example site built with Bao Phan's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Bao Phan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a junior in Computer Science at Purdue University.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I has experience developing software using technologies 
        like Unreal Engine 5, React, AWS, and Azure through internships and personal projects spanning 
        areas like web applications, game development, and simulations.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Interests', text: 'Coding, Gaming, Piano, Fishing', Icon: SparklesIcon},
    {label: 'Study', text: 'Purdue University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: [
        'Java',
        'Golang',
        'C/C++',
        'JavaScript/Typescript',
        'C#',
        'HTML/CSS',
        'NodeJS',
        'Matlab',
        'Python',
        'Bash',
        'Swift',
        'SQL',
    ],
  },
  {
    name: 'Frameworks and Library',
    skills: [
      'Ant Design',
      'Material UI',
      'ReactJS',
      'Jest',
      'supertest',
      'OpenGL',
    ],
  },
  {
    name: 'Techonologies',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Docker',
      'Git',
      'Unity',
      'Unreal Engine',
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Shell Project',
    description: [
      "Developed a Unix-like shell interpreter in C++ with command parsing, execution, I/O redirection, piping, and background process handling",
      "Integrated features like environment variable expansion, quote handling, escaping, and built-in commands like printenv and setenv",
      "Implemented control flow constructs such as if statements, while loops, and for loops, enabling scripting capabilities within the shell",
    ],
    // url: 'https://reactresume.com',
  },
  {
    title: 'Multiplayer Shooter',
    description: [
      "Created AI bots to track and shoot players using Unreal Engine's AI Behavioral tree and Blackboard, intensifying gameplay challenges",
      "Established real-time multiplayer mode via Unreal Engine online subsystem and Steam, ensuring smooth gaming across locations",
      "Implemented interpolation and extrapolation techniques to reduce network latency by 30\% during gameplay, enhancing user experience",
    ],
    url: 'https://youtu.be/8stFrYXEMpg',
  },
  {
    title: 'Photo Gallery',
    description: [
      "Led the development of a monolithic web app in Golang, implementing MVC architecture for a feature-rich platform akin to Google Photos",
      "Implemented secure user authentication system from scratch in Golang, utilizing salt and pepper encryption methods and protecting against CSRF attacks with gorilla/csrf",
      "Managed the creation of robust gallery management features, enabling users to effortlessly create, edit, and share galleries",
    ],
    url: 'https://github.com/Bao2803/photo_gallery',
  },
  {
    title: 'Storage Planner',
    description: [
      "Developed a full-stack application handling over 3000 requests daily for 200 users using AWS Lambda with Java and PostgreSQL on AWS RDS",
      "Implemented highly scalable architecture using AWS SQS and notification service using AWS SNS",
      "Created a single-page application using ReactJS with TypeScript",
    ],
  },
  {
    title: 'NASA Project',
    description: [
      "Built a full stack application using CRUD and REST APIs",
      "Deployed the project to AWS with Docker, resulting in a 50\% reduction in deployment time",
      "Developed and implemented a streamlined CI pipeline on GitHub, resulting in a 50\% reduction in build and deployment time",
    ],
    url: 'https://github.com/Bao2803/Nasa-Project/tree/main',
  },
  {
    title: 'Campus Mobility Enhanced',
    description: [
      "Conducted thorough data analysis on user preferences and usage patterns, leading to the identification of key areas of improvement for the Purdue Campus Mobility system",
      "Built and programmed a simulated traffic light using Arduino and C++, effectively controlling the prototype lever arm in real-time testing",
    ],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected May 2025',
    location: 'Purdue University',
    title: 'BS in Computer Science',
    content: (
      <ul>
        <li>
          <strong>Award & Honors: </strong>Semester Honors, Dean's List
        </li>
        <li>
          <strong>Extracurricular Activity: </strong>Engineering in the World of Data Learning Community, IEEE Computer Society
        </li>
        <li>
          <strong>Relevant Courses: </strong>Object Oriented Programming, C Programming, Data Structure and Algorithm, Software 
          Engineering Tools, Computer Graphics, System Programming
        </li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - August 2023',
    location: 'JRL Lab - Purdue University',
    title: 'Undergraduate Research Fellow',
    content: (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          Developed a configurable 
          <a href="https://drive.google.com/file/d/1bH0HHR7qphevl-pTsw5id3fTvsWrrh13/view?usp=sharing" 
          style={{color: 'blue'}}> level III driving</a> using Unreal Engine and C++ as a testbed for a cutting-edge 
          NSF-granted automated driving researchsimulation
        </li>
        <li>
          Created a low latency data streaming pipeline for analysis by utilizing UDP and Kafka
        </li>
      </ul>
    ),
  },
  {
    date: 'January 2023 - April 2023',
    location: 'OplaCRM',
    title: 'Full Stack Developer Intern',
    content: (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          Developed a full stack e-commerce platform used by more than 20 corporates and 40 partners with Golang and 
          GORM on the PostgreSQL database
        </li>
        <li>
          Reduced software bugs by 20% by implementing comprehensive unit tests using supertest and Jest framework
        </li>
      </ul>
    ),
  },
  {
    date: 'September 2022 - December 2022',
    location: 'Omnilos',
    title: 'Software Developer Intern',
    content: (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          Developed a MERN-stack web application for the real-time stock price and segmentation analysis of customer 
          portfolio
        </li>
        <li>
          Improved application performance and user experience by reducing 30\% application loading time using CDN
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'bao.q.phan.work@gmail.com',
      href: 'mailto:bao.q.phan.work@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'bao2803',
      href: 'https://github.com/bao2803',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/bao2803/'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bao2803/'},
];
