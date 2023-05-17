import React from 'react';
import Layout from '@theme/Layout';
import AboutUsSection from '@site/src/components/AboutUsSection';
import AboutUsFoundingMembers from '@site/src/components/AboutUsFoundingMembers';
import RobotFooterIcon from '@site/src/components/RobotFooterIcon';

export default function AboutUs() {
  return (
    <Layout title="About us" description="About Us Page">
      <div>
        <AboutUsSection />
      </div>
      <div>
        <AboutUsFoundingMembers />
      </div>
      <RobotFooterIcon />
    </Layout>
  );
}