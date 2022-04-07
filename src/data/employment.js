import { IoMdBriefcase } from 'react-icons/io';

export const employmentData = () => {
    return {
        title: 'Employment History',
        icon: <IoMdBriefcase className='section-icon' size={22} />,
        values: [
            {
                title: 'UX Engineer at Digité Inc.',
                type: 'Full Time',
                date: 'August 2021 - Present',
                listData: [
                    'Ideating over user experience and creating prototypes.',
                    'Solve tough UX problems with creative and engaging solutions that make our product a delight to use.',
                    'Designing product screens for the web-based platform using tools like Figma and Inkscape.',
                    'Building web application as per designs using UI-Framework ReactJS, Redux and Material UI.',
                    'Integrating business logic endpoints to bring various functionalities.',
                ],
            },
            {
                title: 'Frontend Developer at Digité Inc.',
                type: 'Internship',
                date: 'January 2021 - July 2021',
                listData: [
                    'Designed widgets that can be used across multiple products and cross-platform.',
                    'Built web components and logic utilities using Javascript, JSX and SASS.',
                    'Learned to work in an agile environment with daily stand-ups.',
                    'Wrote unit tests in Jest and Enzyme to ensure code is 100% tested and bug-free.',
                ],
            },
            {
                title: 'MERN Developer at 10xGrowth',
                type: 'Internship',
                date: 'June 2020 - December 2020',
                listData: [
                    'Used technologies like NextJS, ReactJS, Firebase, MongoDB, Node-LoopbackJS and other libraries and utilities to solve complex problems.',
                    'Created user friendly and attractive user interfaces using Material UI and SASS.',
                    'Wrote business logic in LoopbackJS and exposed to endpoints.',
                    'Formulated and implemented performance improvement techniques, minimizing web page load time.',
                    'Wrote reusable and clean code.',
                ],
            },
        ],
    };
};
