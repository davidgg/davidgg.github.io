import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const About = ({ data }) => (
  <section id="about">
    <div className="section-container centered">
      <div className="me-img" />
      <h1 className="section-title">About Me</h1>
      <div className="interest-cloud">
        <Img fluid={data.interests.childImageSharp.fluid} alt="Interests" />
      </div>
      {/* <img src="images/interests.png" className="interest-cloud" /> */}
      <div className="me">
        <p>
          Hi! I'm David GG{' '}
          <span className="slogan">I love to build amazing products.</span> I'm
          a Software Engineer from Spain, front-end enthusiastic. In the last
          few years I worked for start-up companies with innovative products in
          competitive markets. Self-taught developer, I'm always learning new
          technologies.
        </p>
        <p>
          I spend my free time taking photos, reading and playing videogames.
        </p>
        <p>
          I collaborate with some charitable organizations. My aspiration is to
          create cool things that improve people's lives.
        </p>
      </div>
    </div>
  </section>
);

export default props => (
  <StaticQuery
    query={query}
    render={data => <About data={data} {...props} />}
  />
);

export const query = graphql`
  query {
    interests: file(relativePath: { eq: "interests.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
