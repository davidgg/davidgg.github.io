import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import mailImage from '../images/mail.png';

const Projects = ({ data }) => (
  <section id="projects">
    <div className="section-container centered">
      <h1 className="section-title">Projects</h1>

      <div className="projects pleoprog">
        <div className="projects__image-container">
          <Img fluid={data.pleoImage.childImageSharp.fluid} />
        </div>

        <h2>PleoProg</h2>
        <div className="work-explanation">
          <p>
            <a href="http://www.pleoworld.com/" title="Pleo">
              Pleo
            </a>{' '}
            is an artificial form of life (robot) that has a dinosaur appearance
            with a high capacity of interaction through its sensors and motors.
          </p>
          <p>
            PleoProg is a DSL programming tool for Pleo. PleoProg allows the
            creation and modification of diagrams to build a Pleo's personality
            in a very simple and intuitive way. Makes robot programming easy and
            available to all the public.
          </p>
        </div>
      </div>

      <div className="projects itec">
        <div className="projects__image-container">
          <Img
            fluid={data.itecImage.childImageSharp.fluid}
            alt="European project iTEC logo"
          />
        </div>
        <h2>European project iTEC</h2>
        <div className="work-explanation">
          <p>
            Contributor in the European project{' '}
            <a
              href="http://itec.eun.org/web/guest"
              title="Innovative technologies for an engaging classroom site"
            >
              iTEC
            </a>
            . Project of the FP7 framework that aims to create the classroom of
            the future. The project has participants from over 19 countries and
            it has a budget of 9.5 million €.
          </p>
          <p>
            My personal contribution focuses on developing a system for
            collecting, processing and visualizing usage data by using
            technologies like JEE, HTML5, CSS3, JS, D3, etc.
          </p>
        </div>
      </div>

      <div className="projects more">
        <h2>More</h2>
        <div className="work-explanation">
          <p>
            I've created Android apps, jQuery plugins, Python apps, sites and
            other projects. You can visit my{' '}
            <a href="https://github.com/davidgg" title="David GG Github">
              GitHub
            </a>{' '}
            to explore some of them or you can write me (
            <img src={mailImage} alt="contact" className="work-contact" />) if
            you want more information about me.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default props => (
  <StaticQuery
    query={query}
    render={data => <Projects data={data} {...props} />}
  />
);

export const fluidProjectImage = graphql`
  fragment fluidProjectImage on File {
    childImageSharp {
      fluid(quality: 90, maxWidth: 480) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
export const query = graphql`
  query {
    pleoImage: file(relativePath: { eq: "pleo.png" }) {
      ...fluidProjectImage
    }
    itecImage: file(relativePath: { eq: "itec-logo.png" }) {
      ...fluidProjectImage
    }
  }
`;
