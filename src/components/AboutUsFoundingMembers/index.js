import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Hajdi Cenan',
    imgSrc: 'img/Hajdi_profilna.png',
    shortDescription: (
      <>
        Co-founder & CEO
      </>
    ),
    githubProfile: "https://github.com/hajdicenan",
    twitterProfile: "https://twitter.com/_hajdi",
    facebookProfile: "https://www.facebook.com/hajdi.cenan",
    linkedInProfile: "https://www.linkedin.com/in/hajdi/",
    longDescription: (
      <>
        Over 20 years of experience in running operations, sales, 
        and marketing in various industries: media, digital marketing, IT and AI.
      </>
    ),
  },
  {
    title: 'Davor Runje',
    imgSrc: 'img/Davor_profilna.png',
    shortDescription: (
      <>
        Co-founder & CTO
      </>
    ),
    githubProfile: "https://github.com/davorrunje",
    twitterProfile: "https://twitter.com/davorrunje",
    facebookProfile: "https://www.facebook.com/davor.runje",
    linkedInProfile: "https://www.linkedin.com/in/davorrunje/",
    longDescription: (
      <>
        Serial entrepreneur (2 successful exits), researcher, inventor and engineer. Over
        25 years of experience in the IT and AI world.
      </>
    ),
  },
];

function Feature({imgSrc, title, shortDescription, longDescription, githubProfile, twitterProfile, facebookProfile, linkedInProfile}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.profilePic} src={imgSrc}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
        <p className={styles.linkContainer}>
          <a className={`header-github-link ${styles.linkItems}`} href={githubProfile} target="_blank"/>
          <a className={`header-twitter-link ${styles.linkItems}`} href={twitterProfile} target="_blank"/>
          <a className={`header-facebook-link ${styles.linkItems}`} href={facebookProfile} target="_blank"/>
          <a className={`header-linkedin-link ${styles.linkItems}`} href={linkedInProfile} target="_blank"/>
        </p>
        <p>{longDescription}</p>
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
            <h2 className={styles.header}>Meet the founding team</h2>
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
