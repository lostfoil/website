import React, { FC } from 'react';
import styles from './projectSection.module.css';

import ProjectCard from '../projectCard/projectCard';

import projectCardData from '../../assets/data/projectCardData';

const ProjectSection: FC = () => {
  return (
    <div className={styles.project_container}>
      <div className={styles.header}>
        <div className={styles.header_up}>
          <h1 className={styles.h1}>Recent</h1>
        </div>
        <div className={styles.header_down}>
          <h1 className={styles.h1}>Projects</h1>
          <hr className={styles.hr} />
        </div>
      </div>
      {projectCardData.map((card_data, index) => {
        return (
          <ProjectCard
            color={card_data.color}
            heading={card_data.heading}
            lefty={card_data.lefty}
            img={card_data.img}
            para={card_data.para}
          />
        );
      })}
    </div>
  );
};
export default ProjectSection;
