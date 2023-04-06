import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const NewsList = [
  {
    section1Header: "Patent: issued!",
    section1Description: (
      <>
        Our USPTO patent application for adding a layer of explainability to neural networks 
        without compromising their accuracy has now been issued as well!
      </>
    ),
    section1Link: "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11551063",
    section1ImgSrc: "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/5a6787cf-8ba8-40f5-9539-5d8f548c5fad/2023.01.10+patent.jpeg?format=1500w",
    section2Header: "Dreamers. On.",
    section2Description: (
      <>
        Our co-founder & CEO, Hajdi, was nominated for the Global Startup Award's Diversity Role 
        Model of the Year, and became somewhat of an ambassador of that category.
      </>
    ),
    section2Link: "https://www.linkedin.com/feed/update/urn:li:activity:7005469152526135296/",
    section2ImgSrc: "https://images.squarespace-cdn.com/content/v1/5d9d87ed4412b87c774803cf/d65f0a2f-53b8-433d-9e19-a88baa01c9fe/2022.12.19+GSA.png?format=1500w"
  },
]

function NewsItem({section1Header, section1Description, section1Link, section1ImgSrc, section2Header, section2Description, section2Link, section2ImgSrc}) {
  return (
    <div>
      <div className="row">
        <div className="col col--6">
          <img className={styles.img} src={section1ImgSrc} />
        </div>
        <div className="col col--6">
          <p className={styles.header}>{section1Header}</p>
          <p>{section1Description}</p>
          <Link
            className="button button--secondary button--lg"
            to={section1Link}>
              Learn more
          </Link>
        </div>
      </div>
      <hr className={styles.styledHr} />
      <div className="row">
            <div className="col col--6">
              <p className={styles.header}>{section2Header}</p>
              <p>{section2Description}</p>
              <Link
                className="button button--secondary button--lg"
                to={section2Link}>
                  Learn more
              </Link>
            </div>
            <div className="col col--6">
              <img className={styles.img} src={section2ImgSrc} />
            </div>
          </div>
    </div>
  );
}

export default function News() {
  return (
    <Layout title="News" description="news">
      <section>
      <div className={`container ${styles.wrapper}`}>
        <hr className={styles.styledHr} />
        {NewsList.map((props, idx) => (
            <NewsItem key={idx} {...props} />
          ))}
      </div>
    </section>
    </Layout>
  );
}