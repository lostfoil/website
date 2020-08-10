import React, { useState, FC } from 'react';
import { useSprings } from 'react-spring';
import styles from './services.module.css';

import bgImage from '../../assets/images/service-bg-image.png';
import AccordionCard from './accordianCard/accordianCard';

import { ReactComponent as Svg1 } from '../../assets/svgs/service-1.svg';
import { ReactComponent as Svg2 } from '../../assets/svgs/service-4.svg';
import { ReactComponent as Svg3 } from '../../assets/svgs/service-2.svg';
import { ReactComponent as Svg4 } from '../../assets/svgs/service-5.svg';

const cards = [
  {
    heading: 'Web Development',
    para:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    bgColor: '#D43556',
    bgImage,
    svgs: [
      {
        Svg: Svg1,
        style: {
          width: '5rem',
          marginTop: '3rem',
          marginLeft: '-2rem',
        },
      },
      {
        Svg: Svg2,
        style: {
          width: '3rem',
          marginTop: '0.5rem',
          marginLeft: '2rem',
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
          width: '5rem',
          marginTop: '3rem',
          marginLeft: '-2rem',
        },
      },
      {
        Svg: Svg2,
        style: {
          width: '3rem',
          marginTop: '0.5rem',
          marginLeft: '2rem',
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
          width: '6rem',
          marginTop: '1rem',
          marginLeft: '-0.5rem',
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
          marginTop: '3rem',
          marginLeft: '-1rem',
        },
      },
    ],
    key: 'Managed Hosting',
  },
];

const Services: FC = () => {
  const [active, changeActive] = useState(1);

  const springs = useSprings(
    cards.length,
    cards.map((_card, i) => ({
      width: active === i ? '50rem' : '4rem',
      alignSelf: active === i ? 'flex-start' : 'center',
      justifyContent: active === i ? `flex-start` : `center`,
      fontSize: active === i ? '2rem' : '1rem',
      transform: active === i ? `rotate(-90deg)` : `rotate(-90deg)`,
      opacity: active === i ? 0 : 1,
    }))
  );
  // console.log(springs);
  return (
    <div className={styles.services_parent}>
      <h1 className={styles.h1}>Services</h1>
      <hr className={styles.hr} />
      <div className={styles.accordion_container}>
        {springs.map((props, index) => {
          return (
            <AccordionCard
              props={props}
              heading={cards[index].heading}
              para={cards[index].para}
              svgs={cards[index].svgs}
              changeActive={changeActive}
              number={index}
              isActive={active === index}
              key={cards[index].key}
              bgImage={cards[index].bgImage}
              bgColor={cards[index].bgColor}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Services;
