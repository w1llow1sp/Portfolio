import {FaBriefcase, FaCode, FaEnvelopeOpen, FaFolderOpen, FaGraduationCap, FaHome, FaUser} from "react-icons/fa";
import {
    contactDataType,
    experienceAndEducationType, linksDataType,
    personalInfoDataType, portfolioDataType,
    sectionAboutTextType, skillsDataType,
    statsDataType, themeHeaderType, themesType
} from "./types";
import {FiExternalLink, FiFileText, FiUser} from "react-icons/fi";

//import images of works
import {
    Work1,Work2,Work3,
    Work4,Work5,Work6,
    Work7,Work8,Work9,
    Work10,Work11,Work12,
    Work13,Work14,Work15,
    Work16} from "../assets";
// import images for Theme
import {
    Theme1,Theme2,Theme3,
    Theme4,Theme5,Theme6,
    Theme7,Theme8,Theme9,
    Theme10} from "../assets";

// import icons
import {
    SiAngular, SiFigma, SiJasmine,
    SiJavascript,
    SiJest,
    SiNextdotjs,
    SiReact,
    SiRedux,
    SiStorybook, SiStyledcomponents, SiTailwindcss,
    SiTypescript
} from "react-icons/si";
import {TbApi} from "react-icons/tb";
import {IoLogoCss3, IoLogoHtml5, IoLogoSass} from "react-icons/io";

export const navLinksData: Array<linksDataType> = [
    {
        id: 1,
        name: 'nav.home',
        icon: <FaHome className='nav__icon'/>,
        path: '/',
    },

    {
        id: 2,
        name: 'nav.about',
        icon: <FaUser className='nav__icon'/>,
        path: '/about',
    },

    {
        id: 3,
        name: 'nav.portfolio',
        icon: <FaFolderOpen className='nav__icon'/>,
        path: '/portfolio',
    },

    {
        id: 4,
        name: 'nav.contact',
        icon: <FaEnvelopeOpen className='nav__icon'/>,
        path: '/contact',
    }
]
export const personalInfo: personalInfoDataType[] = [
    {
        id: 'about.personalInfo.details.0.id',
        title: 'about.personalInfo.details.0.title',
        description: 'about.personalInfo.details.0.description',
    }, {
        id: 'about.personalInfo.details.1.id',
        title: 'about.personalInfo.details.1.title',
        description: 'about.personalInfo.details.1.description',
    }, {
        id: 'about.personalInfo.details.2.id',
        title: 'about.personalInfo.details.2.title',
        description: 'about.personalInfo.details.2.description',
    }, {
        id: 'about.personalInfo.details.3.id',
        title: 'about.personalInfo.details.3.title',
        description: 'about.personalInfo.details.3.description',
    }, {
        id: 'about.personalInfo.details.4.id',
        title: 'about.personalInfo.details.4.title',
        description: 'about.personalInfo.details.4.description',
    }, {
        id: 'about.personalInfo.details.5.id',
        title: 'about.personalInfo.details.5.title',
        description: 'about.personalInfo.details.5.description',
    }, {
        id: 'about.personalInfo.details.6.id',
        title: 'about.personalInfo.details.6.title',
        description: 'about.personalInfo.details.6.description',
    }, {
        id: 'about.personalInfo.details.7.id',
        title: 'about.personalInfo.details.7.title',
        description: 'about.personalInfo.details.7.description',
    }, {
        id: 'about.personalInfo.details.8.id',
        title: 'about.personalInfo.details.8.title',
        description: 'about.personalInfo.details.8.description',
    }, {
        id: 'about.personalInfo.details.9.id',
        title: 'about.personalInfo.details.9.title',
        description: 'about.personalInfo.details.9.description',
    }]
