import bgImage from '../images/service-bg-image.png';

import { ReactComponent as Svg1 } from '../svgs/service-1.svg';
import { ReactComponent as Svg2 } from '../svgs/service-4.svg';
import { ReactComponent as Svg3 } from '../svgs/service-2.svg';
import { ReactComponent as Svg4 } from '../svgs/service-5.svg';

const cards = [
  {
    heading: 'Web Development',
    para:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    bgColor: '#478AFF',
    bgImage,
    svgs: [
      {
        Svg: Svg1,
        style: {
          width: '4rem',
          marginTop: '3rem',
          marginLeft: '-2rem',
        },
      },
      {
        Svg: Svg2,
        style: {
          width: '3.5rem',
          marginTop: '0.5rem',
          marginLeft: '1.7rem',
        },
      },
    ],
    key: 'Web Development',
  },
  {
    heading: 'App Development',
    para:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    bgColor: '#D43556',
    bgImage,
    svgs: [
      {
        Svg: Svg1,
        style: {
          width: '4rem',
          marginTop: '3rem',
          marginLeft: '-2rem',
        },
      },
      {
        Svg: Svg2,
        style: {
          width: '3.5rem',
          marginTop: '0.5rem',
          marginLeft: '1.7rem',
        },
      },
    ],
    key: 'App Development',
  },

  {
    heading: 'UI/UX Design',
    para:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    bgColor: '#DC8C0C',
    bgImage,
    svgs: [
      {
        Svg: Svg3,
        style: {
          width: '5.5rem',
          marginTop: '0rem',
          marginLeft: '0rem',
        },
      },
    ],
    key: 'UI/UX Design',
  },
  {
    heading: 'Managed Hosting',
    para:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    bgColor: '#049C6C',
    bgImage,
    svgs: [
      {
        Svg: Svg4,
        style: {
          width: '5rem',
          marginTop: '1rem',
          marginLeft: '-1rem',
        },
      },
    ],
    key: 'Managed Hosting',
  },
];
export default cards;
