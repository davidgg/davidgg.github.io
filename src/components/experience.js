import React from 'react';

const Experience = () => (
  <section id="experience" className="experience">
    <div className="section-container centered">
      <h1 className="section-title">Experience</h1>

      <div>
        <div className="experience__item marsbased">
          <div className="logo-img marsbased">
            <a
              href="https://marsbased.com/"
              title="MarsBased site"
              className="exp-link"
            >
              MarsBased
            </a>
          </div>
          <h2>MarsBased</h2>
          <p className="date">Now</p>
          <p className="desc">
            <span>Front-End Developer</span>
          </p>
          <p className="desc">
            Development consultancy from Barcelona offering{' '}
            <span>end‑to‑end web</span> and <span>mobile apps</span> based on
            Ruby on Rails and Javascript frameworks.
          </p>
        </div>

        <div className="experience__item sngular">
          <div className="logo-img sngular">
            <a
              href="http://www.sngular.team/"
              title="Sngular Software site"
              className="exp-link"
            >
              Sngular
            </a>
          </div>
          <h2>s|ngular</h2>
          <p className="date">2015-2016</p>
          <p className="desc">
            <span>Front-End Developer</span>
          </p>
          <p className="desc">
            Spanish company focused in <span>technology consulting</span>.
            Specialists in e-commerce, cloud computing and custom development.
            s|ngular contributed to the creation of the BuyVip platform,{' '}
            <span>bought by Amazon.</span>
          </p>
        </div>

        <div className="experience__item sweetspot">
          <div className="logo-img sweetspot">
            <a
              href="http://www.sweetspotintelligence.com/"
              title="Sweetspot Intelligence site"
              className="exp-link"
            >
              Sweetspot
            </a>
          </div>
          <h2>Sweetspot</h2>
          <p className="date">2014</p>
          <p className="desc">
            <span>Full-Stack Developer</span>
          </p>
          <p className="desc">
            Sweetspot Intelligence is a start-up dedicated to the development of
            a <span>reporting tool</span> that collects data from external
            sources, creating attractive charts and integrating them{' '}
            <span>into dashboards</span>.
          </p>
        </div>

        <div className="experience__item meetpays">
          <div className="logo-img meetpays">
            <a
              href="https://www.meetpays.com/about"
              title="Meetpays site"
              className="exp-link"
            >
              MeetPays
            </a>
          </div>
          <h2>MeetPays</h2>
          <p className="date">2013</p>
          <p className="desc">
            <span>Front-End Developer</span>
          </p>
          <p className="desc">
            Spanish <span>Bitcoin</span> start-up founded with the goal of
            creating innovative products for the Bitcoin market. Its main
            business is Bitcoin <span>trading</span> by use of traditional
            payment methods such as the <span>credit card</span>.
          </p>
        </div>

        <div className="experience__item more">
          <div className="logo-img more">+</div>
          <h2>More</h2>
          <p className="date">2008-2013</p>
          <p className="desc">
            I have worked in different areas, including <span>education</span>,{' '}
            <span>government </span> and <span>freelance</span> projects.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