export const sectionAboutText: sectionAboutTextType = {
    header: {
        header: 'about.header.header',
        spanName: 'about.header.spanName',
        subtitle:'about.personalInfo.header'
    },
    buttonText: {
        text: 'about.buttonText.text'
    }
}
export const statsData: Array<statsDataType> = [
    {
        id: 'about.stats.0.id',
        no: 'about.stats.0.no',
        title: 'about.stats.0.title',
    },

    {
        id: 'about.stats.1.id',
        no: 'about.stats.1.no',
        title: 'about.stats.1.title',
    },

    {
        id: 'about.stats.2.id',
        no: 'about.stats.2.no',
        title: 'about.stats.2.title',
    },

    {
        id: 'about.stats.3.id',
        no: 'about.stats.3.no',
        title: 'about.stats.3.title',
    },
]
export const skillsData: skillsDataType = {
    title: 'about.skills.header',
    items:[
        {
            id: 1,
            title: 'Typescript',
            percentage: 70,
            img:<SiTypescript />

        },
        {
            id: 2,
            title: 'JavaScript',
            percentage: 80,
            img:<SiJavascript />
        },
        {
            id: 3,
            title: 'React',
            percentage: 85,
            img:<SiReact />
        }, {
            id: 4,
            title: 'Angular',
            percentage: 60,
            img:<SiAngular />
        },
        {
            id: 5,
            title: 'NextJS',
            percentage: 70,
            img:<SiNextdotjs />
        },
        {
            id: 6,
            title: 'Redux',
            percentage: 70,
            img:<SiRedux />
        },
        {
            id: 7,
            title: 'Redux Toolkit',
            percentage: 40,
            img:<SiRedux />
        },
        {
            id: 8,
            title: 'Rest API',
            percentage: 80,
            img:<TbApi />
        },
        {
            id: 9,
            title: 'Storybook',
            percentage: 70,
            img:<SiStorybook />
        },
        {
            id: 10,
            title: 'Unit Testing',
            percentage: 70,
            img:<SiJest />
        },
        {
            id: 11,
            title: 'Jasmine',
            percentage: 60,
            img:<SiJasmine />
        },
        {
            id: 12,
            title: 'UI Library',
            percentage: 90,
            img:<SiTailwindcss />
        },
        {
            id: 13,
            title: 'Figma',
            percentage: 80,
            img:<SiFigma />
        },
        {
            id: 14,
            title: 'Styled Components',
            percentage: 75,
            img:<SiStyledcomponents />
        },
        {
            id: 15,
            title: 'HTML',
            percentage: 80,
            img:<IoLogoHtml5 />
        },
        {
            id: 16,
            title: 'CSS',
            percentage: 80,
            img:<IoLogoCss3 />
        }, {
            id: 17,
            title: 'SAAS/LESS/SCSS',
            percentage: 70,
            img:<IoLogoSass />
        },

    ]
}
export const experienceAndEducation: experienceAndEducationType = {
    header: 'about.experienceAndEducation.header',
    details: [
        {
            id: 1,
            category: 'experience',
            icon: <FaBriefcase/>,
            year: 'about.experienceAndEducation.details.0.year',
            title: 'about.experienceAndEducation.details.0.title',
            desc: 'about.experienceAndEducation.details.0.desc',
        },

        {
            id: 2,
            category: 'experience',
            icon: <FaBriefcase/>,
            year: 'about.experienceAndEducation.details.1.year',
            title: 'about.experienceAndEducation.details.1.title',
            desc: 'about.experienceAndEducation.details.1.desc',
        },

        {
            id: 3,
            category: 'experience',
            icon: <FaBriefcase/>,
            year: 'about.experienceAndEducation.details.2.year',
            title: 'about.experienceAndEducation.details.2.title',
            desc: 'about.experienceAndEducation.details.2.desc',
        },

        {
            id: 4,
            category: 'education',
            icon: <FaGraduationCap/>,
            year: 'about.experienceAndEducation.details.3.year',
            title: 'about.experienceAndEducation.details.3.title',
            desc: 'about.experienceAndEducation.details.3.desc',
        },

        {
            id: 5,
            category: 'education',
            icon: <FaGraduationCap/>,
            year: 'about.experienceAndEducation.details.4.year',
            title: 'about.experienceAndEducation.details.4.title',
            desc: 'about.experienceAndEducation.details.4.desc',
        },

        {
            id: 6,
            category: 'education',
            icon: <FaGraduationCap/>,
            year: 'about.experienceAndEducation.details.5.year',
            title: 'about.experienceAndEducation.details.5.title',
            desc: 'about.experienceAndEducation.details.5.desc',
        },
    ]
}
export const portfolioData : portfolioDataType = {
    header: {
        header: 'portfolio.header.header',
        spanName: 'portfolio.header.spanName'
    },
    portfolio: [
        {
            id: 1,
            img: Work16,
            title: 'portfolio.portfolio.0.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.0.details.0.title',
                    desc: 'portfolio.portfolio.0.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.0.details.1.title',
                    desc: 'portfolio.portfolio.0.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.0.details.2.title',
                    desc: 'portfolio.portfolio.0.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.0.details.3.title',
                    desc: 'portfolio.portfolio.0.details.3.desc',
                },
            ],
        },
        {
            id: 2,
            img: Work15,
            title: 'portfolio.portfolio.1.title',
            details: [
                {
                    title: 'portfolio.portfolio.1.details.0.title',
                    desc: 'portfolio.portfolio.1.details.0.desc',
                },
                {
                    title: 'portfolio.portfolio.1.details.1.title',
                    desc: 'portfolio.portfolio.1.details.1.desc',
                },
                {
                    title: 'portfolio.portfolio.1.details.2.title',
                    desc: 'portfolio.portfolio.1.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.1.details.3.title',
                    desc: 'portfolio.portfolio.1.details.3.desc',
                },
            ],
        },
        {
            id: 3,
            img: Work14,
            title: 'portfolio.portfolio.2.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.2.details.0.title',
                    desc: 'portfolio.portfolio.2.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.2.details.1.title',
                    desc: 'portfolio.portfolio.2.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.2.details.2.title',
                    desc: 'portfolio.portfolio.2.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.2.details.3.title',
                    desc: 'portfolio.portfolio.2.details.3.desc',
                },
            ],
        },
        {
            id: 4,
            img: Work13,
            title: 'portfolio.portfolio.3.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.3.details.0.title',
                    desc: 'portfolio.portfolio.3.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.3.details.1.title',
                    desc: 'portfolio.portfolio.3.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.3.details.2.title',
                    desc: 'portfolio.portfolio.3.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.3.details.3.title',
                    desc: 'portfolio.portfolio.3.details.3.desc',
                },
            ],
        },
        {
            id: 5,
            img: Work12,
            title: 'portfolio.portfolio.4.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.4.details.0.title',
                    desc: 'portfolio.portfolio.4.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.4.details.1.title',
                    desc: 'portfolio.portfolio.4.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.4.details.2.title',
                    desc: 'portfolio.portfolio.4.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.4.details.3.title',
                    desc: 'portfolio.portfolio.4.details.3.desc',
                },
            ],
        },
        {
            id: 6,
            img: Work11,
            title: 'portfolio.portfolio.5.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.5.details.0.title',
                    desc: 'portfolio.portfolio.5.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.5.details.1.title',
                    desc: 'portfolio.portfolio.5.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.5.details.2.title',
                    desc: 'portfolio.portfolio.5.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.5.details.3.title',
                    desc: 'portfolio.portfolio.5.details.3.desc',
                },
            ],
        },
        {
            id: 7,
            img: Work10,
            title: 'portfolio.portfolio.6.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.6.details.0.title',
                    desc: 'portfolio.portfolio.6.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.6.details.1.title',
                    desc: 'portfolio.portfolio.6.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.6.details.2.title',
                    desc: 'portfolio.portfolio.6.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.6.details.3.title',
                    desc: 'portfolio.portfolio.6.details.3.desc',
                },
            ],
        },
        {id: 8,
            img: Work9,
            title: 'portfolio.portfolio.7.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.7.details.0.title',
                    desc: 'portfolio.portfolio.7.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.7.details.1.title',
                    desc: 'portfolio.portfolio.7.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.7.details.2.title',
                    desc: 'portfolio.portfolio.7.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.7.details.3.title',
                    desc: 'portfolio.portfolio.7.details.3.desc',
                },
            ],
        },
        {
            id: 9,
            img: Work8,
            title: 'portfolio.portfolio.8.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.8.details.0.title',
                    desc: 'portfolio.portfolio.8.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.8.details.1.title',
                    desc: 'portfolio.portfolio.8.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.8.details.2.title',
                    desc: 'portfolio.portfolio.8.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.8.details.3.title',
                    desc: 'portfolio.portfolio.8.details.3.desc',
                },
            ],
        },
        {
            id: 10,
            img: Work7,
            title: 'portfolio.portfolio.9.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.9.details.0.title',
                    desc: 'portfolio.portfolio.9.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.9.details.1.title',
                    desc: 'portfolio.portfolio.9.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.9.details.2.title',
                    desc: 'portfolio.portfolio.9.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.9.details.3.title',
                    desc: 'portfolio.portfolio.9.details.3.desc',
                },
            ]
        },
        {
            id: 11,
            img: Work6,
            title: 'portfolio.portfolio.10.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.10.details.0.title',
                    desc: 'portfolio.portfolio.10.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.10.details.1.title',
                    desc: 'portfolio.portfolio.10.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.10.details.2.title',
                    desc: 'portfolio.portfolio.10.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.10.details.3.title',
                    desc: 'portfolio.portfolio.10.details.3.desc',
                },
            ]
        },
        {
            id: 12,
            img: Work5,
            title: 'portfolio.portfolio.11.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.11.details.0.title',
                    desc: 'portfolio.portfolio.11.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.11.details.1.title',
                    desc: 'portfolio.portfolio.11.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.11.details.2.title',
                    desc: 'portfolio.portfolio.11.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.11.details.3.title',
                    desc: 'portfolio.portfolio.11.details.3.desc',
                },
            ]
        },
        {
            id: 13,
            img: Work4,
            title: 'portfolio.portfolio.12.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.12.details.0.title',
                    desc: 'portfolio.portfolio.12.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.12.details.1.title',
                    desc: 'portfolio.portfolio.12.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.12.details.2.title',
                    desc: 'portfolio.portfolio.12.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.12.details.3.title',
                    desc: 'portfolio.portfolio.12.details.3.desc',
                },
            ]
        },
        {
            id: 14,
            img: Work3,
            title: 'portfolio.portfolio.13.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.13.details.0.title',
                    desc: 'portfolio.portfolio.13.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.13.details.1.title',
                    desc: 'portfolio.portfolio.13.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.13.details.2.title',
                    desc: 'portfolio.portfolio.13.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.13.details.3.title',
                    desc: 'portfolio.portfolio.13.details.3.desc',
                },
            ]
        },
        {
            id: 15,
            img: Work2,
            title: 'portfolio.portfolio.14.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.14.details.0.title',
                    desc: 'portfolio.portfolio.14.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.14.details.1.title',
                    desc: 'portfolio.portfolio.14.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.14.details.2.title',
                    desc: 'portfolio.portfolio.14.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.14.details.3.title',
                    desc: 'portfolio.portfolio.14.details.3.desc',
                },
            ]
        },
        {   id: 16,
            img: Work1,
            title: 'portfolio.portfolio.15.title',
            details: [
                {
                    icon: <FiFileText/>,
                    title: 'portfolio.portfolio.15.details.0.title',
                    desc: 'portfolio.portfolio.15.details.0.desc',
                },
                {
                    icon: <FiUser/>,
                    title: 'portfolio.portfolio.15.details.1.title',
                    desc: 'portfolio.portfolio.15.details.1.desc',
                },
                {
                    icon: <FaCode/>,
                    title: 'portfolio.portfolio.15.details.2.title',
                    desc: 'portfolio.portfolio.15.details.2.desc',
                },
                {
                    icon: <FiExternalLink/>,
                    title: 'portfolio.portfolio.15.details.3.title',
                    desc: 'portfolio.portfolio.15.details.3.desc',
                },
            ]
        },
    ]
}
export const contactsData : contactDataType = {
    header: {
        header:'contact.header.header',
        spanName:'contact.header.spanName'
    },
    sectionText : {
        subheader:'contact.sectionText.subheader',
        text:'contact.sectionText.text'
    },
    forIconText: {
        email:'contact.forIconText.email',
        phone:'contact.forIconText.phone'
    },
    formText : {
        name:'contact.formText.name',
        mail:"contact.formText.mail",
        subject:'contact.formText.subject',
        message:'contact.formText.message',
        btnText:'contact.formText.btnText',
        sending:'contact.formText.sending'
    }
}
export const themes:themesType[] = [
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
export const themeHeader : themeHeaderType = {
    header:'themeSwitcher.header'
}

