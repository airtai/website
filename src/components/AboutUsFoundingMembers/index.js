import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hajdi Cenan',
    imgSrc: 'img/Hajdi_profilna.png',
    description: (
      <>
        Co-founder & CEO
      </>
    ),
  },
  {
    title: 'Davor Runje',
    imgSrc: 'img/Davor_profilna.png',
    description: (
      <>
        Co-founder & CTO
      </>
    ),
  },
];

function Feature({imgSrc, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.profilePic} src={imgSrc}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function AboutUsFoundingMembers() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <p className={styles.header}>Meet the founding team</p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
