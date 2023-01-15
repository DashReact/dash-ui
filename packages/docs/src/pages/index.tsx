import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx('hero__title text-white')}>{siteConfig.title}</h1>
        <p className="hero__subtitle text-white">{siteConfig.tagline}</p>
        <div className="flex items-centet gap-md mb-md">
          {/* <img className='w-xxl' src="https://img.shields.io/npm/v/@dash-ui-lib/core?style=for-the-badge.png" alt="npm version" /> */}
          <img
            className="w-xl round-sm"
            src={require('@site/static/img/badgets/ts.png').default}
            alt="npm version"
          />
          <img
            className="w-xl round-sm"
            src={require('@site/static/img/badgets/sass.jpeg').default}
            alt="npm version"
          />
          <img
            className="w-xl round-sm"
            src={require('@site/static/img/badgets/tailwind.png').default}
            alt="npm version"
          />
          <img
            className="w-xl round-sm"
            src={require('@site/static/img/badgets/vercel.png').default}
            alt="npm version"
          />
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg text-primary"
            to="/docs/installation/getting-started"
          >
            Get Started{' '}
            <svg
              stroke="currentColor"
              fill="white"
              stroke-width="0"
              viewBox="0 0 448 512"
              font-size="0.8em"
              aria-hidden="true"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Components library for build moder aplications with Vanilla js and React builded with sass and typescript"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
