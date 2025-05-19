import morp1 from '../assets/images/mophosys_card_format.png'
import gdp1 from '../assets/images/gdp_home.png'
import gallery1 from '../assets/images/gallery_home.png'

export const skills = [
    {
        category: 'Frontend',
        list: [
            'React.js',
            'Next.js',
            'Ember.js',
            'JavaScript',
            'TypeScript',
            'HTML',
            'CSS',
            'Tailwind',
            'Redux',
            'Webpack',
            'Babel',
        ],
    },
    {
        category: 'Backend',
        list: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'SQL',
            'NoSQL',
            'Oracle Integration Cloud',
            'REST',
            'SOAP',
            'Java',
            'Python',
            'XSLT',
            'XML',
        ],
    },
    {
        category: 'Others',
        list: [
            'ESLint',
            'Git',
            'Docker',
            'EC2',
            'S3',
            'Data Structures and Algorithms',
            'MVVM',
            'Agile',
            'Object-Oriented Design',
            'Android',
        ],
    },
];

export const experience = [
    {
        company: 'Freelance Engineer',
        role: 'Software Engineer',
        location: 'Remote',
        duration: 'Jan 2025 – present',
        responsibilities: [
            'Developed OIC cloud landing page',
        ],
    },
    {
        company: 'Vthrive Solutions',
        role: 'Associate Software Engineer',
        location: 'Remote',
        duration: 'Jul 2023 – Dec 2024',
        responsibilities: [
            'Spearheaded Morphosys from scratch, focusing on SEO and mobile-first design, leading to a 20% surge in user engagement.',
            'Developed a job portal dashboard with chart libraries, streamlining candidate tracking and cutting admin hours by 23%.',
            'Built solutions for Oracle Cloud and OIC using SQL, XML, and XSLT, while mentoring junior developers on integration workflows.',
            'Engineered an innovative page-break algorithm leveraging pre-paint layout calculations, accelerating rendering speeds by 3x and enhancing document-like presentation.',
            'Collaborated with team to create admin and candidate portal for talentswap.ai, an AI-powered hiring platform to enhance the recruitment process.',
            'Enhanced form submission speed by 29% using FormData and React refs, reducing support tickets related to submission issues.',
        ],
    },
    {
        company: 'Raja Software Labs',
        role: 'Software Development Engineer Intern',
        location: 'Remote',
        duration: 'Jan 2023 – May 2023',
        responsibilities: [
            'Wrote unit and integration tests using Jest, boosting test coverage to 90% and reducing production bugs by 30%.',
            'Led legacy HTML migration to Ember.js apps, fixing 5–7 bugs/week to ensure high code quality and a seamless user experience.',
            'Orchestrated Redux Toolkit integration for centralized state management within the Morphosys application, reducing debugging time by 15%.',
            'Drove accessibility enhancements by embedding ARIA attributes and semantic HTML into 7 website templates.',
        ],
    },

];

export const projects = [
  {
    title: 'Morphosys',
    techUsed: ['React.js', 'Redux', 'Tailwind', 'PWA', 'TinyMCE', 'WebSockets'],
    description:
      'Script writing app with real-time collaboration, role-based access, offline support, and advanced script organization tools.',
    images: [morp1],
    liveLink: 'https://app.morphosys.io/scripts',
  },
  {
    title: 'World GDP',
    techUsed: ['React.js', 'CSS', 'react-charts'],
    description:
      'Interactive world GDP dashboard with a custom-built SVG map, search, and dynamic charts for visualizing economic data.',
    images: [gdp1],
    liveLink: 'https://rishicz.github.io/world-data/', // Replace with actual live link
    codeLink: 'https://github.com/rishiCz/world-data', // Replace with actual repo
  },
  {
    title: 'Gallery',
    techUsed: ['Next.js', 'CSS', 'Cloudinary', 'MongoDB'],
    description:
      'Photo gallery with tagged images, admin uploads, Google OAuth, and role-based access using Cloudinary and MongoDB.',
    images: [gallery1],
    liveLink: 'https://gallery-seven-pearl.vercel.app/images',
    codeLink: 'https://github.com/rishiCz/gallery', // Replace with actual repo
  },
];


