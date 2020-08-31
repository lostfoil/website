import React, { useState, FC } from 'react';
import { useSprings } from 'react-spring';
import styles from './services.module.css';

import AccordionCard from './accordianCard/accordianCard';

import cards from '../../assets/data/servicesCardData';

const Services: FC = () => {
  const [active, changeActive] = useState(1);

  const springs = useSprings(
    cards.length,
    cards.map((_card, i) => ({
      width: active === i ? '50rem' : '4rem',
      alignSelf: active === i ? 'flex-start' : 'center',
      justifyContent: active === i ? `flex-start` : `center`,
      fontSize: active === i ? '1.8rem' : '1rem',
      transform: active === i ? `rotate(-90deg)` : `rotate(-90deg)`,
      opacity: active === i ? 0 : 1,
    }))
  );

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
