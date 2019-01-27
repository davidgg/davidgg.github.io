import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Cookies from '../components/cookies';

const CookiesPage = () => (
  <Layout>
    <SEO
      title="Cookies"
      keywords={[`davidgg`, `front-end`, `developer`, `cookies`]}
    />

    <Cookies />
  </Layout>
);

export default CookiesPage;
