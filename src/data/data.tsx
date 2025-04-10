import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import testimonialImage from '../images/testimonial.webp';
import petinderLogoImage from '../images/petinder-logo.webp';
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
  title: "Bao2803",
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
        I'm a senior in Computer Science at Purdue University.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I has experience developing software using technologies
        like Spring Boot, React, GCP, AWS, Azure, and Unreal Engine 5 through internships and personal projects spanning
        areas like web applications, game development, and simulations.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      download: 'resume.pdf',
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
  description: `Beside coding, I love to gaming in my freetime. My favorite games are: League of
  Legends, Sekiro, and Black Myth Wukong. Beside gaming, I also love plaing piano and fishing :)`,
  aboutItems: [
    { label: 'Interests', text: 'Coding, Gaming, Piano, Fishing', Icon: SparklesIcon },
    { label: 'Study', text: 'Purdue University', Icon: AcademicCapIcon },
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
      'C/C++',
      'JavaScript/TypeScript',
      'SQL',
      'Golang',
      'C#',
      'HTML/CSS',
      'NodeJS',
      'Matlab',
      'Python',
      'Bash',
    ],
  },
  {
    name: 'Techonologies',
    skills: [
      'Git',
      'Docker',
      'GCP',
      'AWS',
      'Azure',
      'Kafka',
      'RabbitMQ',
      'Redis',
      'Elasticsearch',
      'Debezium',
      'Unity',
      'Unreal Engine',
    ],
  },
  {
    name: 'Frameworks and Library',
    skills: [
      'Spring/Spring Boot',
      'ReactJS',
      'Gin',
      'Ant Design',
      'Material UI',
      'OpenGL',
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Cloud Alloc",
    shortDescription: "Sync smarter: A cloud manager that bridges Drive, Dropbox, and blazing-fast search.",
    longDescription: [
      "Developed a Spring Boot API to manage multiple Google Drive and Dropbox accounts.",
      "Used PostgreSQL as a DB, and Redis as a cache for the cache-aside pattern.",
      "Implemented CDC using Debezium and Kafka to sync data near real-time from PostgreSQL and Drive to ElasticSearch, enabling full-context search over both file metadata and file contents.",
      "Implemented lazy updating using MinIO as a cache for file updates, decreasing API calls to Drive/Dropbox.",
    ],
    url: "https://github.com/Bao2803/cloud_alloc",
  },
  {
    title: "Petinder",
    shortDescription: "Swipe right, but for pets — matchmaking meets microservices.",
    longDescription: [
      "Developed a microservices backend API that is similar to Tinder but for pets, and deployed on Azure.",
      "Used RabbitMQ as a message broker for services communication, decoupling the backend services.",
      "Implemented OAuth2 login with Google/GitHub using Spring Security.",
      "Implemented full context search for pets using PostgreSQL's Full-Text Search.",
    ],
    image: petinderLogoImage,
    url: "https://github.com/namneyugn21/Petinder",
  },
  {
    title: "XinuOS",
    shortDescription: "Redefining OS scheduling: from theory to 40% faster reality.",
    longDescription: [
      "Enhanced XINU's scheduler by implementing a dynamic scheduling algorithm using multilevel feedback queues reducing complexity from O(n) to O(1)",
      "Tracked processes CPU usage and response times, boosting system responsiveness for processes by 20%",
      "Developed a framework to adjust process priorities dynamically, increasing throughput by up to 40% for CPU-bound and I/O-bound processes",
    ],
  },
  {
    title: "Personal Finanace",
    shortDescription: "Track your money, serverlessly. Cloud-native finance dashboard built to scale.",
    longDescription: [
      "Created a responsive dashboard UI to display transactions and statistics using ReactJS and Material UI",
      "Developed a highly scalable serverless backend using Java, AWS Lambda, and AWS RDS for PostgreSQL",
      "Utilized AWS API Gateway for load balancing and exposing the API",
    ],
    url: "https://github.com/Bao2803/ServerlessTransaction",
  },
  {
    title: 'Shell Project',
    shortDescription: "A shell with brains — command parsing, scripting, and Unix vibes in C++.",
    longDescription: [
      "Developed a Unix-like shell interpreter in C++ with command parsing, execution, I/O redirection, piping, and background process handling",
      "Integrated features like environment variable expansion, quote handling, escaping, and built-in commands like printenv and setenv",
      "Implemented control flow constructs such as if statements, while loops, and for loops, enabling scripting capabilities within the shell",
    ],
  },
  {
    title: 'Multiplayer Shooter',
    shortDescription: "AI bots, real-time battles, and zero-lag thrills in a custom Unreal FPS.",
    longDescription: [
      "Created AI bots to track and shoot players using Unreal Engine's AI Behavioral tree and Blackboard, intensifying gameplay challenges",
      "Established real-time multiplayer mode via Unreal Engine online subsystem and Steam, ensuring smooth gaming across locations",
      "Implemented interpolation and extrapolation techniques to reduce network latency by 30% during gameplay, enhancing user experience",
    ],
    url: "https://gitlab.com/Bao2803/simpleshooter",
    video: 'https://www.youtube.com/embed/8stFrYXEMpg?si=zzEQJ1M3Vp15sib0',
  },
  {
    title: 'Photo Gallery',
    shortDescription: "Like Google Photos, but homemade — secure, fast, and built in Go.",
    longDescription: [
      "Led the development of a monolithic web app in Golang, implementing MVC architecture for a feature-rich platform akin to Google Photos",
      "Implemented secure user authentication system from scratch in Golang, utilizing salt and pepper encryption methods and protecting against CSRF attacks with gorilla/csrf",
      "Managed the creation of robust gallery management features, enabling users to effortlessly create, edit, and share galleries",
    ],
    url: 'https://github.com/Bao2803/photo_gallery',
  },
  {
    title: 'Campus Mobility',
    shortDescription: "From traffic data to Arduino lights — real-time campus transport reimagined.",
    longDescription: [
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
          <strong>Relevant Courses: </strong>Object Oriented Programming, Data Structure and Algorithm,
          Computer Network, Operating System, Software Engineering, C Programming, Computer Graphics, System Programming
        </li>
      </ul>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Aug 2024',
    location: 'FPT Software',
    title: 'Java Backend Intern',
    content: (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          Led a team of <strong>9</strong> interns to build a microservices-based LMS using Java, Spring Boot, Docker, and GCP
        </li>
        <li>
          Utilized Kafka to improve task processing and service scalability increasing throughput by <strong>50%</strong>
        </li>
        <li>
          Implemented PostgreSQL to Elasticsearch sync with Debezium and Kafka, enabling full-context search
        </li>
        <li>
          Optimized <strong>40%</strong> performance by using Redis for caching
        </li>
      </ul>
    ),
  },
  {
    date: 'May 2023 - Aug 2023',
    location: 'JRL Lab - Purdue University',
    title: 'Undergraduate Research Fellow',
    content: (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>
          Developed a configurable <a href="https://drive.google.com/file/d/1bH0HHR7qphevl-pTsw5id3fTvsWrrh13/view?usp=sharing"
            style={{ color: 'blue' }}>level III driving simulation</a> using UE 5.1 and C++ for a NSF-granted research
        </li>
        <li>Developed a vehicle queuing algorithm with <strong>100%</strong> accuracy, simulating stop sign flow in the U.S.</li>
        <li>Built a UDP pipeline for event transmission, reducing FPS drop by <strong>40%</strong> and improving performance</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2023 - Apr 2023',
    location: 'OplaCRM',
    title: 'Full Stack Developer Intern',
    content: (
      <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
        <li>Built a fullstack ecommerce for over <strong>20</strong> corporations and <strong>40</strong> partners using Gin and PostgreSQL</li>
        <li>Implemented GraphQL API, enabling smoother frontend integration by allowing flexible data retrieval</li>
        <li>Developed and customized multiple React components based on new layout designs created in Figma</li>
        <li>Optimized deployment with Docker and improved caching using Redis, reducing load times by <strong>30%</strong></li>
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
  imageSrc: testimonialImage,
  headerText: 'Get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'bao.q.phan.work@gmail.com',
      href: 'mailto:bao.q.phan.work@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'github.com/bao2803',
      href: 'https://github.com/bao2803',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin/in/bao2803',
      href: 'https://www.linkedin.com/in/bao2803/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/bao2803/' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/bao2803/' },
];
