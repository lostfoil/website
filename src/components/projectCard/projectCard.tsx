import React, { FC } from 'react';
import styles from './projectCard.module.css';

interface ProjectCardProps {
  lefty: boolean;
  heading: string;
  para: string;
  color: string;
  borderOptions?: {
    borderTopWidth?: string;
    borderBottomWidth?: string;
    borderRightWidth?: string;
    borderLeftWidth?: string;
    borderColor?: string;
  };
  img: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ lefty, heading, para, color, borderOptions, img }) => {
  return (
    <div className={styles.card_container}>
      <div className={lefty ? styles.descriptor_left : styles.descriptor_right} style={{ backgroundColor: color }}>
        <h2 className={styles.h1}>{heading}</h2>
        <p className={styles.p}>{para}</p>
      </div>
      <div
        className={lefty ? styles.card_left : styles.card_right}
        style={{ ...borderOptions, backgroundImage: `url(${img})` }}
      />
    </div>
  );
};
export default ProjectCard;
