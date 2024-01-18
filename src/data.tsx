import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';


import Work1 from './assets/Work1.png'
import Work2 from './assets/Work2.png'
import Work3 from './assets/Work3.png'
import Work4 from './assets/Work4.png'
import Work5 from './assets/Work5.png'
import Work6 from './assets/Work6.png'
import Work7 from './assets/Work7.png'
import Work8 from './assets/Work8.png'
import Work9 from './assets/Work9.png'
import Work10 from './assets/Work10.png'
import Work11 from './assets/Work11.png'
import Work12 from './assets/Work12.png'
import Work13 from './assets/Work13.png'
import Work14 from './assets/Work14.png'
import Work15 from './assets/Work15.png'
import Work16 from './assets/Work16.png'

/*

import Theme1 from '../../../../../Downloads/steve assets/steve assets/assets/purple.png';
import Theme2 from '../../../../../Downloads/steve assets/steve assets/assets/red.png';
import Theme3 from '../../../../../Downloads/steve assets/steve assets/assets/blueviolet.png';
import Theme4 from '../../../../../Downloads/steve assets/steve assets/assets/blue.png';
import Theme5 from '../../../../../Downloads/steve assets/steve assets/assets/goldenrod.png';
import Theme6 from '../../../../../Downloads/steve assets/steve assets/assets/magenta.png';
import Theme7 from '../../../../../Downloads/steve assets/steve assets/assets/yellowgreen.png';
import Theme8 from '../../../../../Downloads/steve assets/steve assets/assets/orange.png';
import Theme9 from '../../../../../Downloads/steve assets/steve assets/assets/green.png';
import Theme10 from '../../../../../Downloads/steve assets/steve assets/assets/yellow.png';
*/


import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links : Array<LinksType> = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Mariya',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Mokeeva',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '25 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Russian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Magnitogorsk',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+79193563991',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'mari.74.front@gmail.com',
  },

  {
    id: 9,
    title: 'Telegram : ',
    description: 'https://t.me/AimlessPrayer',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Russian, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 4,
    no: '10+',
    title: ' Certificates  <br /> Received',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Typescript',
    percentage: '70',
  },
  {
    id: 2,
    title: 'JavaScript',
    percentage: '80',
  },
  {
    id: 3,
    title: 'React',
    percentage: '85',
  },  {
    id: 4,
    title: 'Angular',
    percentage: '60',
  },
  {
    id: 5,
    title: 'NextJS',
    percentage: '70',
  },
  {
    id: 6,
    title: 'Redux',
    percentage: '70',
  },
  {
    id: 7,
    title: 'Redux Toolkit',
    percentage: '40',
  },
  {
    id: 8,
    title: 'Rest API',
    percentage: '80',
  },
  {
    id: 9,
    title: 'Storybook',
    percentage: '70',
  },
  {
    id: 10,
    title: 'Unit Testing',
    percentage: '70',
  },
  {
    id: 11,
    title: 'Jasmine',
    percentage: '60',
  },
  {
    id: 12,
    title: 'UI Library',
    percentage: '90',
  },
  {
    id: 13,
    title: 'Figma',
    percentage: '80',
  },
  {
    id: 14,
    title: 'Styled Components',
    percentage: '75',
  },
  {
    id: 15,
    title: 'HTML',
    percentage: '80',
  },
  {
    id: 16,
    title: 'CSS',
    percentage: '80',
  },  {
    id: 17,
    title: 'SAAS/LESS/SCSS',
    percentage: '70',
  },

];

export const portfolio = [
  {
    id: 1,
    img: Work16,
    title: 'React Calculator',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Calculator',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React , Typescript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://thunderous-fenglisu-12ceb5.netlify.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work15,
    title: 'Drum Machine',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Drum Machine',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Typescript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://658ed36c3f2982b63e38851a--capable-entremet-63bd45.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work14,
    title: 'Markdown Previewer',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Markdown Previewer',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, Typescript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://stalwart-blini-70c108.netlify.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work13,
    title: 'Photography Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photography Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/react-photographer-portfolio/',
      },
    ],
  },

  {
    id: 5,
    img: Work12,
    title: 'Angular REST API',
    details: [
      {
        title: 'Project : ',
        desc: 'Angular REST API',
      },
      {
        title: 'Client : ',
        desc: 'Me',
      },
      {
        title: 'Language : ',
        desc: 'Angular , Typescript',
      },
      {
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/angular-restApp/',
      },
    ],
  },

  {
    id: 6,
    img: Work11,
    title: 'Car Hub',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Car Hub',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'NextJS, Typescript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://next-js-car-hub.vercel.app/',
      },
    ],
  },

  {
    id: 7,
    img: Work10,
    title: 'Photography Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Photography Portfolio',
        desc: 'Photography Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, TailwindCSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/react-photographer-multipage-portfolio/',
      },
    ],
  },

  {
    id: 8,
    img: Work9,
    title: 'Expense counter',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Expense counter',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/ReactCostAccounting/',
      },
    ],
  },

  {
    id: 9,
    img: Work8,
    title: 'Paralax',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Paralax Landing',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/w1llow1sp/ParalaxHtml',
      },
    ],
  },

  {
    id: 10,
    img: Work7,
    title: 'Recipe site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Recipe site',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/react--recipes/',
      },
    ],
  },

  {
    id: 11,
    img: Work6,
    title: 'Showcase site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Showcase',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/react-showcase/',
      },
    ],
  },

  {
    id: 12,
    img: Work5,
    title: 'Movies site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Movies site',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/React-Movie/',
      },
    ],
  },

  {
    id: 13,
    img: Work4,
    title: 'Batman Movie Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Batman Movie Site',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/w1llow1sp/React-Movie/deployments/github-pages',
      },
    ],
  },

  {
    id: 14,
    img: Work3,
    title: 'Batman Movie Site',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Batman Movie Site',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/Batman/',
      },
    ],
  },

  {
    id: 15,
    img: Work2,
    title: 'Melody',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Melody',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/JK_MELODY/',
      },
    ],
  },

  {
    id: 16,
    img: Work1,
    title: 'EVA Rugs',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'EVA Rugs',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Me',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS, Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://w1llow1sp.github.io/Evarugs/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

 export type LinksType = {
  id: number,
  name: string,
  icon:  JSX.Element,
  path: string,
}