import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';

import '../scss/ench.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="David GG" keywords={[`davidgg`, `front-end`, `developer`]} />

    <div className="sky-separator" />

    <About />
    <Experience />

    <div className="separator" />

    <Projects />

    <div className="sea-separator" />
  </Layout>
);

export default IndexPage;
