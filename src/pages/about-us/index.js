import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import AboutUsSection from '@site/src/components/AboutUsSection';
import AboutUsFoundingMembers from '@site/src/components/AboutUsFoundingMembers';

import styles from '../index.module.css';

export default function AboutUs() {
  return (
    <Layout title="About-us" description="About Us Page">
      <div>
        <AboutUsSection />
      </div>
      <div>
        <AboutUsFoundingMembers />
      </div>
    </Layout>
  );
}