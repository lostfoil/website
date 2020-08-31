import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';

const projectCardData = [
  {
    heading: 'Bridg.',
    para:
      'Bridg is an enterprise SaaS software platform designed for brick and mortar retailers, cpg brands, cinemas, restaurants, departmental stores etc.',
    color: '#6C91D8',
    img: project1,
    lefty: true,
    letter: 'B',
    letterBG: project2,
  },
  {
    heading: 'Cardz',
    para:
      'Web Exploration of Trust Bank Credit cards. Cardz can help you get the best fit credit card for you daily lives with just a single click.',
    color: '#FC6C4E',
    img: project2,
    lefty: false,
    letter: 'C',
    letterBG: project3,
  },
  {
    heading: 'Travel',
    para:
      'Travel. - is an intelligent, AI-based travel app that helps you organize, book, and track your trips. Earn travel points each time and spend 100% on your next flight.',
    color: '#502FFF',
    img: project3,
    lefty: true,
    letter: 'T',
    letterBG: project4,
  },
  {
    heading: 'Crowdfunding',
    para: `I'm working on an exploration of the Crowdfunding Landing page. Take a look at the design of this awesome landing page!`,
    color: '#3BB273',
    img: project4,
    lefty: false,
    letter: 'C',
    letterBG: project1,
  },
];
export default projectCardData;
